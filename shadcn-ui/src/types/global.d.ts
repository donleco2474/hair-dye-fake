interface Window {
  fbq?: (event: string, eventName: string, params?: Record<string, unknown>) => void;
  gtag?: (...args: unknown[]) => void;
}