declare global {
  interface Window {
    adsbygoogle: any[] & { requestNonPersonalizedAds?: number };
  }
}

const PUBLISHER_ID = "ca-pub-6312347683462417";

let scriptInjected = false;

export function ensureAdSenseLoaded() {
  if (scriptInjected) return;

  // Force non-personalized ads to minimize tracking
  window.adsbygoogle = window.adsbygoogle || [];
  window.adsbygoogle.requestNonPersonalizedAds = 1;

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${encodeURIComponent(
    PUBLISHER_ID
  )}`;
  script.crossOrigin = "anonymous";
  document.head.appendChild(script);
  scriptInjected = true;
}



