import React from "react";

// reactstrap components
import { Container} from "reactstrap";

// core components

function Texto() {
  return (
    <>
      <div className="section">
      <Container>
          <h3 className="title">O que é o projeto Ruby?</h3>
          <div id="texto">
                <div>
                  <p>
                  RUBY é um projeto desenvolvido por um grupo de 
                  alunos da Fatec Ipiranga, a ideia surgiu 
                  visto a necessidade de uma ferramenta que pudesse 
                  prover ao mesmo tempo um auxilio para as instituições
                  e a população, pois a doação de sangue é idealmente
                  um trabalho conjunto entre ambos e o RUBI vem 
                  como uma ponte entre eles.
                  Focado em prover as instituições 
                  uma forma mais dinâmica de gerenciar seus bancos
                  de sangue possibilita divulgar a maior necessidade
                  de um tipo de sangue e permite uma abrangência maior
                  de visibilidade para alcançar a população, facilitando
                  a aparição de novos doadores.Conjunto a esse sistema, 
                  busca também prover a população uma forma agil
                  de obter informações relacionadas a doação, e disponibilizar
                  mais facilmente encontrar locais para doação através
                  de um sistema de mapeamento e rotas.
                  </p>
                </div>
          </div>
        </Container>
        </div>
        <div className="section">
        <Container>
          <h3 className="title">Por quê doar sangue?</h3>
          <div id="texto">
                <div>
                  <p>
                  Doar sangue é gesto de solidariedade e bem estar coletivo.
                  É um procedimento seguro e 100% voluntário, simples e que dura apenas 
                  alguns minutos, e com apenas uma doação é possível beneficiar
                  até 4 pessoas.
                  </p>
                </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Texto;
