type GtagEvent = {
  action: string;
  category: string;
  label: string;
  value?: number;
};

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

const pageview = (url: string) => {
  if (!GA_MEASUREMENT_ID) return;
  window.gtag("config", GA_MEASUREMENT_ID, {
    page_path: url,
  });
};

const event = ({ action, category, label, value }: GtagEvent) => {
  if (!GA_MEASUREMENT_ID) return;
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

export const events = { pageview, event };
