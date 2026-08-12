"use client";

import { useState } from "react";
import { trackEvent } from "@/lib/analytics";
import { parseFormResponse } from "@/lib/parseFormResponse";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type ContactFormProps = {
  className?: string;
};

export function ContactForm({ className }: ContactFormProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("/api/contact.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          organization: formData.get("organization"),
          phone: formData.get("phone"),
          subject: formData.get("subject"),
          message: formData.get("message"),
          website: formData.get("website"),
        }),
      });

      const data = await parseFormResponse(res);
      if (!res.ok || !data.success) {
        throw new Error(data.error || "Submission failed");
      }

      setStatus("success");
      trackEvent("contact_submit", { page: "contact" });
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  if (status === "success") {
    return (
      <div className={cn("rounded-lg border border-success/30 bg-success/10 p-6", className)}>
        <p className="text-text-primary font-medium">Message sent.</p>
        <p className="mt-2 text-text-secondary text-sm">We will respond as soon as possible.</p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-4 text-sm text-accent hover:text-accent-hover"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={cn("space-y-5", className)} noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="contact-name" className="block text-sm text-text-secondary mb-1.5">
            Name <span className="text-accent">*</span>
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="w-full rounded border border-border bg-surface-secondary px-4 py-2.5 text-text-primary text-sm focus:border-accent focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="contact-email" className="block text-sm text-text-secondary mb-1.5">
            Email <span className="text-accent">*</span>
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="w-full rounded border border-border bg-surface-secondary px-4 py-2.5 text-text-primary text-sm focus:border-accent focus:outline-none"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="contact-org" className="block text-sm text-text-secondary mb-1.5">
            Organization
          </label>
          <input
            id="contact-org"
            name="organization"
            type="text"
            autoComplete="organization"
            className="w-full rounded border border-border bg-surface-secondary px-4 py-2.5 text-text-primary text-sm focus:border-accent focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="contact-phone" className="block text-sm text-text-secondary mb-1.5">
            Phone
          </label>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className="w-full rounded border border-border bg-surface-secondary px-4 py-2.5 text-text-primary text-sm focus:border-accent focus:outline-none"
          />
        </div>
      </div>

      <div>
        <label htmlFor="contact-subject" className="block text-sm text-text-secondary mb-1.5">
          Subject
        </label>
        <input
          id="contact-subject"
          name="subject"
          type="text"
          defaultValue="General Enquiry"
          className="w-full rounded border border-border bg-surface-secondary px-4 py-2.5 text-text-primary text-sm focus:border-accent focus:outline-none"
        />
      </div>

      <div>
        <label htmlFor="contact-message" className="block text-sm text-text-secondary mb-1.5">
          Message <span className="text-accent">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          className="w-full rounded border border-border bg-surface-secondary px-4 py-2.5 text-text-primary text-sm focus:border-accent focus:outline-none resize-y"
        />
      </div>

      {/* Honeypot — hidden from users */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="contact-website">Website</label>
        <input id="contact-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {status === "error" && (
        <p className="text-sm text-accent" role="alert">{errorMsg}</p>
      )}

      <Button type="submit" disabled={status === "loading"}>
        {status === "loading" ? "Sending…" : "Send Message"}
      </Button>
    </form>
  );
}
