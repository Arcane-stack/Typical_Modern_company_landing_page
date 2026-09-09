import { useState, useRef } from "react";
import useIntersection from "../hooks/useIntersection";
import { FAQS } from "../data/content";
export default function FAQ() {
  const [open, setOpen] = useState(null);
  const ref = useRef(null);
  const visible = useIntersection(ref);

  return (
    <section id="faq" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <div ref={ref} className={`text-center mb-14 section-hidden ${visible ? "is-visible" : ""}`}>
          <span
            className="inline-block text-xs font-mono-code font-medium tracking-widest uppercase px-3 py-1.5 rounded-full mb-4"
            style={{ background: "rgba(124,58,237,0.12)", color: "#a78bfa", border: "1px solid rgba(124,58,237,0.2)" }}
          >
            FAQ
          </span>
          <h2 className="font-display font-bold" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "-0.02em" }}>
            Everything you want to know.
          </h2>
        </div>

        <div className="flex flex-col gap-3">
          {FAQS.map((faq, i) => (
            <div
              key={i}
              className={`rounded-xl overflow-hidden section-hidden ${visible ? "is-visible" : ""}`}
              style={{
                background: "var(--card)",
                border: `1px solid ${open === i ? "rgba(124,58,237,0.4)" : "var(--border)"}`,
                transitionDelay: `${i * 60}ms`,
              }}
            >
              <button
                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-medium text-sm md:text-base"
                style={{ color: "var(--card-foreground)", background: "none", border: "none", cursor: "pointer" }}
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span>{faq.q}</span>
                <span
                  className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 text-xs"
                  style={{
                    background: open === i ? "rgba(124,58,237,0.2)" : "var(--muted)",
                    color: open === i ? "#a78bfa" : "var(--muted-foreground)",
                    transform: open === i ? "rotate(45deg)" : "none",
                  }}
                >
                  +
                </span>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${open === i ? "max-h-64 opacity-100" : "max-h-0 opacity-0"}`}>
                <p className="px-6 pb-5 text-sm leading-relaxed" style={{ color: "var(--muted-foreground)" }}>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
