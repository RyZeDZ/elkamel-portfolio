import About from "@/components/About";
import AlsoBuilt from "@/components/AlsoBuilt";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import SiteHeader from "@/components/SiteHeader";
import SocialRail from "@/components/SocialRail";
import Work from "@/components/Work";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <Hero />
      <SocialRail />
      <Work />
      <AlsoBuilt />
      <About />
      <Contact />
    </>
  );
}
