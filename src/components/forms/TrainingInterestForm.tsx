"use client";

import { useState } from "react";
import { trackEvent } from "@/lib/analytics";
import { parseFormResponse } from "@/lib/parseFormResponse";
import { Button } from "@/components/ui/Button";
import { programs, trainingCategories } from "@/lib/content/training";
import { cn } from "@/lib/utils";

type TrainingInterestFormProps = {
  className?: string;
  defaultProgram?: string;
};

export function TrainingInterestForm({ className, defaultProgram }: TrainingInterestFormProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [started, setStarted] = useState(false);

  const programOptions = [
    ...programs.map((p) => ({ value: p.slug, label: p.title })),
    ...trainingCategories.map((c) => ({ value: c.slug, label: c.title })),
    { value: "corporate", label: "Corporate Training" },
    { value: "other", label: "Other / Not sure" },
  ];

  function handleFocus() {
    if (!started) {
      setStarted(true);
      trackEvent("training_interest_start", { page: "training-register" });
    }
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("/api/training-interest.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          role: formData.get("role"),
          experience: formData.get("experience"),
          program: formData.get("program"),
          goals: formData.get("goals"),
          format: formData.get("format"),
          phone: formData.get("phone"),
          website: formData.get("website"),
        }),
      });

      const data = await parseFormResponse(res);
      if (!res.ok || !data.success) {
        throw new Error(data.error || "Submission failed");
      }

      setStatus("success");
      trackEvent("training_interest_submit", { page: "training-register" });
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  if (status === "success") {
    return (
      <div className={cn("rounded-lg border border-success/30 bg-success/10 p-6", className)}>
        <p className="text-text-primary font-medium">Interest registered.</p>
        <p className="mt-2 text-text-secondary text-sm">We will be in touch when relevant programs or cohorts are announced.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} onFocus={handleFocus} className={cn("space-y-5", className)} noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="training-name" className="block text-sm text-text-secondary mb-1.5">
            Name <span className="text-accent">*</span>
          </label>
          <input id="training-name" name="name" type="text" required autoComplete="name"
            className="w-full rounded border border-border bg-surface-secondary px-4 py-2.5 text-text-primary text-sm focus:border-accent focus:outline-none" />
        </div>
        <div>
          <label htmlFor="training-email" className="block text-sm text-text-secondary mb-1.5">
            Email <span className="text-accent">*</span>
          </label>
          <input id="training-email" name="email" type="email" required autoComplete="email"
            className="w-full rounded border border-border bg-surface-secondary px-4 py-2.5 text-text-primary text-sm focus:border-accent focus:outline-none" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="training-role" className="block text-sm text-text-secondary mb-1.5">
            Current role
          </label>
          <input id="training-role" name="role" type="text"
            className="w-full rounded border border-border bg-surface-secondary px-4 py-2.5 text-text-primary text-sm focus:border-accent focus:outline-none" />
        </div>
        <div>
          <label htmlFor="training-experience" className="block text-sm text-text-secondary mb-1.5">
            Years of experience
          </label>
          <input id="training-experience" name="experience" type="text"
            className="w-full rounded border border-border bg-surface-secondary px-4 py-2.5 text-text-primary text-sm focus:border-accent focus:outline-none" />
        </div>
      </div>

      <div>
        <label htmlFor="training-program" className="block text-sm text-text-secondary mb-1.5">
          Training you&apos;re interested in
        </label>
        <select id="training-program" name="program" defaultValue={defaultProgram || ""}
          className="w-full rounded border border-border bg-surface-secondary px-4 py-2.5 text-text-primary text-sm focus:border-accent focus:outline-none">
          <option value="">Select a program or area</option>
          {programOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="training-goals" className="block text-sm text-text-secondary mb-1.5">
          What do you want to learn?
        </label>
        <textarea id="training-goals" name="goals" rows={4}
          className="w-full rounded border border-border bg-surface-secondary px-4 py-2.5 text-text-primary text-sm focus:border-accent focus:outline-none resize-y" />
      </div>

      <fieldset>
        <legend className="block text-sm text-text-secondary mb-2">Preferred format</legend>
        <div className="flex flex-wrap gap-4">
          {[
            { value: "live-online", label: "Live online" },
            { value: "corporate-workshop", label: "Corporate workshop" },
            { value: "self-paced", label: "Self-paced" },
            { value: "not-sure", label: "Not sure" },
          ].map((opt) => (
            <label key={opt.value} className="flex items-center gap-2 text-sm text-text-secondary cursor-pointer">
              <input type="radio" name="format" value={opt.value} className="accent-accent" />
              {opt.label}
            </label>
          ))}
        </div>
      </fieldset>

      <div>
        <label htmlFor="training-phone" className="block text-sm text-text-secondary mb-1.5">
          Phone <span className="text-text-muted">(optional)</span>
        </label>
        <input id="training-phone" name="phone" type="tel" autoComplete="tel"
          className="w-full rounded border border-border bg-surface-secondary px-4 py-2.5 text-text-primary text-sm focus:border-accent focus:outline-none" />
      </div>

      <div className="hidden" aria-hidden="true">
        <label htmlFor="training-website">Website</label>
        <input id="training-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {status === "error" && (
        <p className="text-sm text-accent" role="alert">{errorMsg}</p>
      )}

      <Button type="submit" disabled={status === "loading"}>
        {status === "loading" ? "Submitting…" : "Register Interest"}
      </Button>
    </form>
  );
}
