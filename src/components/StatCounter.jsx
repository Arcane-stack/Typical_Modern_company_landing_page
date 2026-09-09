import { useRef } from "react";
import useIntersection from "../hooks/useIntersection";
import useCounter from "../hooks/useCounter";
export default function StatCounter({ value, suffix, label }) {
  const ref = useRef(null);
  const visible = useIntersection(ref, 0.3);
  const count = useCounter(value, visible);

  return (
    <div ref={ref} className="text-center">
      <div className="stat-number font-black mb-2 gradient-text" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", letterSpacing: "-0.02em" }}>
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-sm font-medium" style={{ color: "var(--muted-foreground)" }}>{label}</div>
    </div>
  );
}
