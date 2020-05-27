/*eslint-disable*/
import React from "react";
import { Router, Link } from "react-router-dom";
import Faq from "/home/gabriel/Works/Devs/project/tcc/projeto-rubi/src/views/index-sections/Faq.js";

// reactstrap components
import { Container } from "reactstrap";

function DarkFooter() {
  return (
    <footer className="footer" data-background-color="black">
      <Router>
      <div>
          <ul>
            <li>
                <Link to="/faq">Perguntas Frequentes</Link>
            </li>
          </ul>
      <Router path="/faq" component={Faq}/>
      </div>
    </Router>
    </footer>
  );
}

export default DarkFooter;
