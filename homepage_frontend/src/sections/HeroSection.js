import React from "react";
import "./HeroSection.css";

// PUBLIC_INTERFACE
export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-content container">
        <div className="hero-copy">
          <h1 className="hero-headline">
            Secure <span className="highlight-primary">Networking</span> for the Cloud-First Enterprise
          </h1>
          <p className="hero-subheadline">
            Experience unified SASE, SD-WAN, and connectivity—simplified by Aryaka’s world-class architecture and support.
          </p>
          <div className="hero-ctas">
            <a href="#request-demo" className="btn btn-primary">Request a Demo</a>
            <a href="#get-started" className="btn btn-secondary">Get Started</a>
          </div>
        </div>
        <div className="hero-graphic">
          {/* Placeholder SVG for 3D network globe */}
          <svg width="340" height="260" viewBox="0 0 340 260" fill="none">
            <ellipse cx="170" cy="130" rx="140" ry="100" fill="url(#network)" opacity="0.25"/>
            <circle cx="170" cy="130" r="78" stroke="#54AFE5" strokeWidth="4" fill="none" />
            <g>
              <circle cx="170" cy="48" r="8" fill="#54AFE5"/>
              <circle cx="81" cy="90" r="8" fill="#53616C"/>
              <circle cx="259" cy="90" r="8" fill="#E87A41"/>
              <circle cx="120" cy="190" r="8" fill="#54AFE5"/>
              <circle cx="220" cy="190" r="8" fill="#53616C"/>
            </g>
            <defs>
              <linearGradient id="network" x1="30" y1="30" x2="310" y2="230" gradientUnits="userSpaceOnUse">
                <stop stopColor="#54AFE5"/>
                <stop offset="1" stopColor="#15284A"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </section>
  );
}
