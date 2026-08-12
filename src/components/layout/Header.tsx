"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { navigation } from "@/lib/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-colors duration-200",
        scrolled
          ? "bg-background/95 backdrop-blur-sm border-b border-border"
          : "bg-transparent",
      )}
    >
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="font-mono text-sm font-semibold tracking-[0.2em] text-text-primary group-hover:text-accent transition-colors">
              PRATIKAR
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-text-secondary hover:text-text-primary transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/contact"
              className="text-sm text-text-muted hover:text-text-secondary transition-colors"
            >
              Contact
            </Link>
            <Button href="/incident" size="sm">
              Get Incident Help
            </Button>
          </div>

          <button
            type="button"
            className="lg:hidden p-2 text-text-secondary hover:text-text-primary"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </Container>

      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-16 z-40 bg-background/98 backdrop-blur-sm">
          <Container className="py-6">
            <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="py-3 text-lg text-text-secondary hover:text-text-primary border-b border-border transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="py-3 text-lg text-text-muted hover:text-text-secondary transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Contact
              </Link>
              <div className="pt-6">
                <Button href="/incident" className="w-full">
                  Get Incident Help
                </Button>
              </div>
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
}
