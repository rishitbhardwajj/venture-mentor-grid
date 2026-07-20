import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { to: "/", label: "Home" },
  { to: "/mentors", label: "Find Mentors" },
  { to: "/communities", label: "Communities" },
  { to: "/events", label: "Events" },
  { to: "/roadmaps", label: "Career Resources" },
  { to: "/forum", label: "Discussion Forum" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <div className="h-9 w-9 rounded-xl btn-gradient grid place-items-center">
            <GraduationCap className="h-5 w-5" />
          </div>
          <span className="font-bold text-lg tracking-tight">
            Mentor<span className="text-primary">Connect</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors rounded-md"
              activeProps={{ className: "text-primary" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-2">
          <Button variant="ghost" size="sm">Login</Button>
          <Button size="sm" className="btn-gradient border-0">Sign Up</Button>
        </div>

        <button
          className="lg:hidden p-2 rounded-md hover:bg-muted"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-background border-t border-border">
          <div className="px-4 py-4 flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="px-3 py-2 text-sm font-medium rounded-md hover:bg-muted"
              >
                {l.label}
              </Link>
            ))}
            <div className="flex gap-2 pt-3">
              <Button variant="outline" size="sm" className="flex-1">Login</Button>
              <Button size="sm" className="btn-gradient border-0 flex-1">Sign Up</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
