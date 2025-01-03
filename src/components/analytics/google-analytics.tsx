import { GoogleAnalytics as NextGoogleAnalytics } from "@next/third-parties/google";

export const GoogleAnalytics = () => {
  const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  if (!gaMeasurementId) return null;
  return <NextGoogleAnalytics gaId={gaMeasurementId} />;
};
