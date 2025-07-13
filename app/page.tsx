import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import ExpertiseSection from "./components/ExpertiseSection";
import JourneySection from "./components/JourneySection";
import WorkSection from "./components/WorkSection";
import Footer from "./components/Footer";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutSection />
      <ExpertiseSection />
      <JourneySection />
      <WorkSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
