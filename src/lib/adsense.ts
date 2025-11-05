declare global {
  interface Window {
    adsbygoogle: any[] & { requestNonPersonalizedAds?: number };
  }
}

const PUBLISHER_ID = "ca-pub-6312347683462417";
const CONSENT_KEY = "fcc_cookie_consent_v1";

function getAdsConsent(): { adsPersonalization: boolean } {
  try {
    const raw = localStorage.getItem(CONSENT_KEY);
    if (!raw) return { adsPersonalization: false };
    const parsed = JSON.parse(raw);
    return { adsPersonalization: !!parsed.adsPersonalization };
  } catch {
    return { adsPersonalization: false };
  }
}

let scriptInjected = false;

export function ensureAdSenseLoaded() {
  if (scriptInjected) return;

  const { adsPersonalization } = getAdsConsent();
  window.adsbygoogle = window.adsbygoogle || [];
  window.adsbygoogle.requestNonPersonalizedAds = adsPersonalization ? 0 : 1;

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${encodeURIComponent(
    PUBLISHER_ID
  )}`;
  script.crossOrigin = "anonymous";
  document.head.appendChild(script);
  scriptInjected = true;
}

export function reloadPersonalizationPreference() {
  // Update NPA flag for future ad requests
  const { adsPersonalization } = getAdsConsent();
  window.adsbygoogle = window.adsbygoogle || [];
  window.adsbygoogle.requestNonPersonalizedAds = adsPersonalization ? 0 : 1;
}


