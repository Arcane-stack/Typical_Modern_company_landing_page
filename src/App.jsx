import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustedBy from "./components/TrustedBy";
import Features from "./components/Features";
import ProductAbout from "./components/ProductSection";
import HowItWorks from "./components/HowItWorks";
import Statistics from "./components/Statistics";
import UseCases from "./components/UseCases";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/CTA";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

export default function App() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("light", !dark);
  }, [dark]);

  return (
    <div
      style={{
        background: "var(--background)",
        color: "var(--foreground)",
        minHeight: "100%",
      }}
    >
      <Navbar dark={dark} setDark={setDark} />

      <main>
        <Hero />
        <TrustedBy />
        <Features />
        <ProductAbout />
        <HowItWorks />
        <Statistics />
        <UseCases />
        <Testimonials />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}