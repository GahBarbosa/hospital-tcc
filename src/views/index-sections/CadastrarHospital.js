import React from "react";
// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

// core components

function CadastrarHospital() {
  return (
    <>
      <div className="section section-nucleo-icons" id="hospital-div">
        <Container>
          <Row>
            <Col lg="6" md="12">
              <h2 className="title">Cadastre sua Instituição</h2>
              <h5 className="description">
              O RUBI disponibiliza às instituições uma forma simples de gerenciar seus bancos de sangue.
              É possível através do site alcançar uma visibilidade maior, assim permitindo que uma gama
              maior de doadores possa surgir e contribuir com os hemocentros. O serviço de gerenciamento
              disponibilizado às empresas é totalmente seguro e simples, além de tudo gratuito. A ideia
              é prover um sistema que possa ajudar a comunidade como um todo na questão que engloba
              doação de sangue.
              </h5>
              <Button
                className="btn-round"
                color="info"
                href="/login"
                outline
                size="lg"
              >
                Area da Instituição
              </Button>
            </Col>
            <Col lg="6" md="12">
              <img
              alt="..."
              className="n-logo"
              src={require("assets/img/hospital-logo.png")}
            ></img>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default CadastrarHospital;
