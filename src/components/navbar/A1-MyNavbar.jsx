import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { SvgLogo } from "../utils/SvgLogo";

function A1_MyNavbar() {
  return (
    <Navbar
      expand="lg"
      sticky="top"
      variant="dark"
      className="px-2 py-3 bg-dark"
    >
      <Container fluid="md">
        {" "}
        <Navbar.Brand href="#" className="p-0 m-0">
          <div className="d-flex align-items-center gap-2">
            <div className="d-flex align-items-center justify-content-center p-2 rounded-circle box-svg">
              {SvgLogo.tractor({
                fill: "#fff",
                width: "35",
              })}
            </div>
            <div className="d-flex flex-col">
              <div className="d-flex flex-column brand-text">
                <div className="d-flex tracking-wider gap-1">
                  <span className="text-lime fw-mono mb-0">AGRICULTURE</span>
                  <span className="text-orange"> SYSTEMS</span>
                </div>
                <div className="d-flex small-brand">
                  <small>Agronomy</small>
                  <small>•Data </small>
                  <small>•Decision Support</small>
                </div>
                {/* <small className="desc-brand d-block d-md-none">
                  Decision Support
                </small> */}
              </div>
            </div>
          </div>
        </Navbar.Brand>
        {/* Toggle Button Custom untuk Dark Theme */}
        <Navbar.Toggle aria-controls="navbarNav" className="border-0" />
        {/* Menu Navigasi */}
        <Navbar.Collapse id="navbarNav" className="justify-content-end">
          <Nav className="ms-auto align-items-lg-center gap-lg-4 pt-3 pt-lg-0 nav-items flex-grow-0">
            <Nav.Link
              href="#hero"
              className="fw-medium font-monospace tracking-wide  text-white text-hover-lime px-2"
            >
              About
            </Nav.Link>
            <Nav.Link
              href="#products"
              className="fw-medium font-monospace tracking-wide text-white text-hover-lime px-2"
            >
              Products
            </Nav.Link>

            {/* Button Contact Bergaya Industrial Modern */}
            <Button
              href="#contact"
              className="mt-2 mt-lg-0 w-auto font-monospace px-3 py-1 border-1 rounded-3 transition-all btn-contact"
            >
              Contact
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default A1_MyNavbar;
