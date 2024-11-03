import React, { useEffect, useRef, useState } from "react";
import Header from "./components/Header.tsx";
import Hero from "./components/Hero.tsx";
import Services from "./components/Services.tsx";
import Segments from "./components/Segments.tsx";
import Clients from "./components/Clients.tsx";
import Footer from "./components/Footer.tsx";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import AboutDetails from "./components/AboutDetails.tsx";
import RTLMPage from "./components/RTLMPage.tsx";
import TecnologiaPage from "./components/TecnologiaPage.tsx";
import DiferenciaisPage from "./components/DiferenciaisPage.tsx";
import PlanosPage from "./components/PlanosPage.tsx";

const PageWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const [fadeState, setFadeState] = useState<"fade-in" | "fade-out">("fade-in");

  useEffect(() => {
    setFadeState("fade-out");

    const timeout = setTimeout(() => {
      setFadeState("fade-in");
    }, 300);

    return () => clearTimeout(timeout);
  }, [location.pathname]);

  return (
    <div
      style={{
        opacity: fadeState === "fade-in" ? 1 : 0,
        transition: "opacity 0.5s ease-in-out",
      }}
    >
      {children}
    </div>
  );
};

function App() {
  const [scrollTarget, setScrollTarget] = useState<string | null>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const clientsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollTarget) {
      const refs: { [key: string]: React.RefObject<HTMLDivElement> } = {
        about: aboutRef,
        services: servicesRef,
        clients: clientsRef,
      };
      refs[scrollTarget]?.current?.scrollIntoView({ behavior: "smooth" });
      setScrollTarget(null);
    }
  }, [scrollTarget]);

  return (
    <Router>
      <Header setScrollTarget={setScrollTarget} />
      <PageWrapper>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div ref={aboutRef}>
                  <Hero />
                </div>
                <div ref={servicesRef}>
                  <Services />
                </div>
                <Segments />
                <div ref={clientsRef}>
                  <Clients />
                </div>
                <Footer />
              </>
            }
          />
          <Route path="/about" element={<AboutDetails />} />
          <Route path="/rtlm" element={<RTLMPage />} />
          <Route path="/tecnologia" element={<TecnologiaPage />} />
          <Route path="/diferenciais" element={<DiferenciaisPage />} />
          <Route path="/planos" element={<PlanosPage />} />
        </Routes>
      </PageWrapper>
    </Router>
  );
}

export default App;
