"use client";

import { useEffect, useState } from "react";
import Cookies from "js-cookie";

// Define cookie preferences type
interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
}

const CookieConsent = () => {
  const [showDrawer, setShowDrawer] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true, // Always required
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const consent = Cookies.get("cookieConsent");
    if (!consent) {
      setShowDrawer(true);
    } else {
      try {
        const parsedConsent: CookiePreferences = JSON.parse(consent);
        setPreferences(parsedConsent);
      } catch (error) {
        console.error("Error parsing cookie consent:", error);
      }
    }
  }, []);

  const handleAcceptAll = () => {
    const consent: CookiePreferences = {
      essential: true,
      analytics: true,
      marketing: true,
    };
    Cookies.set("cookieConsent", JSON.stringify(consent), { expires: 365 });
    setPreferences(consent);
    setShowDrawer(false);
  };

  const handleSavePreferences = () => {
    Cookies.set("cookieConsent", JSON.stringify(preferences), { expires: 365 });
    setShowDrawer(false);
    setShowModal(false);
  };

  const togglePreference = (type: keyof CookiePreferences) => {
    setPreferences((prev) => ({ ...prev, [type]: !prev[type] }));
  };

  return (
    <>
      {/* Cookie Banner (Full Width at Bottom) */}
      {showDrawer && (
      <div className="fixed inset-0 bg-black bg-opacity-70 z-50">
        <div
          className={`fixed bottom-0 left-0 w-full bg-white text-white p-4 flex flex-col md:flex-row justify-between items-center transition-transform duration-500 ${
            showDrawer ? "translate-y-0" : "translate-y-full"
          } z-50 w-full`}
        >
          <p className="text-sm text-black text-center md:text-left">
            We use cookies to improve your experience. By clicking &quot;Accept
            All Cookies&quot;, you agree to the storing of cookies on your
            device.
          </p>
          <div className="flex space-x-4 mt-3 md:mt-0">
            <button
              onClick={() => {
                setShowModal(true);
              }}
              className="text-blue-950 underline hover:text-blue-900"
            >
              Manage Cookies
            </button>
            <button
              onClick={handleAcceptAll}
              className="bg-blue-950 px-4 py-2 rounded"
            >
              Accept All Cookies
            </button>
          </div>
        </div>
      </div>
    )}

      {/* Overlay for closing drawer */}
      {showDrawer && (
        <div
          className="fixed inset-0 bg-transparent bg-opacity-30"
          onClick={() => {
            setShowDrawer(false);
          }}
        />
      )}

      {/* Manage Cookies Modal (Centered) */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
          <div className="bg-white text-black p-6 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-lg font-bold mb-4">
              Manage Cookie Preferences
            </h2>

            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span>Essential Cookies (Required)</span>
                <input
                  type="checkbox"
                  checked
                  disabled
                  className="cursor-not-allowed opacity-50"
                />
              </div>
              <div className="flex justify-between items-center">
                <span>Analytics Cookies</span>
                <input
                  type="checkbox"
                  checked={preferences.analytics}
                  onChange={() => {
                    togglePreference("analytics");
                  }}
                  className="cursor-pointer accent-blue-900"
                />
              </div>
              <div className="flex justify-between items-center">
                <span>Marketing Cookies</span>
                <input
                  type="checkbox"
                  checked={preferences.marketing}
                  onChange={() => {
                    togglePreference("marketing");
                  }}
                  className="cursor-pointer accent-blue-900"
                />
              </div>
            </div>

            <div className="flex justify-end space-x-4 mt-6">
              <button
                onClick={() => {
                  setShowModal(false);
                }}
                className="text-blue-950 hover:text-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleSavePreferences}
                className="bg-blue-950 text-white px-4 py-2 rounded"
              >
                Save Preferences
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieConsent;