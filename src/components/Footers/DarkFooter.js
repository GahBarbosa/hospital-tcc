/*eslint-disable*/
import React from "react";
import { Button, Container, Row, Col } from "reactstrap";
// reactstrap components

function DarkFooter() {
  return (
    <footer className="footer" data-background-color="black">
        <Container>
        <Button
          className="btn-round mr-1"
          color="danger"
          href="/faq"
          role="button"
          size="lg"
        >
          Faq
        </Button>
        </Container>
    </footer>
  );
}

export default DarkFooter;
