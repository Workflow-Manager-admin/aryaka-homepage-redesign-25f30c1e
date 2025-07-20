import React from "react";
import "./ConversionCTA.css";

// PUBLIC_INTERFACE
export default function ConversionCTA() {
  return (
    <section className="cta-section">
      <div className="container cta-content">
        <h2>
          Ready to Modernize Your Network?<br />
          <span className="cta-highlight">See Why Top Enterprises Choose Aryaka.</span>
        </h2>
        <div className="cta-actions">
          <a href="#request-demo" className="btn btn-primary btn-large">
            Request a Demo
          </a>
          <a href="#pricing" className="btn btn-secondary btn-large">
            Get a Quote
          </a>
        </div>
      </div>
    </section>
  );
}
