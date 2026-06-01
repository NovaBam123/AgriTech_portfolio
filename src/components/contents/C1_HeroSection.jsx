import { Button, Container } from "react-bootstrap";

function C1_HeroSection() {
  return (
    <header className="hero-wrapper text-center">
      <Container>
        {/* Eyebrow Text: Nuansa Lab Data & PWA */}
        <div id="hero" className="hero-kicker font-monospace mb-4">
          <span>PRODUCTION-READY AGRITECH SYSTEMS</span>
        </div>

        {/* Headline Utama */}
        <h1 className="hero-title mb-4">
          Transforming Agricultural{" "}
          <span className="text-lime">Field Operations</span> Into{" "}
          <span className="text-orange">
            Structured Data and Decision Support Systems
          </span>
          .
        </h1>

        {/* Deskripsi: Kita suntikkan poin Markdown & Tagging dari live app lu */}
        <p className="hero-lead mx-auto mb-5 text-start text-md-center">
          Setelah lebih dari satu dekade berkecimpung dalam operasional
          <i> Cytoplasmic Male Sterility </i> (CMS) dan riset lapangan
          pertanian, saya kini fokus membangun sistem agritech siap pakai
          <span className="text-white fw-semibold"> (production-ready)</span> dengan arsitektur{" "}
          <span className="text-white fw-semibold">offline-first</span>. Sistem
          ini dirancang untuk mentransformasi observasi lapangan yang
          terfragmentasi menjadi data dan dokumentasi operasional yang
          terstruktur melalui platform{" "}
          <span className="text-lime font-monospace">MarkedIT Agri</span>, serta instrumen pendukung keputusan taktis melalui{" "}
          <span className="text-lime font-monospace">AgriPOP v2</span>
           {" "}guna mengurangi risiko kesalahan estimasi di lingkungan pertanian terpencil.
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
            Open_AgriPOP Platform
          </Button>

          {/* Tombol Eksternal langsung nembak ke Live App Netlify Lu */}
          <Button
            href="https://markedit-agri.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-hero-secondary"
          >
            {"Explore_MarkedIT \u2197"}
          </Button>
        </div>
      </Container>
    </header>
  );
}
export default C1_HeroSection;
