import React from "react";
import { reloadPersonalizationPreference } from "@/lib/adsense";

type ConsentState = {
  necessary: boolean;
  analytics: boolean;
  adsPersonalization: boolean;
};

const STORAGE_KEY = "fcc_cookie_consent_v1";

function loadConsent(): ConsentState | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function saveConsent(consent: ConsentState) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
  } catch {
    // ignore
  }
}

export default function CookieConsent() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [showPanel, setShowPanel] = React.useState(false);
  const [consent, setConsent] = React.useState<ConsentState>({
    necessary: true,
    analytics: false,
    adsPersonalization: false,
  });

  React.useEffect(() => {
    const existing = loadConsent();
    if (!existing) {
      setIsOpen(true);
      setShowPanel(true);
    } else {
      setConsent(existing);
    }
  }, []);

  const acceptAll = () => {
    const newConsent: ConsentState = {
      necessary: true,
      analytics: true,
      adsPersonalization: true,
    };
    setConsent(newConsent);
    saveConsent(newConsent);
    setShowPanel(false);
    reloadPersonalizationPreference();
  };

  const rejectAll = () => {
    const newConsent: ConsentState = {
      necessary: true,
      analytics: false,
      adsPersonalization: false,
    };
    setConsent(newConsent);
    saveConsent(newConsent);
    setShowPanel(false);
    reloadPersonalizationPreference();
  };

  const savePreferences = () => {
    const newConsent: ConsentState = {
      necessary: true,
      analytics: consent.analytics,
      adsPersonalization: consent.adsPersonalization,
    };
    setConsent(newConsent);
    saveConsent(newConsent);
    setShowPanel(false);
    reloadPersonalizationPreference();
  };

  const openManager = () => {
    setIsOpen(true);
    setShowPanel(true);
  };

  // Expose a lightweight manager button so users can revisit preferences
  return (
    <>
      {isOpen && showPanel && (
        <div className="fixed inset-x-0 bottom-0 z-[60] px-4 pb-4">
          <div className="max-w-5xl mx-auto bg-white border border-gray-200 shadow-xl rounded-2xl p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
              <div className="sm:max-w-3xl">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">We value your privacy</h3>
                <p className="text-sm text-gray-600">
                  We use cookies to enhance your browsing experience, analyze site traffic, and, with your
                  consent, personalize ads. You can manage your preferences below. See our
                  <a href="/privacy-policy" className="text-[#E476CD] font-medium ml-1">Privacy Policy</a>.
                </p>
              </div>
              <div className="flex items-center gap-2 sm:self-start">
                <button
                  onClick={rejectAll}
                  className="px-4 py-2 rounded-full border border-gray-300 text-gray-700 text-sm hover:bg-gray-50"
                >
                  Reject non-essential
                </button>
                <button
                  onClick={acceptAll}
                  className="px-4 py-2 rounded-full bg-[#E476CD] text-white text-sm hover:opacity-90"
                >
                  Accept all
                </button>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="rounded-lg border border-gray-200 p-3">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-900">Necessary</p>
                    <p className="text-xs text-gray-600 mt-1">Required for core site functionality. Always on.</p>
                  </div>
                  <input type="checkbox" checked readOnly className="h-4 w-4" />
                </div>
              </div>
              <div className="rounded-lg border border-gray-200 p-3">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-900">Analytics</p>
                    <p className="text-xs text-gray-600 mt-1">Helps us understand usage to improve the site.</p>
                  </div>
                  <input
                    type="checkbox"
                    className="h-4 w-4"
                    checked={consent.analytics}
                    onChange={(e) => setConsent((c) => ({ ...c, analytics: e.target.checked }))}
                  />
                </div>
              </div>
              <div className="rounded-lg border border-gray-200 p-3">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-900">Ads personalization</p>
                    <p className="text-xs text-gray-600 mt-1">Allow personalized ads from Google on our site.</p>
                  </div>
                  <input
                    type="checkbox"
                    className="h-4 w-4"
                    checked={consent.adsPersonalization}
                    onChange={(e) => setConsent((c) => ({ ...c, adsPersonalization: e.target.checked }))}
                  />
                </div>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-end gap-2">
              <button
                onClick={() => setShowPanel(false)}
                className="px-4 py-2 rounded-full border border-gray-300 text-gray-700 text-sm hover:bg-gray-50"
              >
                Close
              </button>
              <button
                onClick={savePreferences}
                className="px-4 py-2 rounded-full bg-gray-900 text-white text-sm hover:opacity-90"
              >
                Save preferences
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating manager to reopen preferences */}
      <button
        onClick={openManager}
        className="fixed left-3 bottom-3 z-[59] px-3 py-2 rounded-full border border-gray-200 bg-white text-xs text-gray-700 shadow hover:bg-gray-50"
        aria-label="Cookie preferences"
      >
        Cookie Preferences
      </button>
    </>
  );
}


