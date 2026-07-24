import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

// Placeholder types/props for components if they don't exist yet
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: string;
  size?: string;
}

const nav = [
  { to: "/", label: "หน้าแรก" },
  { to: "/shop", label: "สินค้า" },
  { to: "/subscription", label: "ผูกปิ่นโต" },
  { to: "/recipes", label: "สูตรอาหาร" },
  { to: "/about", label: "เรื่องของเรา" },
  { to: "/wholesale", label: "ขายส่ง B2B" },
] as const;

export function Header() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <div className="hidden sm:flex flex-col leading-none">
            <span className="font-display text-lg font-bold text-primary">SUT Farm</span>
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
              ไก่โคราชแท้
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="rounded-full px-4 py-2 text-sm font-medium transition-colors hover:bg-secondary hover:text-foreground"
              inactiveProps={{ className: "text-foreground/80" }}
              activeProps={{ className: "bg-secondary text-primary font-semibold" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md hover:bg-secondary"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "ปิดเมนู" : "เปิดเมนู"}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <div className="lg:hidden border-t border-border/60 bg-background">
          <nav className="mx-auto flex max-w-7xl flex-col p-3 space-y-1">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-medium transition-colors hover:bg-secondary"
                inactiveProps={{ className: "text-foreground/80" }}
                activeProps={{ className: "bg-secondary text-primary font-semibold" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
