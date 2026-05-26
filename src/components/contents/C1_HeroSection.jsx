import { Button, Container } from "react-bootstrap";

function C1_HeroSection() {
  return (
    <header className="hero-wrapper text-center">
      <Container>
        {/* Eyebrow Text: Nuansa Lab Data & PWA */}
        <div id="hero" className="hero-kicker font-monospace mb-4">
          <span>DEPLOYED PRODUCTION-READY AGRI-TECH PLATFORMS</span>
        </div>

        {/* Headline Utama */}
        <h1 className="hero-title mb-4">
          Bridging the Gap Between{" "}
          <span className="text-lime">Agronomy Field Data</span> and{" "}
          <span className="text-orange">High-Performance PWAs</span>.
        </h1>

        {/* Deskripsi: Kita suntikkan poin Markdown & Tagging dari live app lu */}
        <p className="hero-lead mx-auto mb-5">
          Berbekal 10 tahun rekam jejak riset lapangan dan purifikasi inbrida dan
          hibrida. Kini fokus membangun ekosistem digital taktis yang{" "}
          <span className="text-white fw-semibold">offline-first</span>—seperti
          sistem mitigasi{" "} dan sistem pengambilan keputusan{" "}
          <span className="text-lime font-monospace ">AgriPOP</span>{" "}dan platform
          <span className="fst-italic text-white-50 fw-semibold"> structured logging</span>{" "}berbasis Markdown{" "}
          <span className="text-lime font-monospace">MarkedIT-Agri</span>.
        </p>

        {/* Duo Tombol Aksi Taktis */}
        <div className="d-flex justify-content-center gap-3 flex-wrap">
          {/* Tombol Internal Router menuju Demo Widget Portfolio */}
          <Button
            href="https://agripop-v2.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-hero-primary shadow-sm"
          >
            Launch_AgriPOP
          </Button>

          {/* Tombol Eksternal langsung nembak ke Live App Netlify Lu */}
          <Button
            href="https://markedit-agri.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-hero-secondary"
          >
           {"Open_Live_MarkedIT \u2197"}
          </Button>
        </div>
      </Container>
    </header>
  );
}
export default C1_HeroSection;
