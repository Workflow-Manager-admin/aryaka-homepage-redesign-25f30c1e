import React from "react";
import "./UseCases.css";

// PUBLIC_INTERFACE
export default function UseCases() {
  const uses = [
    {
      icon: (
        <span className="use-icon use-icon-blue">
          <svg width="28" height="28" fill="none">
            <rect x="6" y="6" width="16" height="16" rx="6" stroke="#fff" strokeWidth="2"/>
            <circle cx="14" cy="14" r="4.5" fill="#fff" />
          </svg>
        </span>
      ),
      title: "Secure Hybrid Workforce",
      desc: "Empower employees everywhere with zero trust and seamless connectivity."
    },
    {
      icon: (
        <span className="use-icon use-icon-orange">
          <svg width="28" height="28" fill="none">
            <rect x="4" y="9" width="20" height="10" rx="5" stroke="#fff" strokeWidth="2"/>
            <rect x="11" y="12" width="6" height="4" rx="2" fill="#fff"/>
          </svg>
        </span>
      ),
      title: "Cloud/SaaS Acceleration",
      desc: "Rapid, reliable access to critical SaaS, cloud, IaaS, and apps globally."
    },
    {
      icon: (
        <span className="use-icon use-icon-grey">
          <svg width="28" height="28" fill="none">
            <path d="M7 12h14" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
            <rect x="10" y="16" width="8" height="6" rx="2" fill="#fff"/>
            <rect x="10" y="7" width="8" height="6" rx="2" fill="#fff"/>
          </svg>
        </span>
      ),
      title: "M&A and Global Expansion",
      desc: "Fast integration for new sites and acquisitions with instant-on agility."
    }
  ];
  return (
    <section className="usecase-section">
      <div className="container">
        <h2 className="usecase-title">Aryaka Solves Key Use Cases</h2>
        <div className="usecase-grid">
          {uses.map((u, idx) => (
            <div className="usecase-card" key={idx}>
              {u.icon}
              <h4>{u.title}</h4>
              <p>{u.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
