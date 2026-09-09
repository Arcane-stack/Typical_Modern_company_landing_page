
export default function Footer() {
  const cols = [
    { title: "Product", links: ["Features", "Integrations", "Pricing", "Changelog", "Roadmap"] },
    { title: "Company", links: ["About", "Blog", "Careers", "Press", "Contact"] },
    { title: "Resources", links: ["Documentation", "API Reference", "Community", "Status", "Security"] },
    { title: "Legal", links: ["Privacy Policy", "Terms of Service", "Cookie Policy", "GDPR", "SOC 2"] },
  ];

  return (
    <footer style={{ background: "var(--secondary)", borderTop: "1px solid var(--border)" }}>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-14">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold"
                style={{ background: "linear-gradient(135deg, #7c3aed, #5b21b6)" }}
              >
                N
              </div>
              <span className="font-display font-bold text-lg" style={{ color: "var(--foreground)" }}>NOVA</span>
            </div>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--muted-foreground)" }}>
              AI productivity for teams that cannot afford to slow down.
            </p>
            <div className="flex gap-3">
              {["𝕏", "in", "▶", "○"].map((icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-sm transition-colors hover:bg-violet-500/10"
                  style={{ border: "1px solid var(--border)", color: "var(--muted-foreground)" }}
                  aria-label={["Twitter/X", "LinkedIn", "YouTube", "GitHub"][i]}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
          {cols.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs font-bold tracking-widest uppercase mb-5 font-mono-code" style={{ color: "var(--muted-foreground)" }}>
                {col.title}
              </h4>
              <ul className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm transition-colors hover:text-violet-400" style={{ color: "var(--muted-foreground)" }}>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="divider-gradient mb-8" />
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs" style={{ color: "var(--muted-foreground)" }}>
          <span>© 2024 NOVA Technologies, Inc. All rights reserved.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-violet-400 transition-colors">Privacy</a>
            <a href="#" className="hover:text-violet-400 transition-colors">Terms</a>
            <a href="#" className="hover:text-violet-400 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}