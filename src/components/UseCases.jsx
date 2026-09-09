import { useRef } from "react";
import useIntersection from "../hooks/useIntersection";
import { USE_CASES } from "../data/content";
export default function UseCases() {
  const ref = useRef(null);
  const visible = useIntersection(ref);

  return (
    <section id="use-cases" className="py-24 px-6" style={{ background: "var(--secondary)" }}>
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className={`text-center mb-16 section-hidden ${visible ? "is-visible" : ""}`}>
          <span
            className="inline-block text-xs font-mono-code font-medium tracking-widest uppercase px-3 py-1.5 rounded-full mb-4"
            style={{ background: "rgba(124,58,237,0.12)", color: "#a78bfa", border: "1px solid rgba(124,58,237,0.2)" }}
          >
            Solutions
          </span>
          <h2 className="font-display font-bold mb-4" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "-0.02em" }}>
            Built for every team.<br />
            <span className="gradient-text">Tailored for yours.</span>
          </h2>
          <p className="max-w-xl mx-auto text-lg" style={{ color: "var(--muted-foreground)" }}>
            NOVA adapts to your team's unique workflows — out of the box, no configuration required.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {USE_CASES.map((u, i) => (
            <div
              key={i}
              className={`card-hover rounded-2xl p-7 section-hidden ${visible ? "is-visible" : ""}`}
              style={{ background: "var(--card)", border: "1px solid var(--border)", transitionDelay: `${i * 80}ms` }}
            >
              <div className="text-3xl mb-4">{u.icon}</div>
              <h3 className="font-semibold text-lg mb-2" style={{ color: "var(--card-foreground)" }}>{u.title}</h3>
              <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--muted-foreground)" }}>{u.desc}</p>
              <div className="flex flex-wrap gap-2">
                {u.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2.5 py-1 rounded-full font-mono-code"
                    style={{ background: "rgba(124,58,237,0.1)", color: "#a78bfa", border: "1px solid rgba(124,58,237,0.15)" }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}