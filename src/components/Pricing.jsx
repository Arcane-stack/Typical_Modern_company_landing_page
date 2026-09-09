import { useState, useRef } from "react";
import useIntersection from "../hooks/useIntersection";
import { PLANS } from "../data/content";
export default function Pricing() {
  const [annual, setAnnual] = useState(false);
  const ref = useRef(null);
  const visible = useIntersection(ref);

  return (
    <section id="pricing" className="py-24 px-6" style={{ background: "var(--secondary)" }}>
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className={`text-center mb-12 section-hidden ${visible ? "is-visible" : ""}`}>
          <span
            className="inline-block text-xs font-mono-code font-medium tracking-widest uppercase px-3 py-1.5 rounded-full mb-4"
            style={{ background: "rgba(124,58,237,0.12)", color: "#a78bfa", border: "1px solid rgba(124,58,237,0.2)" }}
          >
            Pricing
          </span>
          <h2 className="font-display font-bold mb-4" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "-0.02em" }}>
            Transparent pricing.<br />
            <span className="gradient-text">Predictable costs.</span>
          </h2>

          {/* Monthly / Annual toggle */}
          <div
            className="inline-flex items-center gap-4 mt-6 p-1.5 rounded-xl"
            style={{ background: "var(--card)", border: "1px solid var(--border)" }}
          >
            <button
              onClick={() => setAnnual(false)}
              className="px-5 py-2 rounded-lg text-sm font-medium transition-all"
              style={{ background: !annual ? "var(--primary)" : "transparent", color: !annual ? "white" : "var(--muted-foreground)" }}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className="px-5 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2"
              style={{ background: annual ? "var(--primary)" : "transparent", color: annual ? "white" : "var(--muted-foreground)" }}
            >
              Annual
              <span className="text-xs px-2 py-0.5 rounded-full font-bold" style={{ background: "rgba(34,197,94,0.2)", color: "#4ade80" }}>
                -20%
              </span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {PLANS.map((p, i) => (
            <div
              key={i}
              className={`card-hover rounded-2xl p-8 flex flex-col section-hidden ${visible ? "is-visible" : ""} ${p.highlight ? "glow-violet" : ""}`}
              style={{
                background: p.highlight ? "linear-gradient(145deg, rgba(124,58,237,0.15), var(--card))" : "var(--card)",
                border: p.highlight ? "1px solid rgba(124,58,237,0.5)" : "1px solid var(--border)",
                transitionDelay: `${i * 100}ms`,
              }}
            >
              {p.badge && (
                <div
                  className="inline-flex self-start mb-4 text-xs font-bold px-3 py-1 rounded-full"
                  style={{ background: "rgba(124,58,237,0.2)", color: "#a78bfa", border: "1px solid rgba(124,58,237,0.3)" }}
                >
                  {p.badge}
                </div>
              )}
              <h3 className="font-display font-bold text-xl mb-1" style={{ color: "var(--card-foreground)" }}>{p.name}</h3>
              <p className="text-sm mb-6 leading-relaxed" style={{ color: "var(--muted-foreground)" }}>{p.desc}</p>
              <div className="flex items-end gap-1 mb-8">
                <span className="font-display font-black text-5xl" style={{ color: "var(--foreground)", letterSpacing: "-0.03em" }}>
                  ${annual ? p.annual : p.monthly}
                </span>
                <span className="text-sm mb-2" style={{ color: "var(--muted-foreground)" }}>/seat/mo</span>
              </div>
              <button className={`w-full py-3.5 rounded-xl text-sm font-semibold mb-8 transition-all ${p.highlight ? "btn-primary" : "btn-outline"}`}>
                {p.name === "Enterprise" ? "Contact sales" : "Start free trial"}
              </button>
              <ul className="flex flex-col gap-3 mt-auto">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm" style={{ color: "var(--muted-foreground)" }}>
                    <span className="mt-0.5 text-violet-400 flex-shrink-0">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="text-center text-sm mt-8" style={{ color: "var(--muted-foreground)" }}>
          All plans include a 14-day free trial. No credit card required. Cancel anytime.
        </p>
      </div>
    </section>
  );
}