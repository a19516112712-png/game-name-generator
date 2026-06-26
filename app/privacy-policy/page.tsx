import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { webPageSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Privacy Policy — Game Name Generator Hub",
  alternates: { canonical: "https://toppicksbase.com/privacy-policy" },
  openGraph: { title: "Privacy Policy — Game Name Generator Hub", type: "website" },
  twitter: { title: "Privacy Policy — Game Name Generator Hub" },
  description:
    "Privacy Policy for Game Name Generator Hub. Learn how we handle your data.",
};

export default function PrivacyPage() {
  return (
    <article className="mx-auto max-w-3xl">
      <h1 className="mb-6 text-4xl font-extrabold">Privacy Policy</h1>
      <p className="mb-8 text-sm text-gray-500">Last Updated: June 19, 2026</p>
      <p className="mb-4 text-sm text-gray-500">Last updated: June 2026</p>

      <div className="space-y-8 leading-relaxed text-gray-300">
        <section>
          <h2 className="mb-3 text-xl font-semibold text-white">
            1. Information We Collect
          </h2>
          <p>
            Game Name Generator Hub does not require user accounts and does not
            collect personal information. We do not use cookies for tracking
            purposes. Our servers may log standard technical information such as
            IP addresses and browser types for security and analytics purposes,
            but this data is anonymized and not linked to individual users.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-semibold text-white">
            2. How We Use Information
          </h2>
          <p>
            Any anonymized usage data collected helps us understand which
            generators are most popular and how to improve our service. We do
            not sell, trade, or share your data with third parties.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-semibold text-white">
            3. Cookies
          </h2>
          <p>
            Our website may use essential cookies required for proper
            functioning. We do not use advertising cookies, tracking cookies, or
            third-party analytics cookies that identify individual users.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-semibold text-white">
            4. Third-Party Services
          </h2>
          <p>
            We may use third-party services such as Google AdSense for
            advertising. These services may use their own cookies and data
            collection practices. Please refer to their respective privacy
            policies for more information:
          </p>
          <ul className="mt-2 list-inside list-disc space-y-1">
            <li>Google AdSense: https://policies.google.com/privacy</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-semibold text-white">
            5. Children&apos;s Privacy
          </h2>
          <p>
            Our service is not directed at children under 13. We do not
            knowingly collect personal information from children under 13. If
            you believe a child has provided us with personal information,
            please contact us immediately.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-semibold text-white">
            6. Changes to This Policy
          </h2>
          <p>
            We may update this Privacy Policy from time to time. Changes will be
            posted on this page with an updated revision date. We encourage
            users to review this policy periodically.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-semibold text-white">
            7. Contact Us
          </h2>
          <p>
            If you have any questions about this Privacy Policy, please contact
            us at privacy@toppicksbase.com.
          </p>
        </section>
      </div>

      <JsonLd data={webPageSchema(
        "Privacy Policy — Game Name Generator Hub",
        "Privacy Policy for Game Name Generator Hub. Learn how we handle your data.",
        `https://toppicksbase.com/privacy-policy`
      )} />
      <JsonLd data={breadcrumbSchema([
        { name: "Home", url: "https://toppicksbase.com" },
        { name: "Privacy Policy", url: `https://toppicksbase.com/privacy-policy` }
      ])} />
    </article>
  );
}
