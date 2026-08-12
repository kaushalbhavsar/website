"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { Container } from "@/components/layout/Container";

const STORAGE_KEY = "pratikar-emergency-banner-dismissed";

export function EmergencyBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem(STORAGE_KEY);
    if (!dismissed) {
      setVisible(true);
    }
  }, []);

  const dismiss = () => {
    localStorage.setItem(STORAGE_KEY, "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="bg-surface-secondary border-b border-border">
      <Container>
        <div className="flex items-center justify-between py-2.5 gap-4">
          <p className="text-sm text-text-secondary">
            Need help with an active security incident?{" "}
            <Link
              href="/incident"
              className="text-accent hover:text-accent-hover underline underline-offset-2 transition-colors"
            >
              Request assistance
            </Link>
          </p>
          <button
            type="button"
            onClick={dismiss}
            className="shrink-0 p-1 text-text-muted hover:text-text-secondary transition-colors"
            aria-label="Dismiss alert"
          >
            <X size={16} />
          </button>
        </div>
      </Container>
    </div>
  );
}
