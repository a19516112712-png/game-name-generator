import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { webPageSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  alternates: { canonical: "https://toppicksbase.com/contact" },
  title: "Contact Us — Game Name Generator Hub",
  description: "Get in touch with Game Name Generator Hub for support, business inquiries, suggestions, and partnerships.",
};

export default function ContactPage() {
  return (
    <article className="mx-auto max-w-3xl">
      <h1 className="mb-2 text-4xl font-extrabold">Contact Us</h1>
      <p className="mb-8 text-sm text-gray-500">Last Updated: June 19, 2026</p>
      <section className="mb-8 space-y-4 leading-relaxed text-gray-300">
        <h2 className="text-2xl font-bold text-white">Get In Touch</h2>
        <p>We are here to help. Whether you have questions about our name generators, need support, want to suggest features, or are interested in business partnerships — we would love to hear from you.</p>
      </section>
      <section className="mb-8 space-y-4 leading-relaxed text-gray-300">
        <h2 className="text-2xl font-bold text-white">Contact Methods</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-gray-800 bg-gray-900/50 p-6">
            <h3 className="mb-2 text-lg font-semibold text-white">General Support</h3>
            <p className="text-sm text-gray-400">Questions about using our name generators or general inquiries. Response time: within 24 hours.</p>
          </div>
          <div className="rounded-xl border border-gray-800 bg-gray-900/50 p-6">
            <h3 className="mb-2 text-lg font-semibold text-white">Business Inquiries</h3>
            <p className="text-sm text-gray-400">Advertising opportunities, partnerships, and licensing. Response time: within 48 hours.</p>
          </div>
          <div className="rounded-xl border border-gray-800 bg-gray-900/50 p-6">
            <h3 className="mb-2 text-lg font-semibold text-white">Content Corrections</h3>
            <p className="text-sm text-gray-400">Report errors in our naming guides or generated content. Response time: within 72 hours.</p>
          </div>
          <div className="rounded-xl border border-gray-800 bg-gray-900/50 p-6">
            <h3 className="mb-2 text-lg font-semibold text-white">Suggestions</h3>
            <p className="text-sm text-gray-400">Ideas for new generator categories or features. Response time: within 1 week.</p>
          </div>
        </div>
      </section>
      <section className="mb-8 space-y-4 leading-relaxed text-gray-300">
        <h2 className="text-2xl font-bold text-white">Before You Contact Us</h2>
        <p>You may find immediate answers in our <Link href="/faq" className="text-blue-400 underline hover:text-blue-300">FAQ</Link>. Also see our <Link href="/privacy-policy" className="text-blue-400 underline hover:text-blue-300">Privacy Policy</Link> and <Link href="/terms" className="text-blue-400 underline hover:text-blue-300">Terms of Service</Link>.</p>
      </section>
      <section className="mb-8 space-y-4 leading-relaxed text-gray-300">
        <h2 className="text-2xl font-bold text-white">Response Expectations</h2>
        <p>We strive to respond to all legitimate inquiries within the timeframes listed above. During high-volume periods, response times may be slightly longer. Spam, solicitation, and messages unrelated to our services will not receive a response.</p>
      </section>
      <JsonLd data={webPageSchema("Contact Us — Game Name Generator Hub", "Get in touch with Game Name Generator Hub for support, business inquiries, and suggestions.", "https://toppicksbase.com/contact")} />
      <JsonLd data={breadcrumbSchema([{ name: "Home", url: "https://toppicksbase.com/" }, { name: "Contact Us", url: "https://toppicksbase.com/contact" }])} />
    </article>
  );
}
