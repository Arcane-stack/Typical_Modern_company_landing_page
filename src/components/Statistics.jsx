import StatCounter from "./StatCounter";
import { STATS } from "../data/content";
export default function Statistics() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(124,58,237,0.08) 0%, transparent 70%)" }} />
      <div className="max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
        {STATS.map((s, i) => <StatCounter key={i} {...s} />)}
      </div>
    </section>
  );
}