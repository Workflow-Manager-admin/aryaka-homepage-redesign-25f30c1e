import React, { useState } from "react";
import "./Resources.css";

// Demo resources placeholder
const resources = [
  {
    title: "2024 SASE Buyer’s Guide",
    desc: "Everything you need to know—trends, pitfalls, checklist.",
    type: "Report",
    link: "#resource1",
  },
  {
    title: "Secure Networking for the Hybrid Cloud Era",
    desc: "How Aryaka transformed global WAN for a Fortune 500.",
    type: "Case Study",
    link: "#resource2",
  },
  {
    title: "SD-WAN vs. SASE: An Executive Primer",
    desc: "What’s right for your cloud-first enterprise?",
    type: "Whitepaper",
    link: "#resource3",
  }
];

// PUBLIC_INTERFACE
export default function Resources() {
  const [active, setActive] = useState(0);
  return (
    <section className="resources-section">
      <div className="container">
        <h2 className="resources-title">Featured Resources</h2>
        <div className="resources-grid">
          {resources.map((r, idx) => (
            <a
              className={`resources-card${active === idx ? " active" : ""}`}
              href={r.link}
              key={idx}
              tabIndex={0}
              onMouseEnter={() => setActive(idx)}
            >
              <span className="resources-label">{r.type}</span>
              <h4>{r.title}</h4>
              <p>{r.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
