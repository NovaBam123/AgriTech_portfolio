import { Card, Col, Container, Row } from "react-bootstrap";
import { SvgLogo } from "../utils/SvgLogo";

function C2_SkillSection() {
  return (
    <section id="skills" className="pt-3 pb-3 bg-dark">
      <Container className="custom-container-width">
        <div className="text-center">
          <h2 className="fw-bold d-inline-block position-relative pb-3 section-title text-white-50">
            Dual Domain
            <span className="title-line position-absolute bottom-0 start-50 translate-middle-x bg-success"></span>
          </h2>
        </div>

        <Row className="g-4 card-domain">
          {/* Agri Card */}
          <Col md={6}>
            <Card className="h-100 px-4 pt-3 shadow-sm">
              <Card.Body className="p-0">
                <div className="display-5 mb-2">
                  {SvgLogo.wheat({
                    fill: "#39ff14",
                    width: "50",
                  })}
                </div>
                <Card.Title
                  as="h3"
                  className="h4 fw-bold mb-2 text-dark-emphasis"
                >
                  Agricultural Science
                </Card.Title>
                <ul
                  className="list-unstyled lh-lg text-secondary font-monospace"
                >
                  <li className="d-flex align-items-center mb-3">
                    <span className="fw-bold me-2">✓</span>
                    <div className="m-0 p-0">Seed Purification & Hybrid Engineering (CMS)</div>
                  </li>
                  <li className="d-flex align-items-center mb-1">
                    <span className="fw-bold me-2">✓</span>
                    <div>Plant Population & Yield Components Dynamics</div>
                  </li>
                  <li className="d-flex align-items-center mb-1">
                    <span className="fw-bold me-2">✓</span>
                    <div>Pre-Planting Risk Mitigation & Viability Analysis</div>
                  </li>
                  <li className="d-flex align-items-center">
                    <span className="fw-bold me-2">✓</span>
                    <div>Field Research Data Logging & Phenotype Protocols</div>
                  </li>
                </ul>
              </Card.Body>
            </Card>
          </Col>

          {/* JS Card */}
          <Col md={6}>
            <Card className="h-100 px-4 pt-3 shadow-sm">
              <Card.Body className="p-0">
                <div className="display-5 text-warning mb-2 fw-bold">JS</div>
                <Card.Title
                  as="h3"
                  className="h4 fw-bold mb-2 text-dark-emphasis m-0 p-0"
                >
                  JavaScript Development
                </Card.Title>
                <ul
                  className="list-unstyled lh-lg text-secondary font-monospace"
                >
                  <li className="d-flex align-items-center mb-2">
                    <span className="fw-bold me-2">✓</span>
                    <div>React Frontend Framework & Vite Optimization</div>
                  </li>
                  <li className="d-flex align-items-center mb-1">
                    <span className="fw-bold me-2">✓</span>
                    <div>Progressive Web Apps (PWA) Offline Architecture</div>
                  </li>
                  <li className="d-flex align-items-center mb-1">
                    <span className="fw-bold me-2">✓</span>
                    <div>Client-Side Storage & Offline-First Data Sync</div>
                  </li>
                  <li className="d-flex align-items-center">
                    <span className="fw-bold me-2">✓</span>
                    <div>
                      Interactive Diagram Projection & Risk Data Visualization
                    </div>
                  </li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default C2_SkillSection;
