import { useState, useEffect } from "react";
export default  function NavBar({ dark, setDark }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Use Cases", href: "#use-cases" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ];

  const handleNav = (href) => {
    setOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "py-3 backdrop-blur-xl" : "py-5"}`}
      style={{
        background: scrolled ? (dark ? "rgba(7,7,15,0.85)" : "rgba(248,247,255,0.85)") : "transparent",
        borderBottom: scrolled ? "1px solid var(--border)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          className="flex items-center gap-2.5"
        >
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold"
            style={{ background: "linear-gradient(135deg, #7c3aed, #5b21b6)" }}
          >
            N
          </div>
          <span className="font-display font-bold text-xl tracking-tight" style={{ color: "var(--foreground)" }}>
            NOVA
          </span>
        </a>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <button
              key={l.href}
              onClick={() => handleNav(l.href)}
              className="text-sm font-medium transition-all duration-300 hover:text-violet-300 hover:[text-shadow:0_0_8px_rgba(167,139,250,0.7)]"
              style={{ color: "var(--muted-foreground)", background: "none", border: "none", cursor: "pointer" }}
            >
              {l.label}
            </button>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => setDark(!dark)}
            className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors hover:bg-violet-500/10"
            style={{ border: "1px solid var(--border)", color: "var(--muted-foreground)" }}
            aria-label="Toggle theme"
          >
            {dark ? "☀️" : "🌙"}
          </button>
          <button className="btn-outline px-4 py-2 text-sm rounded-lg" onClick={() => handleNav("#pricing")}>
            Sign in
          </button>
          <button className="btn-primary px-5 py-2 text-sm rounded-lg" onClick={() => handleNav("#pricing")}>
            Start free trial
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span
            className={`block w-5 h-0.5 transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`}
            style={{ background: "var(--foreground)" }}
          />
          <span
            className={`block w-5 h-0.5 transition-all duration-300 ${open ? "opacity-0" : ""}`}
            style={{ background: "var(--foreground)" }}
          />
          <span
            className={`block w-5 h-0.5 transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`}
            style={{ background: "var(--foreground)" }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${open ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}`}
        style={{
          background: dark ? "rgba(7,7,15,0.97)" : "rgba(248,247,255,0.97)",
          backdropFilter: "blur(20px)",
        }}
      >
        <div className="px-6 pb-6 pt-2 flex flex-col gap-4">
          {links.map((l) => (
            <button
              key={l.href}
              onClick={() => handleNav(l.href)}
              className="text-left text-base font-medium py-2 transition-colors hover:text-violet-400"
              style={{ color: "var(--foreground)", background: "none", border: "none", cursor: "pointer" }}
            >
              {l.label}
            </button>
          ))}
          <div className="divider-gradient my-1" />
          <div className="flex gap-3">
            <button className="btn-outline flex-1 py-2.5 text-sm rounded-lg" onClick={() => handleNav("#pricing")}>
              Sign in
            </button>
            <button className="btn-primary flex-1 py-2.5 text-sm rounded-lg" onClick={() => handleNav("#pricing")}>
              Start free trial
            </button>
          </div>
          <button
            onClick={() => setDark(!dark)}
            className="flex items-center gap-2 text-sm py-1"
            style={{ color: "var(--muted-foreground)", background: "none", border: "none", cursor: "pointer" }}
          >
            {dark ? "☀️ Light mode" : "🌙 Dark mode"}
          </button>
        </div>
      </div>
    </header>
  );
}
