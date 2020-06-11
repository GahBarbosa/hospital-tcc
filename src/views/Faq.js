import React from "react";
import FaqNavbar from "components/Navbars/FaqNavbar.js";
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  Collapse,
  Button,
  Container,
  Col
} from "reactstrap";

function Faq() {
  // collapse states and functions
  const [collapses, setCollapses] = React.useState([]);
  const changeCollapse = collapse => {
    if (collapses.includes(collapse)) {
      setCollapses(collapses.filter(prop => prop !== collapse));
    } else {
      setCollapses([...collapses, collapse]);
    }
  };
  return (
    <>
    <FaqNavbar />
    <br></br>
    <br></br>
    <br></br>
    <Container>
      <Col style={{textAlign:"center"}}>
    <div className="wrapper">
      <div id="acordeon">
        <div aria-multiselectable={true} id="accordion" role="tablist">
          <Card id="medicamentos" className="no-transition">
          <h5>Uso de medicamentos</h5>
            <CardHeader className="card-collapse" id="headingOne" role="tab">
              <Button className="mb-0 panel-title" color="primary">
                <a
                  aria-expanded={collapses.includes(1)}
                  className="collapsed"
                  data-parent="#accordion"
                  id="collapseOne"
                  onClick={e => {
                    e.preventDefault();
                    changeCollapse(1);
                  }}
                >
                  Quem estiver fazendo tratamento com antibiótico pode doar sangue?{" "}
                  <i className="nc-icon nc-minimal-down" />
                </a>
              </Button>
            </CardHeader>
            <Collapse isOpen={collapses.includes(1)}>
              <CardBody>
                Se o antibiótico for para infecções simples e sem complicações,
                o doador deve aguardar 15 dias após a última dose do antibiótico
                para doar sangue. Infecções mais graves como pneumonia, meningite,
                entre outras, podem necessitar de 
                um tempo maior para liberação do candidato à doação.
              </CardBody>
            </Collapse>


            <CardHeader className="card-collapse" id="headingTwo" role="tab">
              <Button className="mb-0 panel-title" color="primary">
                <a
                  aria-controls="collapseTwo"
                  aria-expanded={collapses.includes(2)}
                  className="collapsed"
                  data-parent="#accordion"
                  id="collapseTwo"
                  onClick={e => {
                    e.preventDefault();
                    changeCollapse(2);
                  }}
                >
                  Quem estiver fazendo tratamento com anti-inflamatório pode doar sangue?{" "}
                  <i className="nc-icon nc-minimal-down" />
                </a>
              </Button>
            </CardHeader>
            <Collapse isOpen={collapses.includes(2)}>
              <CardBody>
              Dependendo do motivo, a doação pode ser realizada normalmente.
              Não se esqueça de informar o nome do anti-inflamatório que você está tomando.
              </CardBody>
            </Collapse>


            <CardHeader
              className="card-collapse"
              id="headingThree"
              role="tab"
            >
              <Button className="mb-0 panel-title" color="primary">
                <a
                  aria-controls="collapseThree"
                  aria-expanded={collapses.includes(3)}
                  className="collapsed"
                  data-parent="#accordion"
                  id="collapseThree"
                  onClick={e => {
                    e.preventDefault();
                    changeCollapse(3);
                  }}
                >
                 Quem estiver fazendo tratamento homeopático pode doar sangue?{" "}
                  <i className="nc-icon nc-minimal-down" />
                </a>
              </Button>
            </CardHeader>
            <Collapse isOpen={collapses.includes(3)}>
              <CardBody>
                Sim, mas depende do motivo.
              </CardBody>
            </Collapse>


            <CardHeader
              className="card-collapse"
              id="headingThree"
              role="tab"
            >
              <Button className="mb-0 panel-title" color="primary">
                <a
                  aria-controls="collapseThree"
                  aria-expanded={collapses.includes(4)}
                  className="collapsed"
                  data-parent="#accordion"
                  id="collapseThree"
                  onClick={e => {
                    e.preventDefault();
                    changeCollapse(4);
                  }}
                >
                 Quem tomou analgésico pode doar sangue?{" "}
                  <i className="nc-icon nc-minimal-down" />
                </a>
              </Button>
            </CardHeader>
            <Collapse isOpen={collapses.includes(4)}>
              <CardBody>
                Pode, mas é importante que no dia da doação o doador esteja sem sintomas.
              </CardBody>
            </Collapse>


          
          </Card>
          <br></br>
        </div>

            {/* Segundo Card */}

        <div aria-multiselectable={true} id="accordion" role="tablist">
          <Card  id="vacina" className="no-transition">
            <h5>Uso de vacina</h5>


          <CardHeader
              className="card-collapse"
              id="headingThree"
              role="tab"
            >
              <Button className="mb-0 panel-title" color="primary">
                <a
                  aria-controls="collapseThree"
                  aria-expanded={collapses.includes(5)}
                  className="collapsed"
                  data-parent="#accordion"
                  id="collapseThree"
                  onClick={e => {
                    e.preventDefault();
                    changeCollapse(5);
                  }}
                >
                 Tomei vacina para Hepatite B. Posso doar sangue?{" "}
                  <i className="nc-icon nc-minimal-down" />
                </a>
              </Button>
            </CardHeader>
            <Collapse isOpen={collapses.includes(5)}>
              <CardBody>
              A vacinação para Hepatite B impede a doação por 48 horas.
              </CardBody>
            </Collapse>


            <CardHeader
              className="card-collapse"
              id="headingThree"
              role="tab"
            >
              <Button className="mb-0 panel-title" color="primary">
                <a
                  aria-controls="collapseThree"
                  aria-expanded={collapses.includes(6)}
                  className="collapsed"
                  data-parent="#accordion"
                  id="collapseThree"
                  onClick={e => {
                    e.preventDefault();
                    changeCollapse(6);
                  }}
                >
                 Tomei vacina para febre amarela. Posso doar sangue?{" "}
                  <i className="nc-icon nc-minimal-down" />
                </a>
              </Button>
            </CardHeader>
            <Collapse isOpen={collapses.includes(6)}>
              <CardBody>
              Após 4 semanas.
              </CardBody>
            </Collapse>


            <CardHeader
              className="card-collapse"
              id="headingThree"
              role="tab"
            >
              <Button className="mb-0 panel-title" color="primary">
                <a
                  aria-controls="collapseThree"
                  aria-expanded={collapses.includes(7)}
                  className="collapsed"
                  data-parent="#accordion"
                  id="collapseThree"
                  onClick={e => {
                    e.preventDefault();
                    changeCollapse(7);
                  }}
                >
                 Tomei vacina para gripe. Posso doar sangue?{" "}
                  <i className="nc-icon nc-minimal-down" />
                </a>
              </Button>
            </CardHeader>
            <Collapse isOpen={collapses.includes(7)}>
              <CardBody>
              Após 48 horas.
              </CardBody>
            </Collapse>

          </Card>
          <br></br>

        </div>

        {/* Terceiro Card */}

        <div aria-multiselectable={true} id="accordion" role="tablist">
          <Card  id="instuicao" className="no-transition">
            <h5>Sobre a Instituição</h5>
            <CardHeader className="card-collapse" id="headingOne" role="tab">
              <Button className="mb-0 panel-title" color="primary ">
                <a
                  aria-expanded={collapses.includes(8)}
                  className="collapsed"
                  data-parent="#accordion"
                  
                  id="collapseOne"
                  onClick={e => {
                    e.preventDefault();
                    changeCollapse(8);
                  }}
                >
                  Será cobrado algum valor da instituição cadastrada?{" "}
                  <i className="nc-icon nc-minimal-down" />
                </a>
              </Button>
            </CardHeader>
            <Collapse isOpen={collapses.includes(8)}>
              <CardBody>
                Não, será 100% gratuito.
              </CardBody>
            </Collapse>

            <CardHeader className="card-collapse" id="headingOne" role="tab">
              <Button className="mb-0 panel-title" color="primary ">
                <a
                  aria-expanded={collapses.includes(9)}
                  className="collapsed"
                  data-parent="#accordion"
                  id="collapseOne"
                  onClick={e => {
                    e.preventDefault();
                    changeCollapse(9);
                  }}
                >
                  Posso alterar minha senha?{" "}
                  <i className="nc-icon nc-minimal-down" />
                </a>
              </Button>
            </CardHeader>
            <Collapse isOpen={collapses.includes(9)}>
              <CardBody>
                Sim, basta voce ir na pagina gerenciamento da conta e trocar sua senha.
              </CardBody>
            </Collapse>

            <CardHeader className="card-collapse" id="headingOne" role="tab">
              <Button className="mb-0 panel-title" color="primary ">
                <a
                  aria-expanded={collapses.includes(10)}
                  className="collapsed"
                  data-parent="#accordion"
                  id="collapseOne"
                  onClick={e => {
                    e.preventDefault();
                    changeCollapse(10);
                  }}
                >
                  Caso precise de um suporte para cadastrar minha instituição de sangue, com quem devo falar?{" "}
                  <i className="nc-icon nc-minimal-down" />
                </a>
              </Button>
            </CardHeader>
            <Collapse isOpen={collapses.includes(10)}>
              <CardBody>
                Voce pode entrar em contato atraves do nosso e-mail de suporte suporte@bancodesangueintegrado.com.br
              </CardBody>
            </Collapse>

            <CardHeader className="card-collapse" id="headingOne" role="tab">
              <Button className="mb-0 panel-title" color="primary ">
                <a
                  aria-expanded={collapses.includes(11)}
                  className="collapsed"
                  data-parent="#accordion"
                  id="collapseOne"
                  onClick={e => {
                    e.preventDefault();
                    changeCollapse(11);
                  }}
                >
                  Por que devo atualizar a quantitade de sangue existente no meu banco de sangue?{" "}
                  <i className="nc-icon nc-minimal-down" />
                </a>
              </Button>
            </CardHeader>
            <Collapse isOpen={collapses.includes(11)}>
              <CardBody>
                Pois assim o doador irá saber qual instituição precisará mais do seu tipo sanguinio.
              </CardBody>
            </Collapse>

            <CardHeader className="card-collapse" id="headingOne" role="tab">
              <Button className="mb-0 panel-title" color="primary ">
                <a
                  aria-expanded={collapses.includes(12)}
                  className="collapsed"
                  data-parent="#accordion"
                  id="collapseOne"
                  onClick={e => {
                    e.preventDefault();
                    changeCollapse(12);
                  }}
                >
                 Onde Cadastro minha instituição?{" "}
                  <i className="nc-icon nc-minimal-down" />
                </a>
              </Button>
            </CardHeader>
            <Collapse isOpen={collapses.includes(12)}>
              <CardBody>
               Na pagina home basta clickar no botão chamado "Ë uma instituição" e selecionar a opção "não tenho cadastro".
              </CardBody>
            </Collapse>
            
               <CardHeader className="card-collapse" id="headingOne" role="tab">
              <Button className="mb-0 panel-title" color="primary ">
                <a
                  aria-expanded={collapses.includes(13)}
                  className="collapsed"
                  data-parent="#accordion"
                  id="collapseOne"
                  onClick={e => {
                    e.preventDefault();
                    changeCollapse(13);
                  }}
                >
                Como Atualizo os dados da minha instituição{" "}
                  <i className="nc-icon nc-minimal-down" />
                </a>
              </Button>
            </CardHeader>
            <Collapse isOpen={collapses.includes(13)}>
              <CardBody>
               Após efetuar o login, voce é direcionado para uma tela onde voce pode atualizar suas informações.
              </CardBody>
            </Collapse>

            <CardHeader className="card-collapse" id="headingOne" role="tab">
              <Button className="mb-0 panel-title" color="primary ">
                <a
                  aria-expanded={collapses.includes(14)}
                  className="collapsed"
                  data-parent="#accordion"
                  id="collapseOne"
                  onClick={e => {
                    e.preventDefault();
                    changeCollapse(14);
                  }}
                >
               Como atualizo a quantidade de sangue existente na minha instituição{" "}
                  <i className="nc-icon nc-minimal-down" />
                </a>
              </Button>
            </CardHeader>
            <Collapse isOpen={collapses.includes(14)}>
              <CardBody>
              Após efetuar o login, voce é direcionado para uma tela onde voce pode atualizar a quantidade de sangue existe na sua instituição.
              </CardBody>
            </Collapse>
        
            </Card>
          <br></br>

        </div>        

        {/* Quarto Card */}

        <div aria-multiselectable={true} id="accordion" role="tablist">
          <Card  id="requisitos" className="no-transition">
            <h5>Requisitos básicos</h5>
            <CardHeader className="card-collapse" id="headingOne" role="tab">
              <Button className="mb-0 panel-title" color="primary ">
                <a
                  aria-expanded={collapses.includes(15)}
                  className="collapsed"
                  data-parent="#accordion"
                  
                  id="collapseOne"
                  onClick={e => {
                    e.preventDefault();
                    changeCollapse(15);
                  }}
                >
                 Qual idade posso doar sangue?{" "}
                  <i className="nc-icon nc-minimal-down" />
                </a>
              </Button>
            </CardHeader>
            <Collapse isOpen={collapses.includes(15)}>
              <CardBody>
                Ter entre 16 e 69 anos, desde que a primeira doação tenha sido feita até 60 anos.
              </CardBody>
            </Collapse>

            <CardHeader className="card-collapse" id="headingOne" role="tab">
              <Button className="mb-0 panel-title" color="primary ">
                <a
                  aria-expanded={collapses.includes(16)}
                  className="collapsed"
                  data-parent="#accordion"
                  id="collapseOne"
                  onClick={e => {
                    e.preventDefault();
                    changeCollapse(16);
                  }}
                >
                  Qual o peso minino para posso doar sangue?{" "}
                  <i className="nc-icon nc-minimal-down" />
                </a>
              </Button>
            </CardHeader>
            <Collapse isOpen={collapses.includes(16)}>
              <CardBody>
               Pesar no mínimo 50kg.
              </CardBody>
            </Collapse>

            <CardHeader className="card-collapse" id="headingOne" role="tab">
              <Button className="mb-0 panel-title" color="primary ">
                <a
                  aria-expanded={collapses.includes(17)}
                  className="collapsed"
                  data-parent="#accordion"
                  id="collapseOne"
                  onClick={e => {
                    e.preventDefault();
                    changeCollapse(17);
                  }}
                >
                  Devo estar descansado para doar sangue?{" "}
                  <i className="nc-icon nc-minimal-down" />
                </a>
              </Button>
            </CardHeader>
            <Collapse isOpen={collapses.includes(17)}>
              <CardBody>
               Sim.Ter dormido pelo menos 6 horas nas últimas 24 horas.
              </CardBody>
            </Collapse>

            <CardHeader className="card-collapse" id="headingOne" role="tab">
              <Button className="mb-0 panel-title" color="primary ">
                <a
                  aria-expanded={collapses.includes(18)}
                  className="collapsed"
                  data-parent="#accordion"
                  id="collapseOne"
                  onClick={e => {
                    e.preventDefault();
                    changeCollapse(18);
                  }}
                >
                 Quais documentos devo levar?{" "}
                  <i className="nc-icon nc-minimal-down" />
                </a>
              </Button>
            </CardHeader>
            <Collapse isOpen={collapses.includes(18)}>
              <CardBody>
                Documento original com foto recente, que permita a identificação do candidato, emitido por órgão oficial (Carteira de Identidade, Cartão de Identidade de Profissional Liberal, Carteira de Trabalho e Previdência Social, Carteira Nacional de Habilitação e RNE-Registro Nacional de Estrangeiro*).
              </CardBody>
            </Collapse>
            </Card>
          <br></br>

        </div>        

        {/* Quinto Card */}
        <div aria-multiselectable={true} id="accordion" role="tablist">
          <Card  id="posdoacao" className="no-transition">
            <h5>Pós Doação</h5>
            <CardHeader className="card-collapse" id="headingOne" role="tab">
              <Button className="mb-0 panel-title" color="primary ">
                <a
                  aria-expanded={collapses.includes(19)}
                  className="collapsed"
                  data-parent="#accordion"
                  
                  id="collapseOne"
                  onClick={e => {
                    e.preventDefault();
                    changeCollapse(19);
                  }}
                >
                 Devo tirar o curativo após a doação?{" "}
                  <i className="nc-icon nc-minimal-down" />
                </a>
              </Button>
            </CardHeader>
            <Collapse isOpen={collapses.includes(19)}>
              <CardBody>
                Mantenha o curativo no local da agulha por, no mínimo, 4 horas. Se você notar que o local voltou a sangrar, aplique uma pressão sobre o local por 2-5 minutos e então troque a curativo, mantendo-o por mais 4 horas.
              </CardBody>
            </Collapse>

            <CardHeader className="card-collapse" id="headingOne" role="tab">
              <Button className="mb-0 panel-title" color="primary ">
                <a
                  aria-expanded={collapses.includes(20)}
                  className="collapsed"
                  data-parent="#accordion"
                  id="collapseOne"
                  onClick={e => {
                    e.preventDefault();
                    changeCollapse(20);
                  }}
                >
                  Caso eu queria que descartem o sangue doado, o que eu faço?{" "}
                  <i className="nc-icon nc-minimal-down" />
                </a>
              </Button>
            </CardHeader>
            <Collapse isOpen={collapses.includes(20)}>
              <CardBody>
               Se você acha que existe uma razão pela qual o seu sangue não deve ser utilizado para transfusão e você não pode ou não quis dizer isto durante a doação,  entre em contato o mais breve possível com a Pró-Sangue e solicite que seu sangue seja descartado. O descarte será totalmente confidencial. Isto é de grande importância para a segurança da transfusão do sangue que você doou e dos pacientes que recebem seu sangue.
              </CardBody>
            </Collapse>

            <CardHeader className="card-collapse" id="headingOne" role="tab">
              <Button className="mb-0 panel-title" color="primary ">
                <a
                  aria-expanded={collapses.includes(21)}
                  className="collapsed"
                  data-parent="#accordion"
                  id="collapseOne"
                  onClick={e => {
                    e.preventDefault();
                    changeCollapse(21);
                  }}
                >
                  Caso eu sinta algum desconforto após doar sangue, o que fazer?{" "}
                  <i className="nc-icon nc-minimal-down" />
                </a>
              </Button>
            </CardHeader>
            <Collapse isOpen={collapses.includes(21)}>
              <CardBody>
              Se, após deixar o banco de sangue, você sentir mal-estar, tontura, fraqueza e sensação de que vai desmaiar, sente-se em qualquer local e coloque a cabeça entre os joelhos ou então, deite imediatamente no chão com as pernas elevadas. Estas medidas evitam quedas da própria altura e aumentam a circulação de sangue na cabeça, aliviando rapidamente os sintomas.
              </CardBody>
            </Collapse>

            </Card>
          <br></br>

        </div>   
      </div>
      </div>
      </Col>
      </Container>
    </>
  );
}

export default Faq;
