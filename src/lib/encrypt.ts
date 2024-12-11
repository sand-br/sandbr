import crypto from "crypto";

interface Conversor {
  arquivo: File | null;
  texto_final: (g: string) => void;
  senha: string
  texto_encriptado: (g: string) => void;
  tag: (g: string) => void;
}

interface Decr {
  texto_encriptado: string
  senha: string
  tag: string
  tdec: (g: string) => void;
}

export async function criptografar({ arquivo, senha, texto_final, texto_encriptado, tag }: Conversor) {
  const iv = "uwbfnmL5AVcwt5uA"
  const converter = (arquivo: File) => {
    return new Promise<string>((resolve, reject) => {
      const arq = new FileReader();
  
      arq.onload = () => {
        const arrayBuffer = arq.result as ArrayBuffer;
        const bytes = new Uint8Array(arrayBuffer);
        const binaryString = Array.from(bytes).map(byte => String.fromCharCode(byte)).join('');
        const base64String = btoa(binaryString);
        resolve(base64String);
      };
  
      arq.onerror = (error) => {
        console.error("Houve um erro ao converter o arquivo: ", error);
        reject(error);
      };
  
      // Lê o arquivo como um ArrayBuffer
      arq.readAsArrayBuffer(arquivo);
    });
  };
  
  const convertido = await converter(arquivo!)

  texto_final(convertido);
  const cipher = crypto.createCipheriv('aes-256-gcm', senha, iv);

  // Encriptando o texto
  let encrypted = cipher.update(convertido, 'utf8', 'hex');
  encrypted += cipher.final('hex');

  // Capturando o authentication tag
  const authTag = cipher.getAuthTag().toString('hex');

  texto_encriptado(encrypted)
  tag(authTag)
};

export function decrypt({ texto_encriptado, senha, tag, tdec }: Decr) {
  const iv = "uwbfnmL5AVcwt5uA"
  const decipher = crypto.createDecipheriv('aes-256-gcm', senha, iv);

  // Setando o authentication tag
  decipher.setAuthTag(Buffer.from(tag, 'hex'));

  // Desencriptando o texto
  let decrypted = decipher.update(texto_encriptado, 'hex', 'utf8');
  decrypted += decipher.final('utf8');

  tdec(decrypted);
}

// export function decrypt(encryptedBase64: string, authTagBase64: string): string {
//   // Converte a string Base64 para Buffer
//   const encryptedBuffer = Buffer.from(encryptedBase64, "base64");
//   const authTag = Buffer.from(authTagBase64, "base64");

//   // Cria o objeto de decifra
//   const decipher = crypto.createDecipheriv(ALGORITHM, KEY, IV);

//   // Define a auth tag
//   decipher.setAuthTag(authTag);

//   // Decifra o texto
//   const decrypted = Buffer.concat([decipher.update(encryptedBuffer), decipher.final()]);

//   // Retorna o resultado como Base64
//   return decrypted.toString("base64");
// }

// Exemplo de uso
// const base64Input = Buffer.from("Texto para encriptar").toString("base64");
// console.log("Original (Base64):", base64Input);

// const { encrypted, authTag } = encrypt(base64Input);
// console.log("Encriptado (Base64):", encrypted);
// console.log("Auth Tag (Base64):", authTag);

// const decrypted = decrypt(encrypted, authTag);
// console.log("Desencriptado (Base64):", decrypted);
