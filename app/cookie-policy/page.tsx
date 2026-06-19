import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: { canonical: "https://toppicksbase.com/cookie-policy" },
  title: "Cookie Policy — Game Name Generator Hub",
  description: "Learn how Game Name Generator Hub uses cookies, local storage, and similar technologies.",
};

export default function CookiePolicyPage() {
  return (
    <article className="mx-auto max-w-3xl">
      <h1 className="mb-2 text-4xl font-extrabold">Cookie Policy</h1>
      <p className="mb-8 text-sm text-gray-500">Last Updated: June 19, 2026</p>
      <section className="mb-8 space-y-4 leading-relaxed text-gray-300">
        <h2 className="text-2xl font-bold text-white">1. What Are Cookies</h2>
        <p>Cookies are small text files stored on your device when you visit a website. They help websites remember your preferences, understand usage, and deliver relevant content.</p>
      </section>
      <section className="mb-8 space-y-4 leading-relaxed text-gray-300">
        <h2 className="text-2xl font-bold text-white">2. How We Use Cookies</h2>
        <ul className="list-inside list-disc space-y-2">
          <li><strong className="text-white">Essential Cookies:</strong> Required for the website to function. Enable core functionality like page navigation.</li>
          <li><strong className="text-white">Preference Cookies:</strong> Remember choices you make such as theme preferences.</li>
          <li><strong className="text-white">Analytics Cookies:</strong> Help us understand how visitors interact with our website to improve it.</li>
          <li><strong className="text-white">Advertising Cookies:</strong> When enabled, help deliver relevant advertisements based on your interests.</li>
        </ul>
      </section>
      <section className="mb-8 space-y-4 leading-relaxed text-gray-300">
        <h2 className="text-2xl font-bold text-white">3. Third-Party Cookies</h2>
        <p>Some cookies are set by third-party services including Google Analytics and Google AdSense (when enabled). Learn more at <a href="https://policies.google.com/technologies/cookies" className="text-blue-400 underline hover:text-blue-300" rel="noopener noreferrer" target="_blank">Google&apos;s Cookie Policy</a>.</p>
      </section>
      <section className="mb-8 space-y-4 leading-relaxed text-gray-300">
        <h2 className="text-2xl font-bold text-white">4. Local Storage</h2>
        <p>Our website may use browser local storage to remember your preferences such as theme settings and generator preferences. This data remains on your device.</p>
      </section>
      <section className="mb-8 space-y-4 leading-relaxed text-gray-300">
        <h2 className="text-2xl font-bold text-white">5. Managing Cookies</h2>
        <p>You can control cookies through your browser settings. Most browsers allow you to block or delete cookies. You can also manage Google advertising cookies at <a href="https://adssettings.google.com" className="text-blue-400 underline hover:text-blue-300" rel="noopener noreferrer" target="_blank">Google Ad Settings</a>. Note that disabling cookies may affect website functionality.</p>
      </section>
      <section className="mb-8 space-y-4 leading-relaxed text-gray-300">
        <h2 className="text-2xl font-bold text-white">6. Changes to This Policy</h2>
        <p>We may update this Cookie Policy periodically. The Last Updated date indicates the most recent revision. We encourage periodic review of this policy.</p>
      </section>
      <section className="mb-8 space-y-4 leading-relaxed text-gray-300">
        <h2 className="text-2xl font-bold text-white">7. Contact Us</h2>
        <p>If you have questions about this Cookie Policy, please visit our <Link href="/contact" className="text-blue-400 underline hover:text-blue-300">Contact page</Link>.</p>
      </section>
    </article>
  );
}
