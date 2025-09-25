import { useCookieConsent } from "../hooks/useCookieConsent";
import SEO from "../components/SEO";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageTransition from "../components/PageTransition";

export default function TestCookieConsent() {
  const { hasConsented, preferences, revokeConsent } = useCookieConsent();

  return (
    <>
      <SEO
        title="Cookie Consent Test | The Library"
        description="Test page for cookie consent functionality"
      />
      <Header />
      <PageTransition>
        <div className="min-h-screen bg-library-brown-darkest py-20">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-4xl font-display text-library-cream mb-8">
              Cookie Consent Test Page
            </h1>

            <div className="bg-library-brown/50 rounded-xl p-6 space-y-4 border border-library-gold/20">
              <h2 className="text-2xl font-bold text-library-gold mb-4">
                Current Cookie Status
              </h2>

              <div className="space-y-2 text-library-cream">
                <p>
                  <strong>Has Consented:</strong>{" "}
                  <span className={hasConsented ? "text-green-400" : "text-red-400"}>
                    {hasConsented ? "Yes" : "No"}
                  </span>
                </p>

                {preferences && (
                  <>
                    <p>
                      <strong>Necessary Cookies:</strong>{" "}
                      <span className={preferences.necessary ? "text-green-400" : "text-red-400"}>
                        {preferences.necessary ? "Enabled" : "Disabled"}
                      </span>
                    </p>
                    <p>
                      <strong>Analytics Cookies:</strong>{" "}
                      <span className={preferences.analytics ? "text-green-400" : "text-red-400"}>
                        {preferences.analytics ? "Enabled" : "Disabled"}
                      </span>
                    </p>
                    <p>
                      <strong>Consent Timestamp:</strong>{" "}
                      {new Date(preferences.timestamp).toLocaleString()}
                    </p>
                  </>
                )}
              </div>

              {hasConsented && (
                <div className="pt-4 border-t border-library-gold/20">
                  <button
                    onClick={revokeConsent}
                    className="px-6 py-2.5 rounded-lg bg-red-600 hover:bg-red-500 text-white font-medium transition-colors"
                  >
                    Revoke Cookie Consent
                  </button>
                  <p className="text-sm text-library-cream/60 mt-2">
                    This will clear your preferences and reload the page to show the consent banner again.
                  </p>
                </div>
              )}
            </div>

            <div className="mt-8 bg-library-brown/30 rounded-xl p-6 border border-library-gold/10">
              <h3 className="text-xl font-bold text-library-gold mb-3">
                Testing Instructions
              </h3>
              <ol className="list-decimal list-inside space-y-2 text-library-cream/80">
                <li>The cookie consent banner should appear at the bottom of the page after 1.5 seconds if you haven't made a choice yet.</li>
                <li>Click "Accept All" to enable all cookies.</li>
                <li>Click "Necessary Only" to enable only essential cookies.</li>
                <li>Click "Manage Preferences" to customize your cookie settings.</li>
                <li>Your choice is saved in localStorage and persists across page reloads.</li>
                <li>Use the "Revoke Cookie Consent" button above to reset and test again.</li>
                <li>The banner integrates with Google Analytics (when implemented) to respect user choices.</li>
              </ol>
            </div>

            <div className="mt-8 bg-library-brown/30 rounded-xl p-6 border border-library-gold/10">
              <h3 className="text-xl font-bold text-library-gold mb-3">
                Features Implemented
              </h3>
              <ul className="list-disc list-inside space-y-2 text-library-cream/80">
                <li>✅ GDPR/CCPA compliant cookie consent</li>
                <li>✅ Sticky banner at bottom of page</li>
                <li>✅ Accept/Decline options</li>
                <li>✅ Customizable preferences (necessary vs analytics)</li>
                <li>✅ Persistent storage using localStorage</li>
                <li>✅ Mobile responsive design</li>
                <li>✅ Smooth animations with Framer Motion</li>
                <li>✅ Matches site's green (#22c55e) color scheme</li>
                <li>✅ Semi-transparent background with backdrop blur</li>
                <li>✅ Only loads after age verification</li>
                <li>✅ Doesn't interfere with existing modals</li>
                <li>✅ TypeScript typing throughout</li>
              </ul>
            </div>
          </div>
        </div>
      </PageTransition>
      <Footer />
    </>
  );
}