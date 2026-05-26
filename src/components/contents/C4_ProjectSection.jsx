import { Badge, Button, Col, Container, Row } from "react-bootstrap";
import productAgriPOP from "../../assets/04a_productAgriPOP.png";
import productMarkedIT from "../../assets/05_markedItProd.png";

function C4_ProjectSection() {
  return (
    <section className="pt-1 bg-zinc-darker text-white" id="projects">
      <Container id="products">
        {/* HEADER SECTION */}
        <div>
          <hr />
          <span className="text-lime font-monospace small d-block mb-2">
            PRODUCTION_READY_SOFTWARE
          </span>
          <h2 className="fw-bold font-monospace display-6">
            Enterprise Agri-Apps
          </h2>
          <hr className="border-zinc-light my-1"/>
        </div>

        {/* PRODUCT 01: AgriPOP (Screenshot Kiri, Teks Kanan) */}
        <Row className="align-items-center mb-2">
          <Col lg={6} className="mb-2 mb-lg-0 d-flex justify-content-center">
            {/* MOCKUP IPHONE ASIMILASI DENGAN NAV BAR ANDROID FIXED */}
            <div className="iphone-container p-sm-2 p-md-3 rounded">
              <div className="iphone-frame">
                {/* Tombol Fisik Samping */}
                <div className="iphone-buttons">
                  <div className="silent"></div>
                  <div className="vol-up"></div>
                  <div className="vol-down"></div>
                  <div className="sleep"></div>
                </div>

                {/* Struktur Bentuk Poni Atas */}
                <div className="iphone-top-notch">
                  <div className="black-bar"></div>
                  <div className="iphone-top-hardware"></div>
                </div>

                {/* Komponen Kamera dan Speaker Fisik */}
                <div className="iphone-components">
                  <div className="speaker"></div>
                  <div className="camera">
                    <div className="shine-left"></div>
                  </div>
                </div>

                {/* Area Layar Internal */}
                <div className="iphone-screen-area">
                  {/* 1. Status Bar Atas (Jam, Sinyal, Baterai) - Terkunci Fixed di Atas */}
                  <div className="iphone-status-bar">
                    <div className="status-left">09:40</div>
                    <div className="status-right">
                      <div className="signal-bars">
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                      </div>
                      <span style={{ fontSize: "0.75rem" }}>5G</span>
                      <div className="battery-icon">
                        <div className="energy"></div>
                        <div className="nub"></div>
                      </div>
                    </div>
                  </div>

                  {/* 2. Viewport Konten Aplikasi Lu (Hanya Bagian Ini Yang Bisa Di-Scroll) */}
                  <div className="app-scroll-viewport">
                    <img
                      src={productAgriPOP}
                      alt="AgriPOP Live Interface"
                      className="img-fluid w-100"
                    />
                  </div>

                  {/* 3. Bar Navigasi Android Bawah - Terkunci Fixed di Bawah Layar */}
                  <div className="phone-nav-bar">
                    <div className="nav-button-wrapper">
                      {/* Simbol Hamburger (Recent Apps) */}
                      <span className="android-btn">|||</span>
                      {/* Simbol Kotak (Home) */}
                      <span className="android-btn-home"></span>
                      {/* Simbol Panah Kiri (Back) */}
                      <span className="android-btn-back">〈</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* SVG Filter untuk Bentuk Efek Cair Notch */}
            <svg
              viewBox="0 0 0 0"
              height="0"
              width="0"
              style={{ position: "absolute" }}
            >
              <filter id="goo" colorInterpolationFilters="sRGB">
                <feGaussianBlur
                  in="SourceGraphic"
                  stdDeviation="4"
                  result="blur"
                />
                <feColorMatrix
                  in="blur"
                  mode="matrix"
                  values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 8 -1"
                  result="cm"
                />
                <feBlend in="SourceGraphic" in2="cm" mode="multiply" />
              </filter>
            </svg>
          </Col>

          <Col lg={6} className="ps-lg-5">
            {/* Bagian teks dan button lu udah rapi banget bro, pertahankan */}
            <div className="d-flex gap-2 mb-2">
              <Badge
                bg="dark"
                className="box-lime border border-zinc font-monospace"
              >
                REACT_UTILITY
              </Badge>
              <Badge
                bg="dark"
                className="border box-orange font-monospace text-orange"
              >
                ALGORITHM
              </Badge>
            </div>
            <h3 className="h2 font-monospace fw-bold text-lime mb-3">
              01_AgriPOP
            </h3>
            <p className="text-secondary small">
              Sistem pendukung keputusan{" "}
              <span className="text-white small">"decision support tool"</span>{" "}
              untuk kalkulasi presisi kebutuhan benih, analisis populasi
              tanaman, dan mitigasi risiko persentase perkecambahan di lapangan.
            </p>
            <ul className="text-secondary small list-unstyled font-monospace mb-4">
              <li>
                <span className="text-lime">✔</span> High-speed mathematical
                computation
              </li>
              <li>
                <span className="text-lime">✔</span> Zero manual guesswork error
              </li>
            </ul>
            <Button
              variant="outline-lime"
              href="https://agripop-v2.netlify.app/"
              target="_blank"
              className="btn-lime font-monospace btn-sm px-4"
            >
              LAUNCH_APP ↗
            </Button>
          </Col>
        </Row>

        <hr className="d-sm-block d-md-none"/>
        {/* PRODUCT 02: MarkedIT Agri (Teks Kiri, Screenshot Kanan) */}
        <Row className="align-items-center flex-column-reverse flex-lg-row mb-3 ps-3 pe-lg-3">
          <Col lg={6} className="pe-lg-5">
            <div className="d-flex gap-2 mb-2">
              <Badge
                bg="dark"
                className="box-lime border border-zinc font-monospace"
              >
                PWA
              </Badge>
              <Badge
                bg="dark"
                className="box-orange font-monospace"
              >
                OFFLINE_FIRST
              </Badge>
            </div>
            <h3 className="h2 font-monospace fw-bold text-orange mb-3">
              02_MarkedIT-Agri
            </h3>
            <p className="text-secondary small">
              Platform pencatatan fenotype makro berbasis Progressive Web App
              (PWA). Didesain khusus untuk memvalidasi sinkronisasi data
              langsung dari plot penangkaran lapangan di area *blank spot*
              sinyal.
            </p>
            <ul className="text-secondary small list-unstyled font-monospace mb-4">
              <li>
                <span className="text-orange">✔</span> IndexedDB architecture for
                offline cache
              </li>
              <li>
                <span className="text-orange">✔</span> Interactive SVG
                micro-logging interface
              </li>
            </ul>
            <Button
              variant="outline-lime"
              href="https://markedit-agri.netlify.app"
              target="_blank"
              className="btn-orange text-white font-monospace btn-sm px-4"
            >
              LAUNCH_APP ↗
            </Button>
          </Col>
          <Col lg={6} className="mb-2 mb-lg-0 d-flex justify-content-center">
            {/* MOCKUP IPHONE ASIMILASI DENGAN NAV BAR ANDROID FIXED */}
            <div className="iphone-container p-sm-2 p-md-3 rounded">
              <div className="iphone-frame">
                {/* Tombol Fisik Samping */}
                <div className="iphone-buttons">
                  <div className="silent"></div>
                  <div className="vol-up"></div>
                  <div className="vol-down"></div>
                  <div className="sleep"></div>
                </div>

                {/* Struktur Bentuk Poni Atas */}
                <div className="iphone-top-notch">
                  <div className="black-bar"></div>
                  <div className="iphone-top-hardware"></div>
                </div>

                {/* Komponen Kamera dan Speaker Fisik */}
                <div className="iphone-components">
                  <div className="speaker"></div>
                  <div className="camera">
                    <div className="shine-left"></div>
                  </div>
                </div>

                {/* Area Layar Internal */}
                <div className="iphone-screen-area">
                  {/* 1. Status Bar Atas (Jam, Sinyal, Baterai) - Terkunci Fixed di Atas */}
                  <div className="iphone-status-bar">
                    <div className="status-left">09:40</div>
                    <div className="status-right">
                      <div className="signal-bars">
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                      </div>
                      <span style={{ fontSize: "0.75rem" }}>5G</span>
                      <div className="battery-icon">
                        <div className="energy"></div>
                        <div className="nub"></div>
                      </div>
                    </div>
                  </div>

                  {/* 2. Viewport Konten Aplikasi Lu (Hanya Bagian Ini Yang Bisa Di-Scroll) */}
                  <div className="app-scroll-viewport">
                    <img
                      src={productMarkedIT}
                      alt="AgriPOP Live Interface"
                      className="img-fluid w-100"
                    />
                  </div>

                  {/* 3. Bar Navigasi Android Bawah - Terkunci Fixed di Bawah Layar */}
                  <div className="phone-nav-bar">
                    <div className="nav-button-wrapper">
                      {/* Simbol Hamburger (Recent Apps) */}
                      <span className="android-btn">|||</span>
                      {/* Simbol Kotak (Home) */}
                      <span className="android-btn-home"></span>
                      {/* Simbol Panah Kiri (Back) */}
                      <span className="android-btn-back">〈</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* SVG Filter untuk Bentuk Efek Cair Notch */}
            <svg
              viewBox="0 0 0 0"
              height="0"
              width="0"
              style={{ position: "absolute" }}
            >
              <filter id="goo" colorInterpolationFilters="sRGB">
                <feGaussianBlur
                  in="SourceGraphic"
                  stdDeviation="4"
                  result="blur"
                />
                <feColorMatrix
                  in="blur"
                  mode="matrix"
                  values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 8 -1"
                  result="cm"
                />
                <feBlend in="SourceGraphic" in2="cm" mode="multiply" />
              </filter>
            </svg>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default C4_ProjectSection;
