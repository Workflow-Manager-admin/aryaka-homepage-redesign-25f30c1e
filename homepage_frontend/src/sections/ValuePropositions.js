import React from "react";
import "./ValuePropositions.css";

// PUBLIC_INTERFACE
export default function ValuePropositions() {
  const values = [
    {
      icon: (
        <span className="icon-circle" style={{ background: "#54AFE5" }}>
          <svg width="28" height="28" fill="none"><circle cx="14" cy="14" r="12" stroke="#fff" strokeWidth="2"/><path d="M8 15l4 4 8-8" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </span>
      ),
      title: "Unified SASE & SD-WAN",
      desc: "All-in-one simplicity—secure networking, delivered globally.",
      link: { href: "#sase", label: "Learn More" }
    },
    {
      icon: (
        <span className="icon-circle" style={{ background: "#15284A" }}>
          <svg width="28" height="28" fill="none"><circle cx="14" cy="14" r="12" stroke="#fff" strokeWidth="2"/><path d="M10 18l4-8 4 8" stroke="#fff" strokeWidth="2" strokeLinecap="round"/><circle cx="14" cy="12" r="1.3" fill="#fff"/></svg>
        </span>
      ),
      title: "Global Private Backbone",
      desc: "Low-latency, high-performance connectivity—everywhere.",
      link: { href: "#backbone", label: "How it works" }
    },
    {
      icon: (
        <span className="icon-circle" style={{ background: "#53616C" }}>
          <svg width="28" height="28" fill="none"><circle cx="14" cy="14" r="12" stroke="#fff" strokeWidth="2"/><g stroke="#fff" strokeWidth="2"><path d="M7 14h14"/><path d="M14 7v14"/></g></svg>
        </span>
      ),
      title: "Best-in-Class Secure Access",
      desc: "Zero trust, reliable remote work, and global compliance.",
      link: { href: "#secure-access", label: "Security Details" }
    },
    {
      icon: (
        <span className="icon-circle" style={{ background: "#E87A41" }}>
          <svg width="28" height="28" fill="none"><circle cx="14" cy="14" r="12" stroke="#fff" strokeWidth="2"/><path d="M10 18h8M10 10h4v4h-4z" stroke="#fff" strokeWidth="2" strokeLinejoin="round"/></svg>
        </span>
      ),
      title: "White-Glove Support",
      desc: "24/7 expert assistance—no tiers, real engineers.",
      link: { href: "#support", label: "Contact Support" }
    }
  ];

  return (
    <section className="value-section">
      <div className="container value-wrapper">
        {values.map((v, idx) => (
          <div className="value-block" key={idx}>
            {v.icon}
            <h3>{v.title}</h3>
            <p>{v.desc}</p>
            <a href={v.link.href} className="mini-link">{v.link.label} &rarr;</a>
          </div>
        ))}
      </div>
    </section>
  );
}
