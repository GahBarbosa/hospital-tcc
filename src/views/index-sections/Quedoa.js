import React from "react";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

// core components

function Quedoa() {
  return (
    <>
      <div
        className="section section-download"
        data-background-color="blue"
        id="download-section"
      >
        <Container>
          <Row className="justify-content-md-center">
            <Col className="text-center" lg="8" md="12">
              <h3 className="title">Você quer doar sangue?</h3>
              <h5 className="description">
                Pode realizar o questionario para saber se pode blab balba balb, ou ir direto a pagina
                de encaminhamento de doaçao
              </h5>
              <br/>
            </Col>
            <Col className="text-center" lg="8" md="12">
              <Button
                className="btn-round mr-1"
                color="danger"
                href="/cep"
                role="button"
                size="lg"
              >
                Doar Sangue
              </Button>
              <Button
                className="btn-round"
                color="primary"
                href="/questionario"
                outline
                role="button"
                size="lg"
              >
                Questionario
              </Button>
            </Col>
          </Row>
          <br></br>
          <br></br>
        </Container>
      </div>
    </>
  );
}

export default Quedoa;
