import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { webPageSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Contact Us — Game Name Generator Hub",
  description:
    "Get in touch with Game Name Generator Hub. We welcome feedback, suggestions, and partnership inquiries.",
};

export default function ContactPage() {
  return (
    <article className="mx-auto max-w-3xl">
      <h1 className="mb-6 text-4xl font-extrabold">Contact Us</h1>

      <p className="mb-8 leading-relaxed text-gray-300">
        We&apos;d love to hear from you! Whether you have a suggestion for a new
        name generator category, found a bug, or want to discuss a partnership
        opportunity — drop us a message.
      </p>

      <div className="mb-8 rounded-2xl border border-gray-800 bg-gray-900 p-6">
        <h2 className="mb-4 text-xl font-semibold">Email Us</h2>
        <p className="text-gray-300">
          <strong className="text-white">General Inquiries:</strong>{" "}
          hello@game-name-generator-hub.com
        </p>
        <p className="mt-2 text-gray-300">
          <strong className="text-white">Partnerships:</strong>{" "}
          partners@game-name-generator-hub.com
        </p>
      </div>

      <div className="rounded-2xl border border-gray-800 bg-gray-900 p-6">
        <h2 className="mb-4 text-xl font-semibold">Response Time</h2>
        <p className="leading-relaxed text-gray-300">
          We typically respond within 24-48 hours on business days. For urgent
          matters, please include &quot;URGENT&quot; in your subject line.
        </p>
      </div>

      <JsonLd data={webPageSchema(
        "Contact Us — Game Name Generator Hub",
        "Get in touch with Game Name Generator Hub. We welcome feedback, suggestions, and partnership inquiries.",
        `https://game-name-generator-hub.com/contact`
      )} />
      <JsonLd data={breadcrumbSchema([
        { name: "Home", url: "https://game-name-generator-hub.com" },
        { name: "Contact Us", url: `https://game-name-generator-hub.com/contact` }
      ])} />
    </article>
  );
}
