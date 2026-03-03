"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "glow-welcome-modal-closed";
const SOFT_BLUSH = "#E8C9BD";
const WARM_MAUVE = "#b38080";

export function WelcomeModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const closed = sessionStorage.getItem(STORAGE_KEY);
    if (closed) return;
    const timer = setTimeout(() => setIsOpen(true), 800);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    if (typeof window !== "undefined") sessionStorage.setItem(STORAGE_KEY, "true");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleClose();
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="welcome-modal-title"
    >
      <div
        className="absolute inset-0 bg-black/30 backdrop-blur-sm"
        onClick={handleClose}
        aria-hidden
      />
      <div
        className="relative w-full max-w-md overflow-hidden rounded-2xl border-2 border-[#b38080]/40 shadow-xl"
        style={{ backgroundColor: SOFT_BLUSH }}
      >
        <button
          type="button"
          onClick={handleClose}
          aria-label="Close"
          className="absolute right-3 top-3 rounded-full p-1.5 text-[#916B61]/80 transition-colors hover:bg-white/30 hover:text-[#916B61]"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="px-8 pb-8 pt-12">
          <h2
            id="welcome-modal-title"
            className="text-center text-xl font-semibold text-[#916B61] md:text-2xl"
          >
            Get 10% Off Your First Glow Order
          </h2>
          <p className="mt-2 text-center text-sm text-[#916B61]/90">
            Subscribe and save on your first order.
          </p>

          <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              className="w-full rounded-full border border-[#b38080]/50 bg-white/80 px-4 py-2.5 text-sm text-[#916B61] placeholder-[#916B61]/50 focus:border-[#b38080] focus:outline-none focus:ring-2 focus:ring-[#b38080]/30"
              aria-label="Email address"
            />
            <button
              type="submit"
              className="w-full rounded-full px-4 py-2.5 text-sm font-medium text-white shadow-md transition-all hover:opacity-95 hover:shadow-lg"
              style={{ backgroundColor: WARM_MAUVE }}
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
