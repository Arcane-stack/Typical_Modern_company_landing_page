import { useState, useEffect, useRef } from "react";
import useIntersection from "../hooks/useIntersection";
import { TESTIMONIALS } from "../data/content";
export default function Testimonials() {
  const [active, setActive] = useState(0);
  const ref = useRef(null);
  const visible = useIntersection(ref);

  useEffect(() => {
    if (!visible) return;
    const id = setInterval(() => setActive((a) => (a + 1) % TESTIMONIALS.length), 5000);
    return () => clearInterval(id);
  }, [visible]);

  const t = TESTIMONIALS[active];

  return (
    <section id="testimonials" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 70% at 30% 50%, rgba(124,58,237,0.06) 0%, transparent 60%)" }} />
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className={`text-center mb-16 section-hidden ${visible ? "is-visible" : ""}`}>
          <span
            className="inline-block text-xs font-mono-code font-medium tracking-widest uppercase px-3 py-1.5 rounded-full mb-4"
            style={{ background: "rgba(124,58,237,0.12)", color: "#a78bfa", border: "1px solid rgba(124,58,237,0.2)" }}
          >
            Testimonials
          </span>
          <h2 className="font-display font-bold" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "-0.02em" }}>
            Real teams. <span className="gradient-text">Real results.</span>
          </h2>
        </div>

        {/* Featured testimonial */}
        <div
          className={`max-w-3xl mx-auto mb-12 rounded-2xl p-10 section-hidden ${visible ? "is-visible" : ""}`}
          style={{ background: "var(--card)", border: "1px solid var(--border)", transitionDelay: "0.1s" }}
        >
          <div className="text-yellow-400 text-lg mb-6">{"★".repeat(t.rating)}</div>
          <blockquote
            className="font-display text-xl md:text-2xl font-medium leading-relaxed mb-8"
            style={{ color: "var(--card-foreground)", letterSpacing: "-0.01em" }}
          >
            "{t.text}"
          </blockquote>
          <div className="flex items-center gap-4">
            <img
              src={t.avatar}
              alt={t.name}
              className="w-12 h-12 rounded-full object-cover"
              style={{ border: "2px solid rgba(124,58,237,0.3)" }}
            />
            <div>
              <div className="font-semibold" style={{ color: "var(--card-foreground)" }}>{t.name}</div>
              <div className="text-sm" style={{ color: "var(--muted-foreground)" }}>{t.role}, {t.company}</div>
            </div>
          </div>
        </div>

        {/* Carousel dots */}
        <div className="flex justify-center gap-2 mb-10">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="transition-all duration-300 rounded-full"
              style={{ width: i === active ? 24 : 8, height: 8, background: i === active ? "var(--primary)" : "var(--border)" }}
              aria-label={`Testimonial ${i + 1}`}
            />
          ))}
        </div>

        {/* Avatar row */}
        <div className="flex flex-wrap justify-center gap-4">
          {TESTIMONIALS.map((person, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all duration-300 ${i === active ? "" : "opacity-50 hover:opacity-75"}`}
              style={{
                background: i === active ? "var(--card)" : "transparent",
                border: `1px solid ${i === active ? "rgba(124,58,237,0.4)" : "transparent"}`,
              }}
            >
              <img src={person.avatar} alt={person.name} className="w-8 h-8 rounded-full object-cover" />
              <div className="text-left">
                <div className="text-xs font-medium" style={{ color: "var(--foreground)" }}>{person.name}</div>
                <div className="text-xs" style={{ color: "var(--muted-foreground)" }}>{person.company}</div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}