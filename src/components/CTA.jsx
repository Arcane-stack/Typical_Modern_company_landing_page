import { useState, useRef } from "react";
import useIntersection from "../hooks/useIntersection";
export default function CTA() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");
  const ref = useRef(null);
  const visible = useIntersection(ref);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      setStatus("error");
      return;
    }
    setStatus("success");
    setEmail("");
  };

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none mesh-bg" />
      <div className="absolute inset-0 grid-pattern pointer-events-none opacity-50" />
      <div ref={ref} className={`max-w-3xl mx-auto text-center relative z-10 section-hidden ${visible ? "is-visible" : ""}`}>
        <h2 className="font-display font-bold mb-6" style={{ fontSize: "clamp(2.2rem, 5vw, 3.75rem)", letterSpacing: "-0.02em" }}>
          Ready to work at<br />
          <span className="gradient-text">a different speed?</span>
        </h2>
        <p className="text-lg mb-10" style={{ color: "var(--muted-foreground)" }}>
          Join 12,000+ teams who stopped drowning in coordination overhead and started shipping what matters.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-6">
          <input
            type="email"
            value={email}
            onChange={(e) => { setEmail(e.target.value); setStatus("idle"); }}
            placeholder="you@company.com"
            className="flex-1 px-5 py-3.5 rounded-xl text-sm outline-none focus:ring-2 focus:ring-violet-500/50"
            style={{
              background: "var(--card)",
              border: `1px solid ${status === "error" ? "rgba(239,68,68,0.5)" : "var(--border)"}`,
              color: "var(--foreground)",
            }}
          />
          <button type="submit" className="btn-primary px-6 py-3.5 rounded-xl text-sm font-semibold whitespace-nowrap">
            Start free →
          </button>
        </form>
        {status === "success" && <p className="text-sm text-green-400">You are in! Check your inbox for next steps.</p>}
        {status === "error" && <p className="text-sm text-red-400">Please enter a valid email address.</p>}
        <p className="text-xs mt-4" style={{ color: "var(--muted-foreground)" }}>
          14-day free trial · No credit card required · Cancel anytime
        </p>
      </div>
    </section>
  );
}
