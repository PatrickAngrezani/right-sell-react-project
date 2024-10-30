import React from "react";
import Header from "../src/components/Header.tsx";
import Hero from "../src/components/Hero.tsx";
import Services from "../src/components/Services.tsx";
import Segments from "../src/components/Segments.tsx";
import Clients from "../src/components/Clients.tsx";
import Footer from "../src/components/Footer.tsx";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Services />
      <Segments />
      <Clients />
      <Footer />
    </div>
  );
}

export default App;
