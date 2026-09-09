import { LOGOS } from "../data/content";
export default function TrustedBy() {
  return (
    <section className="py-16 relative overflow-hidden" style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
      <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
        <p className="text-sm font-medium tracking-widest uppercase font-mono-code" style={{ color: "var(--muted-foreground)" }}>
          Trusted by teams at
        </p>
      </div>
      <div className="relative">
        <div className="flex gap-12 animate-ticker whitespace-nowrap" style={{ width: "max-content" }}>
          {[...LOGOS, ...LOGOS].map((logo, i) => (
            <div key={i} className="flex items-center gap-2 px-2">
              <span className="text-lg font-display font-bold tracking-tight" style={{ color: "var(--muted-foreground)", opacity: 0.6 }}>
                {logo}
              </span>
            </div>
          ))}
        </div>
        <div className="absolute inset-y-0 left-0 w-24 pointer-events-none z-10" style={{ background: "linear-gradient(90deg, var(--background), transparent)" }} />
        <div className="absolute inset-y-0 right-0 w-24 pointer-events-none z-10" style={{ background: "linear-gradient(270deg, var(--background), transparent)" }} />
      </div>
    </section>
  );
}

