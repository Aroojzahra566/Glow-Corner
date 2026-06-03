"use client";

import { useState } from "react";
import {
  AnnouncementBar,
  BrandHeader,
  Nav,
  Footer,
  FadeInSection,
} from "@/components";

const faqs = [
  {
    question: "How do I choose the right products for my skin type?",
    answer:
      "We recommend starting with our skin quiz or reaching out to our team. Share your concerns—dryness, oiliness, sensitivity, or aging—and we’ll suggest a routine that fits you. All our products are labeled by skin type to make it easy.",
  },
  {
    question: "What is your return or exchange policy?",
    answer:
      "We want you to love your purchase. If you’re not satisfied, you can return unopened items within 30 days for a full refund. Opened products may be eligible for exchange—contact us and we’ll help you find the right match.",
  },
  {
    question: "Are Glow Corner products cruelty-free and clean?",
    answer:
      "Yes. We are fully cruelty-free and never test on animals. Our formulas are clean, with no parabens, sulfates, or unnecessary additives. We use natural and dermatologist-tested ingredients you can trust.",
  },
  {
    question: "How long does shipping take?",
    answer:
      "Orders typically ship within 1–2 business days. Domestic delivery is 3–5 business days. We’ll send tracking as soon as your order is on its way. Free shipping is available on orders over $50.",
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <AnnouncementBar />
      <BrandHeader />
      <Nav />

      <main className="min-h-screen bg-[#FEF9F6]">
        {/* Banner */}
        <section className="border-b border-[#E8C9BD]/50 bg-[#E8C9BD] py-20">
          <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <FadeInSection>
              <h1 className="text-4xl font-semibold text-[#916B61] md:text-5xl lg:text-6xl">
                Let&apos;s Connect & Glow Together
              </h1>
              <p className="mx-auto mt-4 max-w-xl text-lg text-[#916B61]/90">
                We&apos;re here to help you with your skincare journey.
              </p>
            </FadeInSection>
          </div>
        </section>

        {/* Form + Customer Care */}
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact form */}
            <FadeInSection>
              <div className="rounded-2xl bg-[#FEF9F6] p-8 shadow-md">
                <h2 className="mb-6 text-xl font-semibold text-[#916B61]">
                  Send us a message
                </h2>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                  className="space-y-5"
                >
                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-[#916B61]">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      className="input-field w-full rounded-xl border border-[#E8C9BD] bg-[#FEF9F6] px-4 py-3 text-[#916B61] placeholder-[#916B61]/50 transition-all duration-200 focus:border-[#C79A8B] focus:outline-none focus:ring-2 focus:ring-[#C79A8B]/40"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-[#916B61]">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      className="input-field w-full rounded-xl border border-[#E8C9BD] bg-[#FEF9F6] px-4 py-3 text-[#916B61] placeholder-[#916B61]/50 transition-all duration-200 focus:border-[#C79A8B] focus:outline-none focus:ring-2 focus:ring-[#C79A8B]/40"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="mb-1.5 block text-sm font-medium text-[#916B61]">
                      Subject
                    </label>
                    <input
                      id="subject"
                      type="text"
                      className="input-field w-full rounded-xl border border-[#E8C9BD] bg-[#FEF9F6] px-4 py-3 text-[#916B61] placeholder-[#916B61]/50 transition-all duration-200 focus:border-[#C79A8B] focus:outline-none focus:ring-2 focus:ring-[#C79A8B]/40"
                      placeholder="How can we help?"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-[#916B61]">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      className="input-field w-full rounded-xl border border-[#E8C9BD] bg-[#FEF9F6] px-4 py-3 text-[#916B61] placeholder-[#916B61]/50 transition-all duration-200 focus:border-[#C79A8B] focus:outline-none focus:ring-2 focus:ring-[#C79A8B]/40"
                      placeholder="Your message..."
                    />
                  </div>
                  {submitted ? (
                    <p className="text-[#916B61]">Thank you! We&apos;ll be in touch soon.</p>
                  ) : (
                    <button
                      type="submit"
                      className="submit-btn inline-flex items-center justify-center rounded-full bg-[#C79A8B] px-8 py-3.5 text-sm font-medium text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#b88a7a] hover:shadow-lg hover:shadow-[#C79A8B]/30"
                    >
                      Send Message
                    </button>
                  )}
                </form>
              </div>
            </FadeInSection>

            {/* Customer Care */}
            <FadeInSection delay={80}>
              <div className="rounded-2xl bg-[#F5E8E2] p-8 shadow-md">
                <h2 className="mb-6 text-xl font-semibold text-[#916B61]">
                  Customer Care
                </h2>
                <div className="space-y-5">
                  <div>
                    <p className="mb-1 text-sm font-medium text-[#916B61]">Email</p>
                    <a
                      href="mailto:hello@glowcorner.com"
                      className="text-[#916B61]/90 transition-colors hover:text-[#C79A8B]"
                    >
                      hello@glowcorner.com
                    </a>
                  </div>
                  <div>
                    <p className="mb-1 text-sm font-medium text-[#916B61]">Phone</p>
                    <a
                      href="tel:+15551234567"
                      className="text-[#916B61]/90 transition-colors hover:text-[#C79A8B]"
                    >
                      +1 (555) 123-4567
                    </a>
                  </div>
                  <div className="rounded-xl bg-[#FEF9F6] p-4">
                    <p className="text-sm text-[#916B61]/90">
                      We usually reply within 24 hours.
                    </p>
                  </div>
                  <div>
                    <p className="mb-3 text-sm font-medium text-[#916B61]">Follow us</p>
                    <div className="flex gap-3">
                      <a
                        href="#"
                        aria-label="Instagram"
                        className="social-icon rounded-full p-2.5 text-[#916B61] transition-all duration-200 hover:bg-[#E8C9BD]/50 hover:text-[#916B61]"
                      >
                        <InstagramIcon />
                      </a>
                      <a
                        href="#"
                        aria-label="Facebook"
                        className="social-icon rounded-full p-2.5 text-[#916B61] transition-all duration-200 hover:bg-[#E8C9BD]/50 hover:text-[#916B61]"
                      >
                        <FacebookIcon />
                      </a>
                      <a
                        href="#"
                        aria-label="Pinterest"
                        className="social-icon rounded-full p-2.5 text-[#916B61] transition-all duration-200 hover:bg-[#E8C9BD]/50 hover:text-[#916B61]"
                      >
                        <PinterestIcon />
                      </a>
                    </div>
                  </div>
                  <blockquote className="border-l-4 border-[#C79A8B] pl-4 italic text-[#916B61]/90">
                    &ldquo;Your skin tells a story. Let it be one of care, confidence, and glow.&rdquo;
                  </blockquote>
                </div>
              </div>
            </FadeInSection>
          </div>

          {/* FAQ */}
          <FadeInSection delay={120} className="mt-20">
            <h2 className="mb-8 text-2xl font-semibold text-[#916B61]">
              Frequently Asked Questions
            </h2>
            <div className="space-y-2">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="overflow-hidden rounded-2xl border border-[#E8C9BD]/50 bg-[#FEF9F6] shadow-sm"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="flex w-full items-center justify-between px-6 py-4 text-left text-sm font-medium text-[#916B61] transition-colors hover:bg-[#F5E8E2]/50"
                  >
                    {faq.question}
                    <span
                      className={`ml-2 shrink-0 transition-transform duration-300 ${
                        openFaq === i ? "rotate-180" : ""
                      }`}
                    >
                      <ChevronIcon />
                    </span>
                  </button>
                  <div
                    className="grid transition-all duration-300 ease-in-out"
                    style={{
                      gridTemplateRows: openFaq === i ? "1fr" : "0fr",
                    }}
                  >
                    <div className="overflow-hidden">
                      <p className="border-t border-[#E8C9BD]/30 px-6 py-4 text-sm leading-relaxed text-[#916B61]/90">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </FadeInSection>
        </div>
      </main>

      <Footer />
    </>
  );
}

function ChevronIcon() {
  return (
    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function PinterestIcon() {
  return (
    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z" />
    </svg>
  );
}
