import { useRef } from "react";
import useIntersection from "../hooks/useIntersection";
import { FEATURES } from "../data/content";
export default function Features() {
  const ref = useRef(null);
  const visible = useIntersection(ref);

  return (
    <section id="features" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className={`text-center mb-16 section-hidden ${visible ? "is-visible" : ""}`}>
          <span
            className="inline-block text-xs font-mono-code font-medium tracking-widest uppercase px-3 py-1.5 rounded-full mb-4"
            style={{ background: "rgba(124,58,237,0.12)", color: "#a78bfa", border: "1px solid rgba(124,58,237,0.2)" }}
          >
            Features
          </span>
          <h2 className="font-display font-bold mb-4" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "-0.02em" }}>
            Every tool your team needs.<br />
            <span className="gradient-text">Unified by intelligence.</span>
          </h2>
          <p className="max-w-xl mx-auto text-lg" style={{ color: "var(--muted-foreground)" }}>
            NOVA replaces the patchwork of disconnected apps with a single AI layer that understands your business.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {FEATURES.map((f, i) => (
            <div
              key={i}
              className="card-hover rounded-2xl p-6 noise-overlay"
              style={{ background: "var(--card)", border: "1px solid var(--border)", transitionDelay: `${i * 60}ms` }}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4" style={{ background: "rgba(124,58,237,0.12)" }}>
                {f.icon}
              </div>
              <h3 className="font-semibold mb-2 text-base" style={{ color: "var(--card-foreground)" }}>{f.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--muted-foreground)" }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}