type AnalyticsEvent =
  | "incident_cta_click"
  | "incident_form_start"
  | "incident_form_submit"
  | "security_review_click"
  | "service_view"
  | "insight_view"
  | "contact_submit";

type AnalyticsParams = {
  page?: string;
  service?: string;
  insight?: string;
  cta?: string;
};

export function trackEvent(event: AnalyticsEvent, params?: AnalyticsParams) {
  if (typeof window === "undefined") return;

  const safeParams: AnalyticsParams = {};
  if (params?.page) safeParams.page = params.page;
  if (params?.service) safeParams.service = params.service;
  if (params?.insight) safeParams.insight = params.insight;
  if (params?.cta) safeParams.cta = params.cta;

  if (typeof window.gtag === "function") {
    window.gtag("event", event, safeParams);
  }
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}
