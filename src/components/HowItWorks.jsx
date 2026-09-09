import { useRef } from "react";
import useIntersection from "../hooks/useIntersection";
import { HOW_IT_WORKS } from "../data/content";
export default function HowItWorks() {
  const ref = useRef(null);
  const visible = useIntersection(ref);

  return (
    <section id="how-it-works" className="py-24 px-6" style={{ background: "var(--secondary)" }}>
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className={`text-center mb-16 section-hidden ${visible ? "is-visible" : ""}`}>
          <span
            className="inline-block text-xs font-mono-code font-medium tracking-widest uppercase px-3 py-1.5 rounded-full mb-4"
            style={{ background: "rgba(124,58,237,0.12)", color: "#a78bfa", border: "1px solid rgba(124,58,237,0.2)" }}
          >
            How it works
          </span>
          <h2 className="font-display font-bold mb-4" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "-0.02em" }}>
            From setup to insight<br />
            <span className="gradient-text">in under 48 hours.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          <div
            className="hidden lg:block absolute top-8 left-1/4 right-1/4 h-px"
            style={{ background: "linear-gradient(90deg, transparent, rgba(124,58,237,0.4), rgba(6,182,212,0.3), transparent)" }}
          />
          {HOW_IT_WORKS.map((step, i) => (
            <div key={i} className={`relative section-hidden ${visible ? "is-visible" : ""}`} style={{ transitionDelay: `${i * 120}ms` }}>
              <div className="text-6xl font-display font-black mb-4 leading-none" style={{ color: "rgba(124,58,237,0.15)", letterSpacing: "-0.04em" }}>
                {step.step}
              </div>
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white mb-4 -mt-8" style={{ background: "linear-gradient(135deg, #7c3aed, #5b21b6)" }}>
                {i + 1}
              </div>
              <h3 className="font-semibold text-lg mb-2" style={{ color: "var(--foreground)" }}>{step.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--muted-foreground)" }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
