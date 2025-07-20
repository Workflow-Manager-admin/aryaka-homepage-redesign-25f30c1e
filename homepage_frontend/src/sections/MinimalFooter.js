import React from "react";
import "./MinimalFooter.css";

// PUBLIC_INTERFACE
export default function MinimalFooter() {
  return (
    <footer className="footer-section" aria-label="Aryaka global footer">
      <div className="container footer-grid">
        <div className="footer-col">
          <h4>Contact Aryaka</h4>
          <ul>
            <li><a href="mailto:info@aryaka.com">info@aryaka.com</a></li>
            <li>+1.877.727.9252</li>
            <li>San Mateo, CA 94402, USA</li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Global Offices</h4>
          <ul>
            <li>Bangalore, India</li>
            <li>London, UK</li>
            <li>Singapore</li>
            <li>Frankfurt, DE</li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Social</h4>
          <div className="footer-socials">
            <a href="https://www.linkedin.com/company/aryaka-networks/" aria-label="Aryaka on LinkedIn" target="_blank" rel="noopener noreferrer">LI</a>
            <a href="https://twitter.com/aryaka" aria-label="Aryaka on Twitter" target="_blank" rel="noopener noreferrer">TW</a>
            <a href="https://www.facebook.com/AryakaNetworks/" aria-label="Aryaka on Facebook" target="_blank" rel="noopener noreferrer">FB</a>
          </div>
        </div>
        <div className="footer-col">
          <h4>Trust & Compliance</h4>
          <ul className="footer-badges">
            <li><span className="footer-badge" title="SOC2 Certified">SOC2</span></li>
            <li><span className="footer-badge" title="ISO 27001 Certified">ISO</span></li>
            <li><span className="footer-badge" title="GDPR Ready">GDPR</span></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span>&copy; {new Date().getFullYear()} Aryaka. All rights reserved.</span>
      </div>
    </footer>
  );
}
