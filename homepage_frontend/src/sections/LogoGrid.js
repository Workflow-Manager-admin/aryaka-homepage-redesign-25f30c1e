import React from "react";
import "./LogoGrid.css";

// PUBLIC_INTERFACE
export default function LogoGrid() {
  // Placeholder logos as colored circles
  const logos = [
    { name: "Coca-Cola", color: "#E87A41" },
    { name: "Unilever", color: "#54AFE5" },
    { name: "Siemens", color: "#53616C" },
    { name: "ABB", color: "#15284A" },
    { name: "Mastercard", color: "#E87A41" },
    { name: "Swarovski", color: "#54AFE5" },
    { name: "Fujitsu", color: "#53616C" },
    { name: "Hilton", color: "#15284A" }
  ];

  return (
    <section className="logo-section" aria-label="Trusted by global enterprises">
      <div className="container">
        <div className="logo-header">
          <h2>Trusted by Global Enterprises</h2>
          <p>Delivering secure and superior network experiences for industry leaders worldwide.</p>
        </div>
        <div className="logo-grid">
          {logos.map((l, idx) => (
            <div className="logo-item" key={idx} title={l.name} aria-label={l.name}>
              <svg width="66" height="48" viewBox="0 0 66 48"><circle cx="33" cy="24" r="18" fill={l.color} opacity="0.22"/><text x="33" y="29" textAnchor="middle" fontSize="14" fontFamily="sans-serif" fill={l.color} fontWeight="bold">{l.name.charAt(0)}</text></svg>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
