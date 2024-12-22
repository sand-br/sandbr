// importação de componentes:
import { Aqui } from "@/src/components/caminho/aqui";
import { Cabecalho, Conteudo, Post, P, T1, T3, Lista, T2 } from "@/src/components/posts/estrutura";
import { CampoCopiavel, EmailCopiavel, TextoCopiavel } from "@/src/components/posts/copiavel";
import { Ancorar, Ir } from "@/src/components/posts/ligacoes";
import { Revisado } from "@/src/components/posts/destaques";

// importação de ícones
import { Check } from "lucide-react";
import { Arquivo } from "@/src/components/partes/arquivo";

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
          Nosso principal meio de contato é o e-mail <EmailCopiavel email="contato@sandbr.org"/>. <br />Envie sua mensagem para ele que responderemos o mais rápido possível. E para facilitar o atendimento, por favor verifique os assuntos predefinidos listados abaixo.
        </P>
        
        <T3 texto="Assuntos predefinidos"/>
        <Lista>
          <li>
            <TextoCopiavel texto="Contribuir com artigos" />, se você deseja escrever, revisar ou expandir artigos na enciclopédia.
          </li>
          <li>
            <TextoCopiavel texto="Traduzir conteúdos" />, se você sabe outros idiomas e quer enriquecer o acervo da comunidade de língua portuguesa.
          </li>
          <li>
            <TextoCopiavel texto="Ajudar a desenvolver" />, se você tem habilidades em programação ou design e quer ajudar a melhorar o site.
          </li>
          <P>
            <Check size={22} className="inline-block mr-1"/>Para colaboração, por favor, apresente-se e inclua detalhes sobre como deseja contribuir, suas habilidades específicas que possam ajudar no projeto, áreas de interesse, experiência anterior (se houver) e quaisquer outros detalhes que achar relevantes. Você será atendido mais rapidamente se usar o e-mail <EmailCopiavel email="contribuir@sandbr.org"/>.
          </P>
          
        </Lista>

        <Lista>
          <li>
            <TextoCopiavel texto="Reportar erros" />, se você quiser sinalizar erros no conteúdo ou problemas no funcionamento do site.
          </li>
          <li>
            <TextoCopiavel texto="Correção de informações" />, caso alguma informação nesta enciclopédia tenha sido publicada incorretamente.
          </li>
          <li>
            <TextoCopiavel texto="Ajuste de créditos" />, caso seu trabalho tenha sido creditado a outra pessoa ou fonte.
          </li>
          <P>
          <Check size={22} className="inline-block mr-1"/>Para reportes ou correções, inclua o link do artigo ou página afetada, uma descrição clara do erro ou informação incorreta, e, se possível, a fonte ou evidência que confirme a correção. Você será atendido mais rapidamente se usar o e-mail <EmailCopiavel email="correcoes@sandbr.org"/>.
          </P>
        </Lista>

        <Lista>
          <li>
            <TextoCopiavel texto="Proposta de parceria" />, se você quiser estabelecer uma parceria, seja esta colaborativa ou comercial.
          </li>
          <P>
            <Check size={22} className="inline-block mr-1"/>Ao propor uma parceria, inclua detalhes sobre seu projeto ou proposta, como o objetivo principal, o público-alvo, os recursos necessários, as possíveis contrapartidas e como acredita que podemos trabalhar juntos. Você será atendido mais rapidamente se usar o e-mail <EmailCopiavel email="parcerias@sandbr.org"/>.
          </P>
        </Lista>

        <Lista>
          
          <li>
            <TextoCopiavel texto="Remoção de conteúdo" />, caso deseje que seu trabalho não seja usado na Sandbr.
          </li>
          <P>
            <Check size={22} className="inline-block mr-1"/>Para ajustes de créditos ou remoção de conteúdo, por favor, inclua links para a(s) página(s) onde seu trabalho está sendo usado, além de qualquer documentação ou contexto que confirme sua solicitação e posse do trabalho. Você será atendido mais rapidamente se usar o e-mail <EmailCopiavel email="remocoes@sandbr.org"/>.
          </P>
        </Lista>

        <Lista>
          <li>
            <TextoCopiavel texto="Envio de obras" />, se você é artista e deseja enviar suas obras para inclusão na enciclopédia.
          </li>
          <P>
            <Check size={22} className="inline-block mr-1"/>Ao enviar suas obras, por favor preencha o documento de submição abaixo. Baixe o formato .docx se estiver usando o Word, ou o formato .odt se estiver usando o Google Docs, LibreOffice ou outra suíte de documentos de código-aberto. Você será atendido mais rapidamente se usar o e-mail <EmailCopiavel email="obras@sandbr.org"/>.
          </P>
          <div className="flex flex-col md:flex-row gap-2">
            <Arquivo src="https://raw.githubusercontent.com/sand-br/sandbr/refs/heads/main/public/submissao/submissao_de_obras.docx" texto="submissão_de_obras.docx"/>
            <Arquivo src="https://raw.githubusercontent.com/sand-br/sandbr/refs/heads/main/public/submissao/submissao_de_obras.odt" texto="submissão_de_obras.odt"/>
          </div>
          <P>
            Se tiver dúvidas sobre o licenciamento de sua obra, veja o tópico <Ancorar o_que="Ajuda sobre Licenciamento"/> abaixo.
          </P>
        </Lista>

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

        <T2 texto="Ajuda sobre Licenciamento" />
        <P>
         Entendemos que o processo de licenciamento de suas obras pode ser um pouco confuso, então estamos aqui para ajudar! 
        </P>
        <P>
         Pois ao enviar suas criações para a Sandbr, é importante que você defina a licença sob a qual sua obra será compartilhada. Isso garante que seus direitos de autor sejam respeitados e esclarece como a obra pode ser usada. Se você não tem certeza de qual licença aplicar, aqui estão algumas orientações.
        </P>

        <ul className="flex flex-col gap-2">
          <li className="flex flex-col gap-2">
            1. Se você não tem certeza de qual licença escolher, recomendamos as licenças da Creative Commons, que são amplamente usadas e permitem que você mantenha o controle sobre o uso de seu trabalho, enquanto ainda o disponibiliza para os outros sob condições específicas. 
            <p>Aqui estão as principais licenças Creative Commons que recomendamos a você:</p>

            <Lista>
              <li><strong>CC BY (Atribuição):</strong> Permite que outros compartilhem, usem e adaptem sua obra, desde que lhe atribuam crédito como artista original.</li>
              <li><strong>CC BY-NC-SA (Atribuição - Não Comercial - Compartilha Igual):</strong> Permite que outros compartilhem, usem e adaptem sua obra, desde que lhe atribuam crédito, que não usem para fins comerciais e que qualquer nova obra criada a partir da sua deve ser compartilhada sob esta mesma licença.</li>
              <li><strong>CC BY-NC-ND (Atribuição - Não Comercial - Sem Derivações):</strong> Permite que outros compartilhem e usem sua obra, desde que lhe atribuam crédito, que não usem para fins comerciais e que não a modifiquem ou adaptem de nenhuma forma.</li>
            </Lista>

            <p>Para outras licenças, consulte o índice de licenças Creative Commons em &lt;<Ir destino="https://br.creativecommons.net/licencas/" texto="br.creativecommons.net/licencas"/>&gt;.</p>
          </li>

          <li>2. Se você não especificar uma licença ao enviar sua obra, entederemos que você concorda que apliquemos automaticamente a licença <strong>CC BY-NC-ND (Atribuição - Não Comercial - Sem Derivações)</strong>, que permite que outros compartilhem e usem sua obra, desde que lhe atribuam crédito, que não usem para fins comerciais e que não a modifiquem ou adaptem de nenhuma forma. Isso garantirá que sua criação seja compartilhada de forma aberta, mas respeitando os seus direitos como autor.</li>
        </ul>

        <Revisado
          quando="24/11/2024"
          quem="Raavë Aires"
          link="https://github.com/raave-aires/"
        />
      </Conteudo>
    </Post>
  )
}