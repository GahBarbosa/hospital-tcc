import React from "react";
// reactstrap components
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container
} from "reactstrap";

function FaqNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={"fixed-top " + "primary"} expand="lg" color="info">
        <Container>
          <div className="navbar-translate">
            <NavbarBrand
              href="/"
              id="navbar-brand"
            >
             <i class="fas fa-arrow-left"></i>
            </NavbarBrand>
            <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar>
              <NavItem>
                <NavLink
                  href="#medicamentos"
                  onClick={e => {
                    e.preventDefault();
                    document
                      .getElementById("medicamentos")
                      .scrollIntoView();
                  }}
                >
                  <i className="now-ui-icons health_ambulance"></i>
                  <p>Uso de Medicamentos</p>
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                  href="#vacina"
                  onClick={e => {
                    e.preventDefault();
                    document
                      .getElementById("vacina")
                      .scrollIntoView();
                  }}
                >
                  <i className="now-ui-icons gestures_tap-01"></i>
                  <p>Uso de Vacina</p>
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                  href="#instuicao"
                  onClick={e => {
                    e.preventDefault();
                    document
                      .getElementById("instuicao")
                      .scrollIntoView();
                  }}
                >
                  <i className="now-ui-icons gestures_tap-01"></i>
                  <p>Sobra a Instuição</p>
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                  href="#requisitos"
                  onClick={e => {
                    e.preventDefault();
                    document
                      .getElementById("requisitos")
                      .scrollIntoView();
                  }}
                >
                  <i className="now-ui-icons gestures_tap-01"></i>
                  <p>Requisitos básicos</p>
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                  href="#posdoacao"
                  onClick={e => {
                    e.preventDefault();
                    document
                      .getElementById("posdoacao")
                      .scrollIntoView();
                  }}
                >
                  <i className="now-ui-icons gestures_tap-01"></i>
                  <p>Pós Doação</p>
                </NavLink>
              </NavItem>

            
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default FaqNavbar;
