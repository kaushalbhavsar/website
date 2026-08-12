type AnalyticsEvent =
  | "incident_cta_click"
  | "incident_form_start"
  | "incident_form_submit"
  | "security_review_click"
  | "service_view"
  | "insight_view"
  | "contact_submit"
  | "training_view"
  | "training_program_view"
  | "training_interest_start"
  | "training_interest_submit"
  | "corporate_training_click"
  | "training_research_click";

type AnalyticsParams = {
  page?: string;
  service?: string;
  insight?: string;
  cta?: string;
  program?: string;
};

export function trackEvent(event: AnalyticsEvent, params?: AnalyticsParams) {
  if (typeof window === "undefined") return;

  const safeParams: AnalyticsParams = {};
  if (params?.page) safeParams.page = params.page;
  if (params?.service) safeParams.service = params.service;
  if (params?.insight) safeParams.insight = params.insight;
  if (params?.cta) safeParams.cta = params.cta;
  if (params?.program) safeParams.program = params.program;

  if (typeof window.gtag === "function") {
    window.gtag("event", event, safeParams);
  }
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}
