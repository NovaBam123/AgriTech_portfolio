import { Card, Col, Container, Row } from "react-bootstrap";
import fotoCard1 from "../../assets/01_cardLab.png"
import fotoCard2 from "../../assets/02_cardLogging.png"
import fotoCard3 from "../../assets/03_cardVegetatif.png"

function C3_CardSection() {
  return (
    <section id="evidence" className="py-5 bg-dark border-top border-dark">
      <Container>
        {/* Header Sesi */}
        <div className="mb-3">
          <span className="font-monospace text-orange d-block mb-2">
            FIELD EVIDENCE & VALIDATION
          </span>
          <h2 className="text-white fw-bold font-monospace">
            10 Years of Agronomy Track Record
          </h2>
        </div>

        <Row className="g-4">
          {/* KARTU 1: AKTIVITAS FIELD RESEARCH */}
          <Col lg={4} md={6}>
            <Card className="bg-zinc-dark border-zinc h-100 built-card">
              <div className="card-img-wrapper position-relative">
                {/* Nanti lu tinggal ganti src dengan file foto lapangan lu */}
                <Card.Img
                  variant="top"
                  src={fotoCard1}
                  alt="Field Research"
                  className="filter-grain"
                />
                <div className="card-badge-mono font-monospace">DATA_LAB_LOG</div>
              </div>
              <Card.Body className="p-4">
                <Card.Title
                  as="h4"
                  className="text-white mb-2 font-monospace first"
                >
                  01_CYTOPLASMIC_MALE_STERILITY
                </Card.Title>
                <Card.Text className="text-secondary small">
                 Pengujian mikroskopis sterilitas polen hingga tingkat akurasi 98% pada galur induk Cytoplasmic Male Sterility (CMS). Menjamin stabilitas genetik dan mencegah terjadinya kontaminasi klonal pada produksi benih padi hibrida skala industri.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* KARTU 2: AKTIVITAS LABORATORIUM */}
          <Col lg={4} md={6}>
            <Card className="bg-zinc-dark border-zinc h-100 built-card">
              <div className="card-img-wrapper position-relative">
                <Card.Img
                  variant="top"
                  src={fotoCard2}
                  alt="Lab Analysis"
                  className="filter-grain img-contain"
                />
                <div className="second-card font-monospace">
                  DATA_VALIDATION
                </div>
              </div>
              <Card.Body className="p-4">
                <Card.Title
                  as="h4"
                  className="text-white h5 mb-2 font-monospace"
                >
                  02_OFF_FIELD_MORPHOLOGY
                </Card.Title>
                <Card.Text className="text-secondary small">
                 Pencatatan data morfologi fenotipe makro. Mamvalidasi hasil hibrida ekstrem: bentuk gabah super-panjang diatas 1cm guna standarisasi basis data AgriPOP.  
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* KARTU 3: DATA LOGGING & SCREENSHOT PORTABLE DEVICE */}
          <Col lg={4} md={12}>
            <Card className="bg-zinc-dark border-zinc h-100 built-card">
              <div className="card-img-wrapper position-relative">
                <Card.Img
                  variant="top"
                  src={fotoCard3}
                  alt="PWA Data Logging"
                  className="filter-grain img-contain"
                />
                <div className="second-card font-monospace">DEVICE_LOG</div>
              </div>
              <Card.Body className="p-4">
                <Card.Title
                  as="h4"
                  className="text-white h5 mb-2 font-monospace"
                >
                  03_MOBILE_FIELD_LOGGING 
                </Card.Title>
                <Card.Text className="text-secondary small">
                  Implementasi PWA platform MarkedIT Agri (PWA) secara *offline-first* langsung di perangkat mobile berteknologi rendah di bawah terik matahari.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default C3_CardSection;
