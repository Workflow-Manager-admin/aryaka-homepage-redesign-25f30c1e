import React, { useState } from "react";
import "./Differentiators.css";

const features = [
  {
    icon: (
      <span className="diff-icon" style={{ background: "#54AFE5" }}>
        <svg width="28" height="28" fill="none"><circle cx="14" cy="14" r="12" stroke="#fff" strokeWidth="2"/><path d="M8 15l4 4 8-8" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </span>
    ),
    title: "Architecture Built for Modern Demands",
    desc: "Aryaka’s private backbone outperforms the public internet, ensuring consistent, high-performance delivery of mission-critical applications.",
    media: (
      // Placeholder infographic
      <div className="diff-media-infographic">
        <svg width="144" height="62"><rect x="10" y="16" width="24" height="30" rx="6" fill="#53616C"/><rect x="40" y="8" width="24" height="38" rx="6" fill="#54AFE5"/><rect x="70" y="24" width="24" height="22" rx="6" fill="#E87A41"/><rect x="100" y="14" width="24" height="40" rx="6" fill="#15284A"/></svg>
      </div>
    )
  },
  {
    icon: (
      <span className="diff-icon" style={{ background: "#53616C" }}>
        <svg width="28" height="28" fill="none"><circle cx="14" cy="14" r="12" stroke="#fff" strokeWidth="2"/><path d="M10 18l4-8 4 8" stroke="#fff" strokeWidth="2" strokeLinecap="round"/><circle cx="14" cy="12" r="1.3" fill="#fff"/></svg>
      </span>
    ),
    title: "Seamless, Managed Experience",
    desc: "One unified architecture, one contract, and one dashboard—Aryaka’s SaaS-like delivery is a game-changer for IT agility.",
    media: (
      // Placeholder micro-animation: stacked arrows
      <div className="diff-media-animation">
        <svg width="94" height="54">
          <path d="M10 36 L47 18 L84 36" stroke="#54AFE5" strokeWidth="5" fill="none"/>
          <path d="M20 47 L47 32 L74 47" stroke="#E87A41" strokeWidth="5" fill="none"/>
        </svg>
      </div>
    )
  }
];

const quotes = [
  {
    quote: "Aryaka delivers consistent, reliable performance for all our critical cloud apps with world-class support.",
    author: "Global CIO, Fortune 500 Manufacturer"
  },
  {
    quote: "Migration to Aryaka’s managed SASE was seamless—security and connectivity in one, with zero headaches.",
    author: "IT Director, Fast-Growth Retailer"
  }
];

// PUBLIC_INTERFACE
export default function Differentiators() {
  const [quoteIdx, setQuoteIdx] = useState(0);
  return (
    <section className="diff-section">
      <div className="container diff-grid">
        {features.map((f, i) => (
          <div className={`diff-row ${i % 2 === 1 ? "diff-row-reverse" : ""}`} key={i}>
            <div className="diff-copy">
              {f.icon}
              <h2>{f.title}</h2>
              <p>{f.desc}</p>
            </div>
            <div className="diff-media">
              {f.media}
            </div>
          </div>
        ))}
        <div className="diff-carousel">
          <h3 className="diff-carousel-title">What Our Customers Say</h3>
          <div className="diff-carousel-quote">
            <blockquote>
              <span>“{quotes[quoteIdx].quote}”</span>
              <footer>— {quotes[quoteIdx].author}</footer>
            </blockquote>
          </div>
          <div className="diff-carousel-controls">
            <button
              aria-label="Previous quote"
              onClick={() => setQuoteIdx((s) => (s === 0 ? quotes.length - 1 : s - 1))}
            >‹</button>
            <button
              aria-label="Next quote"
              onClick={() => setQuoteIdx((s) => (s + 1) % quotes.length)}
            >›</button>
          </div>
        </div>
      </div>
    </section>
  );
}
