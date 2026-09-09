export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-6 mesh-bg grid-pattern overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl pointer-events-none" style={{ background: "radial-gradient(circle, #7c3aed, transparent 70%)" }} />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full opacity-15 blur-3xl pointer-events-none" style={{ background: "radial-gradient(circle, #06b6d4, transparent 70%)" }} />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 text-xs font-mono-code font-medium"
          style={{ border: "1px solid rgba(124,58,237,0.35)", background: "rgba(124,58,237,0.1)", color: "#a78bfa" }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse-ring inline-block" />
          Now in public beta — 14-day free trial, no card needed
        </div>

        <h1 className="font-display font-bold leading-tight mb-6" style={{ fontSize: "clamp(2.8rem, 7vw, 5.5rem)", letterSpacing: "-0.02em" }}>
          Build Better.<br />
          <span className="gradient-text">Work Smarter.</span>
        </h1>

        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
          NOVA is the AI productivity platform that learns how your team works — then makes every person, project, and process measurably more effective.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button
            className="btn-primary px-8 py-4 text-base rounded-xl font-semibold glow-violet"
            onClick={() => document.querySelector("#pricing")?.scrollIntoView({ behavior: "smooth" })}
          >
            Start free — 14 days →
          </button>
          <button
            className="btn-outline px-8 py-4 text-base rounded-xl"
            onClick={() => document.querySelector("#how-it-works")?.scrollIntoView({ behavior: "smooth" })}
          >
            Watch 2-min demo
          </button>
        </div>

        {/* Social proof */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm" style={{ color: "var(--muted-foreground)" }}>
          <div className="flex -space-x-2">
            {["photo-1487412720507-e7ab37603c6f", "photo-1507003211169-0a1dd7228f2d", "photo-1438761681033-6461ffad8d80", "photo-1472099645785-5658abf4ff4e"].map((id, i) => (
              <img key={i} src={`https://images.unsplash.com/${id}?w=40&h=40&fit=crop&auto=format`} alt="User" className="w-9 h-9 rounded-full border-2 object-cover" style={{ borderColor: "var(--background)" }} />
            ))}
          </div>
          <div className="flex items-center gap-2">
            <span className="text-yellow-400">★★★★★</span>
            <span><strong style={{ color: "var(--foreground)" }}>4.9/5</strong> from 2,400+ reviews</span>
          </div>
          <div>Trusted by <strong style={{ color: "var(--foreground)" }}>12,000+</strong> teams globally</div>
        </div>

        {/* Hero dashboard image */}
        <div className="mt-16 relative animate-float" style={{ animationDelay: "0.5s" }}>
          <div className="rounded-2xl overflow-hidden mx-auto max-w-4xl glow-violet" style={{ border: "1px solid var(--border)" }}>
            <div className="px-4 pt-4 pb-0 rounded-t-2xl" style={{ background: "var(--card)" }}>
              <div className="flex gap-1.5 mb-4">
                <span className="w-3 h-3 rounded-full bg-red-500/70" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <span className="w-3 h-3 rounded-full bg-green-500/70" />
              </div>
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop&auto=format"
                alt="NOVA dashboard interface showing AI task management"
                className="w-full rounded-t-lg object-cover"
                style={{ maxHeight: 360 }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
