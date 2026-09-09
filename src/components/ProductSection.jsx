import { useRef } from "react";
import useIntersection from "../hooks/useIntersection";
export default function ProductSection() {
  const ref = useRef(null);
  const visible = useIntersection(ref);

  return (
    <section id="product" className="py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div ref={ref} className={`section-hidden ${visible ? "is-visible" : ""}`}>
          <span
            className="inline-block text-xs font-mono-code font-medium tracking-widest uppercase px-3 py-1.5 rounded-full mb-4"
            style={{ background: "rgba(6,182,212,0.1)", color: "#22d3ee", border: "1px solid rgba(6,182,212,0.2)" }}
          >
            About NOVA
          </span>
          <h2 className="font-display font-bold mb-6" style={{ fontSize: "clamp(2rem, 3.5vw, 2.75rem)", letterSpacing: "-0.02em" }}>
            Built for the way<br />modern teams actually work.
          </h2>
          <p className="text-base leading-relaxed mb-4" style={{ color: "var(--muted-foreground)" }}>
            NOVA was founded in 2022 by a team of researchers and engineers who had spent years watching high-performing teams get buried under tools that generated data without generating clarity.
          </p>
          <p className="text-base leading-relaxed mb-8" style={{ color: "var(--muted-foreground)" }}>
            Our mission is simple: give every team — regardless of size — the kind of intelligent coordination that was previously only possible with an army of chiefs of staff.
          </p>
          <div className="grid grid-cols-2 gap-6 mb-8">
            {[["2022", "Founded"], ["140+", "Team members"], ["$62M", "Series B raised"], ["24", "Countries served"]].map(([val, label]) => (
              <div key={label}>
                <div className="font-display font-bold text-2xl gradient-text">{val}</div>
                <div className="text-sm mt-0.5" style={{ color: "var(--muted-foreground)" }}>{label}</div>
              </div>
            ))}
          </div>
          <button
            className="btn-primary px-6 py-3 rounded-xl text-sm font-semibold"
            onClick={() => document.querySelector("#pricing")?.scrollIntoView({ behavior: "smooth" })}
          >
            Meet the team →
          </button>
        </div>

        <div className={`relative section-hidden ${visible ? "is-visible" : ""}`} style={{ transitionDelay: "0.2s" }}>
          <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid var(--border)" }}>
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=700&h=500&fit=crop&auto=format"
              alt="NOVA team collaborating in a modern workspace"
              className="w-full object-cover"
              style={{ maxHeight: 420 }}
            />
          </div>
          <div
            className="absolute -bottom-6 -left-6 rounded-2xl p-5 backdrop-blur-sm"
            style={{ background: "var(--card)", border: "1px solid var(--border)", minWidth: 200 }}
          >
            <div className="text-sm font-medium mb-1" style={{ color: "var(--card-foreground)" }}>Weekly time saved</div>
            <div className="font-display font-bold text-3xl gradient-text">8.4 hrs</div>
            <div className="text-xs mt-1" style={{ color: "var(--muted-foreground)" }}>avg per team member</div>
          </div>
        </div>
      </div>
    </section>
  );
}