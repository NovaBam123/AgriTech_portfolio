import C1_HeroSection from "./components/contents/C1_HeroSection";
import C2_SkillSection from "./components/contents/C2_SkillSection";
import C3_CardSection from "./components/contents/C3_CardSection";
import C4_ProjectSection from "./components/contents/C4_ProjectSection";
import C5_ContactSection from "./components/contents/C5_ContactSection";
import A1_MyNavbar from "./components/navbar/A1-MyNavbar";

// import './AgriPortfolio.scss'; // Import SCSS kustom lu di sini

function App() {
  return (
    <>
      <A1_MyNavbar />
      <C1_HeroSection />
      <C2_SkillSection />
      <C3_CardSection />
      <C4_ProjectSection />
      <C5_ContactSection />
    </>
  );
}
export default App;
