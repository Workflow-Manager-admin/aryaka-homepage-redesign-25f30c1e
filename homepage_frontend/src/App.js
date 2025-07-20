import React, { useState, useEffect } from "react";
import "./App.css";
import HeroSection from "./sections/HeroSection";
import ValuePropositions from "./sections/ValuePropositions";
import Differentiators from "./sections/Differentiators";
import LogoGrid from "./sections/LogoGrid";
import UseCases from "./sections/UseCases";
import Resources from "./sections/Resources";
import ConversionCTA from "./sections/ConversionCTA";
import MinimalFooter from "./sections/MinimalFooter";

// PUBLIC_INTERFACE
function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // PUBLIC_INTERFACE
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className="App">
      <button
        className="theme-toggle"
        onClick={toggleTheme}
        aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      >
        {theme === "light" ? "🌙 Dark" : "☀️ Light"}
      </button>
      <main>
        <HeroSection />
        <ValuePropositions />
        <Differentiators />
        <LogoGrid />
        <UseCases />
        <Resources />
        <ConversionCTA />
      </main>
      <MinimalFooter />
    </div>
  );
}

export default App;
