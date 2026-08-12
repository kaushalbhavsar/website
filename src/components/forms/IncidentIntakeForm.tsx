"use client";

import { useState } from "react";
import { trackEvent } from "@/lib/analytics";
import { parseFormResponse } from "@/lib/parseFormResponse";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type IncidentIntakeFormProps = {
  className?: string;
};

export function IncidentIntakeForm({ className }: IncidentIntakeFormProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [started, setStarted] = useState(false);

  function handleFocus() {
    if (!started) {
      setStarted(true);
      trackEvent("incident_form_start", { page: "incident" });
    }
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("/api/incident-request.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          organization: formData.get("organization"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          description: formData.get("description"),
          noticedAt: formData.get("noticedAt"),
          activeStatus: formData.get("activeStatus"),
          systems: formData.get("systems"),
          contactMethod: formData.get("contactMethod"),
          website: formData.get("website"),
        }),
      });

      const data = await parseFormResponse(res);
      if (!res.ok || !data.success) {
        throw new Error(data.error || "Submission failed");
      }

      setStatus("success");
      trackEvent("incident_form_submit", { page: "incident" });
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  if (status === "success") {
    return (
      <div className={cn("rounded-lg border border-success/30 bg-success/10 p-6", className)}>
        <p className="text-text-primary font-medium">Request received.</p>
        <p className="mt-2 text-text-secondary text-sm">
          We will respond as soon as possible. If the incident is active, avoid actions that may destroy evidence until you hear from us.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} onFocus={handleFocus} className={cn("space-y-5", className)} noValidate>
      <p className="text-sm text-text-muted border border-border rounded p-4 bg-surface-secondary">
        Please do not submit passwords, authentication tokens or sensitive evidence through this form.
        Secure evidence-transfer arrangements can be established separately.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="incident-name" className="block text-sm text-text-secondary mb-1.5">
            Name <span className="text-accent">*</span>
          </label>
          <input id="incident-name" name="name" type="text" required autoComplete="name"
            className="w-full rounded border border-border bg-surface-secondary px-4 py-2.5 text-text-primary text-sm focus:border-accent focus:outline-none" />
        </div>
        <div>
          <label htmlFor="incident-org" className="block text-sm text-text-secondary mb-1.5">
            Organization
          </label>
          <input id="incident-org" name="organization" type="text" autoComplete="organization"
            className="w-full rounded border border-border bg-surface-secondary px-4 py-2.5 text-text-primary text-sm focus:border-accent focus:outline-none" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="incident-email" className="block text-sm text-text-secondary mb-1.5">
            Email <span className="text-accent">*</span>
          </label>
          <input id="incident-email" name="email" type="email" required autoComplete="email"
            className="w-full rounded border border-border bg-surface-secondary px-4 py-2.5 text-text-primary text-sm focus:border-accent focus:outline-none" />
        </div>
        <div>
          <label htmlFor="incident-phone" className="block text-sm text-text-secondary mb-1.5">
            Phone <span className="text-text-muted">(optional)</span>
          </label>
          <input id="incident-phone" name="phone" type="tel" autoComplete="tel"
            className="w-full rounded border border-border bg-surface-secondary px-4 py-2.5 text-text-primary text-sm focus:border-accent focus:outline-none" />
        </div>
      </div>

      <div>
        <label htmlFor="incident-description" className="block text-sm text-text-secondary mb-1.5">
          What happened? <span className="text-accent">*</span>
        </label>
        <textarea id="incident-description" name="description" required rows={5}
          placeholder="Describe what you observed — compromised accounts, suspicious activity, malware alerts, etc."
          className="w-full rounded border border-border bg-surface-secondary px-4 py-2.5 text-text-primary text-sm focus:border-accent focus:outline-none resize-y" />
      </div>

      <div>
        <label htmlFor="incident-noticed" className="block text-sm text-text-secondary mb-1.5">
          When did you first notice it? <span className="text-text-muted">(optional)</span>
        </label>
        <input id="incident-noticed" name="noticedAt" type="text"
          className="w-full rounded border border-border bg-surface-secondary px-4 py-2.5 text-text-primary text-sm focus:border-accent focus:outline-none" />
      </div>

      <fieldset>
        <legend className="block text-sm text-text-secondary mb-2">
          Is the incident currently active?
        </legend>
        <div className="flex flex-wrap gap-4">
          {[
            { value: "yes", label: "Yes" },
            { value: "no", label: "No" },
            { value: "not-sure", label: "Not sure" },
          ].map((opt) => (
            <label key={opt.value} className="flex items-center gap-2 text-sm text-text-secondary cursor-pointer">
              <input type="radio" name="activeStatus" value={opt.value} className="accent-accent" />
              {opt.label}
            </label>
          ))}
        </div>
      </fieldset>

      <div>
        <label htmlFor="incident-systems" className="block text-sm text-text-secondary mb-1.5">
          Systems potentially affected <span className="text-text-muted">(optional)</span>
        </label>
        <input id="incident-systems" name="systems" type="text"
          className="w-full rounded border border-border bg-surface-secondary px-4 py-2.5 text-text-primary text-sm focus:border-accent focus:outline-none" />
      </div>

      <fieldset>
        <legend className="block text-sm text-text-secondary mb-2">
          How should we contact you?
        </legend>
        <div className="flex flex-wrap gap-4">
          <label className="flex items-center gap-2 text-sm text-text-secondary cursor-pointer">
            <input type="radio" name="contactMethod" value="email" defaultChecked className="accent-accent" />
            Email
          </label>
          <label className="flex items-center gap-2 text-sm text-text-secondary cursor-pointer">
            <input type="radio" name="contactMethod" value="phone" className="accent-accent" />
            Phone
          </label>
        </div>
      </fieldset>

      <div className="hidden" aria-hidden="true">
        <label htmlFor="incident-website">Website</label>
        <input id="incident-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {status === "error" && (
        <p className="text-sm text-accent" role="alert">{errorMsg}</p>
      )}

      <Button type="submit" disabled={status === "loading"}>
        {status === "loading" ? "Submitting…" : "Request Incident Assistance"}
      </Button>
    </form>
  );
}
