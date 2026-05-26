import { Container, Row, Col } from "react-bootstrap";
import { getFavIcon } from "../utils/getFavIcon";

function C5_ContactSection() {
  const currentYear = new Date().getFullYear();
  const linkedinUrl = "https://www.linkedin.com/in/nova-bamahry-2b043527/";
  const githubUrl = "https://www.github.com//NovaBam123";
  const emailUrl = "https://www.mailto:ibam.nva@gmail.com";
  const instagramUrl = "https://www.instagram.com/nova_bamahry/";

  return (
    <footer
      className="py-3 bg-dark text-white border-top border-zinc"
      id="contact"
    >
      <Container className="py-4">
        <Row className="justify-content-between align-items-center">
          {/* KOLOM KIRI: Call to Action & Visi */}
          <Col lg={6} className="mb-4 mb-lg-0">
            <span className="text-lime font-monospace small d-block mb-2">
              // AVAILABLE_FOR_TECHNICAL_ROLES
            </span>
            <h2 className="fw-bold font-monospace display-6 mb-3">
              Let's Build the Future of Agritech
            </h2>
            <p className="text-secondary small max-width-md">
              Siap berkolaborasi untuk mengintegrasikan algoritma komputasi
              presisi dan arsitektur *offline-first* ke dalam sistem riset
              pemuliaan tanaman maupun skala produksi industri Anda.
            </p>
          </Col>

          {/* KOLOM KANAN: Gateway Kontak Langsung */}
          <Col lg={5} className="font-monospace">
            <div className="d-flex flex-column gap-2">
              {/* LinkedIn Gate (Tempat pamer validasi industri) */}
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="d-flex align-items-center justify-content-between p-3 rounded border border-zinc bg-zinc-dark text-decoration-none text-white hover-lime-border"
              >
                <div className="d-flex align-items-center gap-3">
                  <img
                    src={getFavIcon(linkedinUrl)}
                    alt="LinkedIn"
                    style={{
                      width: "24px",
                      height: "24px",
                      objectFit: "contain",
                    }}
                  />
                  <span>LINKEDIN_NETWORK</span>
                </div>
                  <span className="text-lime text-accent">CONNECT ↗</span>
              </a>

              {/* GitHub Gate (Validasi repositori kode) */}
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="d-flex align-items-center justify-content-between p-3 rounded border border-zinc bg-zinc-dark text-decoration-none text-white hover-lime-border"
              >
                <div className="d-flex align-items-center gap-3">
                  <img
                    src={getFavIcon(githubUrl)}
                    alt="Github"
                    style={{
                      width: "24px",
                      height: "24px",
                      objectFit: "contain",
                    }}
                  />
                  <span>GITHUB_REPOS</span>
                </div>
                  <span className="text-lime text-accent">EXPLORE ↗</span>
              </a>

               <a
                href={emailUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="d-flex align-items-center justify-content-between p-3 rounded border border-zinc bg-zinc-dark text-decoration-none text-white hover-lime-border"
              >
                <div className="d-flex align-items-center gap-3">
                  <img
                    src={getFavIcon(emailUrl)}
                    alt="Gmail"
                    style={{
                      width: "24px",
                      height: "24px",
                      objectFit: "contain",
                    }}
                  />
                  <span>EMAIL_DISPATCH</span>
                </div>
                  <span className="text-lime text-accent">SEND_MSG ↗</span>
              </a>

               <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="d-flex align-items-center justify-content-between p-3 rounded border border-zinc bg-zinc-dark text-decoration-none text-white hover-lime-border"
              >
                <div className="d-flex align-items-center gap-3">
                  <img
                    src={getFavIcon(instagramUrl)}
                    alt="Gmail"
                    style={{
                      width: "24px",
                      height: "24px",
                      objectFit: "contain",
                    }}
                  />
                  <span>SOCIAL_MEDIA</span>
                </div>
                  <span className="text-lime text-accent">EXPLORE ↗</span>
              </a>
            </div>
          </Col>
        </Row>

        {/* ROW BAWAH: Identity Tag & Copyright */}
        <hr className="border-zinc-light mt-5" />
        <Row className="align-items-center text-secondary small font-monospace">
          <Col md={6} className="text-center text-md-start mb-2 md-mb-0">
            © {currentYear} // AGRICULTURE DEVELOPER. ALL RIGHTS RESERVED.
          </Col>
          <Col md={6} className="text-center text-md-end text-orange small">
            T-SHAPE AGRONOMIST // CODES BUILT FOR RUGGED FIELD VALIDATION
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
export default C5_ContactSection;
