import { Card, Col, Container, Row } from "react-bootstrap";
import { SvgLogo } from "../utils/SvgLogo";

function C2_SkillSection() {
  return (
    <section id="skills" className="pt-3 pb-3 bg-dark">
      <Container className="custom-container-width">
        <div className="text-center">
          <h2 className="fw-bold d-inline-block position-relative pb-3 section-title text-white-50">
           Agronomy Meets Digital Systems
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
                  Agricultural Field Operations
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
                    <div>Plant Population & Yield Components Analysis</div>
                  </li>
                  <li className="d-flex align-items-center mb-1">
                    <span className="fw-bold me-2">✓</span>
                    <div>Seed Viability & Pre-Planting Risk Mitigation</div>
                  </li>
                  <li className="d-flex align-items-center">
                    <span className="fw-bold me-2">✓</span>
                    <div>Agricultural Field Research & Structured Data Collection</div>
                  </li>
                </ul>
              </Card.Body>
            </Card>
          </Col>

          {/* JS Card */}
          <Col md={6}>
            <Card className="h-100 px-4 pt-3 shadow-sm">
              <Card.Body className="p-0">
                <div className="display-5 mb-2">
                  {SvgLogo.databaseCog({
                    fill: "#de6d21",
                    width: "50"
                  })}
                </div>
                <Card.Title
                  as="h3"
                  className="h4 fw-bold mb-2 text-dark-emphasis m-0 p-0"
                >
                 Agritech Systems Development
                </Card.Title>
                <ul
                  className="list-unstyled lh-lg text-secondary font-monospace"
                >
                  <li className="d-flex align-items-center mb-2">
                    <span className="fw-bold me-2">✓</span>
                    <div>Offline-First & Documentation Systems</div>
                  </li>
                  <li className="d-flex align-items-center mb-1">
                    <span className="fw-bold me-2">✓</span>
                    <div>Field Data Collection & Documentation Systems</div>
                  </li>
                  <li className="d-flex align-items-center mb-1">
                    <span className="fw-bold me-2">✓</span>
                    <div>Decision Support & Operation Workflow Design</div>
                  </li>
                  <li className="d-flex align-items-center">
                    <span className="fw-bold me-2">✓</span>
                    <div>
                      Data Visualization & Agricultural Risk Analysis
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
