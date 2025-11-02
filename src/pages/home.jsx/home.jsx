
import React from "react";
import Header from "../../components/header.jsx";
import Hero from "../../components/hero.jsx";
import Features from "../../components/features.jsx";
import AdvancedFeatures from "../../components/advanceFeature.jsx";
import Footer from "../../components/footer.jsx";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <AdvancedFeatures />
      </main>
      <Footer />
    </>
  );
}
