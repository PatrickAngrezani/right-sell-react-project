import React, { useEffect, useState } from "react";
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

const PageWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const [fadeState, setFadeState] = useState<"fade-in" | "fade-out">("fade-in");

  useEffect(() => {
    setFadeState("fade-out");

    const timeout = setTimeout(() => {
      setFadeState("fade-in");
    }, 300);

    return () => clearTimeout(timeout);
  }, [location]);

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
  return (
    <Router>
      <Header />
      <PageWrapper>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Services />
                <Segments />
                <Clients />
                <Footer />
              </>
            }
          />
          <Route path="/about" element={<AboutDetails />} />
        </Routes>
      </PageWrapper>
    </Router>
  );
}

export default App;
