import { Aqui } from "@/src/components/caminho/aqui";
import { Cabecalho, Conteudo, Post, P, T1, T3, Lista, T2 } from "@/src/components/posts/estrutura";
import { CampoCopiavel, EmailCopiavel, TextoCopiavel } from "@/src/components/posts/copiavel";
import { Ir } from "@/src/components/posts/ligacoes";
import { Revisado } from "@/src/components/posts/destaques";

export default function Pagina() {
  const indice = [
    { topico: "Contato", 
      items: [
        {subtopico: "Assuntos predefinidos"},
        {subtopico: "Tempo de resposta"}
      ]
    },
    {topico: "Privacidade da comunicação"}
  ]

  return (
    <Post indice={indice}>
      <Cabecalho>
        <Aqui pagina="Contato" />
      </Cabecalho>

      <Conteudo>
        <T1 texto="Contato"/>
        <P>
          A Sandbr valoriza a conexão com seus leitores e com todos os interessados no projeto. Então, se você quer tirar dúvidas, sugerir melhorias, reportar problemas ou propor parcerias, esse é o lugar certo! Estamos aqui para ajudar!
        </P>
        <P>
          Nosso principal meio de contato é o e-mail <EmailCopiavel email="sandbr@proton.me"/>. <br />Envie sua mensagem para ele que responderemos o mais rápido possível. E para facilitar o atendimento, por favor verifique os assuntos predefinidos listados abaixo.
        </P>
        <T3 texto="Assuntos predefinidos"/>
        <Lista>
          <li><TextoCopiavel texto="Colaborar com a Sandbr" />, se você deseja contribuir com a enciclopédia, mas não sabe como começar.</li>
          <li><TextoCopiavel texto="Colaborar no GitHub" />, se você já está familiarizado com GitHub e quer ajudar diretamente no repositório.</li>
          <li><TextoCopiavel texto="Reporte de erros" />, se você quizer sinalizar problemas ou informações incorretas em nosso conteúdo.</li>
          <li><TextoCopiavel texto="Proposta de parceria" />, se você quizer estabelecer uma parceria, seja esta colaborativa ou comerciail.</li>
          <li><TextoCopiavel texto="Ajuste de créditos" />, caso seu trabalho tenha sido creditado a outra pessoa ou fonte.</li>
          <li><TextoCopiavel texto="Correção de informações"/>, caso alguma informação sobre o seu trabalho tenha sido publicada incorretamente.</li>
          <li><TextoCopiavel texto="Remoção de conteúdo" />, caso deseje que seu trabalho não seja usado na Sandbr.</li>
        </Lista>
        <P>
          Pedimos que você inclua o máximo de detalhes possível em sua mensagem. Informações claras nos ajudam a responder de forma mais rápida e eficiente!
        </P>
        <P>
          Àqueles que quiserem propor parceirias, pedimos que, por favor, inclua detalhes sobre seu projeto ou proposta, como o objetivo principal, o público-alvo, os recursos necessários, as possíveis contrapartidas e como acredita que podemos trabalhar juntos. Quanto mais informações forem fornecidas, mais ágil e eficiente será nossa análise e retorno.
        </P>

        <T3 texto="Tempo de resposta"/>
        <P>
          Embora nos esforcemos para responder rapidamente, nossa equipe é formada por voluntários. Portanto, pode haver um pequeno atraso, mas garantimos atenção total a cada mensagem recebida.
        </P>

        <T2 texto="Privacidade da comunicação"/>
        <P>
          Valorizamos a privacidade e a segurança das informações compartilhadas conosco. Todos os e-mails enviados para a Sandbr são tratados com confidencialidade e armazenados em um <Ir destino="https://proton.me/pt-br/mail/security" texto="serviço criptografados de e-mail"/>, e utilizamos práticas seguras para garantir que os dados trocados estejam protegidos, garantindo que informações sensíveis ou pessoais não serão vazadas e/ou compartilhadas com terceiros sem consentimento explícito.
        </P>
        <P>
          Mas caso queira garantir ainda mais segurança na comunicação, oferecemos a opção de criptografia de mensagens via <Ir destino="https://www.varonis.com/pt-br/blog/pgp-encryption" texto="PGP"/> (Pretty Good Privacy). Caso deseje utilizar esse método, basta copiar nossa chave pública abaixo. Com ela, você poderá criptografar seus e-mails antes de enviá-los, garantindo que apenas você e nossa equipe terão acesso a eles.
        </P>
        <CampoCopiavel titulo="Chave pública PGP da Sandbr" aviso="A chave pública foi copiada.">
          <P>
            -----BEGIN PGP PUBLIC KEY BLOCK-----
          </P>
          <P>
            xjMEZ0ICURYJKwYBBAHaRw8BAQdAv7ZZNRgAVxuFVkjBnkKsg5vM6ZblAzy6
            D1Wa3E3yHnfNI3NhbmRickBwcm90b24ubWUgPHNhbmRickBwcm90b24ubWU+
            wowEEBYKAD4FgmdCAlEECwkHCAmQeFaOOrVQRY8DFQgKBBYAAgECGQECmwMC
            HgEWIQSJW31+zj59Enz00wJ4Vo46tVBFjwAAfZQBAJtP6IFJev9HxpJ/okM+
            kMnoukUxmh3+1rkysY5/ccmCAP9LFbSlneZFvHplE53z9fQs12ByQxU53Sb0
            XIr+HJCXCc44BGdCAlESCisGAQQBl1UBBQEBB0DVTBMFhiwMcdwUJNu/q36w
            hG6wCmbc5qWrVVNk7dlPaQMBCAfCeAQYFgoAKgWCZ0ICUQmQeFaOOrVQRY8C
            mwwWIQSJW31+zj59Enz00wJ4Vo46tVBFjwAAbucBAJ/S+BJ6mljEhrX6iAtm
            FWaHFKhInXJXHph6W8370XUKAQDobdGgAN46vclEqwvEgV0DmwZfEIXd8PTw
            1qrS5HJzCQ==
            =Eh6N
          </P>
          <P>
            -----END PGP PUBLIC KEY BLOCK-----
          </P>
        </CampoCopiavel>

        <Revisado
          quando="24/11/2024"
          quem="Raavë Aires"
          link="https://github.com/raave-aires/"
        />
      </Conteudo>
    </Post>
  )
}