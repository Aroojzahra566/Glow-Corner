"use client";

import { useState, useRef } from "react";
import {
  AnnouncementBar,
  BrandHeader,
  Nav,
  Footer,
  FadeInSection,
  Button,
} from "@/components";

export default function AccountPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [skinType, setSkinType] = useState("");
  const [newsletter, setNewsletter] = useState(true);
  const [glowTips, setGlowTips] = useState(true);
  const [preview, setPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !file.type.startsWith("image/")) return;
    if (preview) URL.revokeObjectURL(preview);
    setPreview(URL.createObjectURL(file));
  };

  const handleRemovePhoto = () => {
    if (preview) URL.revokeObjectURL(preview);
    setPreview(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  return (
    <>
      <AnnouncementBar />
      <BrandHeader />
      <Nav />

      <main className="min-h-screen bg-[#F5E8E2]">
        <section className="border-b border-[#E8C9BD]/50 bg-[#E8C9BD] py-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FadeInSection>
              <h1 className="text-3xl font-semibold text-[#916B61] md:text-4xl">
                My Profile
              </h1>
              <p className="mt-2 text-[#916B61]/90">
                Manage your account and preferences.
              </p>
            </FadeInSection>
          </div>
        </section>

        <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="rounded-2xl border border-[#b38080]/30 bg-[#FEF9F6] p-6 shadow-sm md:p-8">
              {/* File uploader — centered above name */}
              <div className="mb-8 flex flex-col items-center">
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                  id="profile-upload"
                />
                <label
                  htmlFor="profile-upload"
                  className="flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-[#b38080]/50 bg-[#E8C9BD]/20 p-8 transition-colors hover:border-[#C79A8B] hover:bg-[#E8C9BD]/30 w-full max-w-xs min-h-[160px]"
                >
                  {preview ? (
                    <div className="relative h-28 w-28 overflow-hidden rounded-full border-2 border-[#E8C9BD]">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={preview} alt="Preview" className="h-full w-full object-cover" />
                    </div>
                  ) : (
                    <>
                      <svg className="mb-2 h-12 w-12 text-[#916B61]/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="text-sm text-[#916B61]/80">Click to upload a photo</span>
                    </>
                  )}
                </label>
                {preview && (
                  <button
                    type="button"
                    onClick={handleRemovePhoto}
                    className="mt-3 text-sm text-[#916B61]/70 underline hover:text-[#916B61]"
                  >
                    Remove photo
                  </button>
                )}
              </div>

              {/* Name & Email & Skin type */}
              <div className="space-y-6">
                <div>
                  <label htmlFor="profile-name" className="mb-2 block text-sm font-medium text-[#916B61]">
                    Name
                  </label>
                  <input
                    id="profile-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className="w-full rounded-xl border border-[#E8C9BD] bg-white px-4 py-3 text-[#916B61] placeholder-[#916B61]/50 focus:border-[#C79A8B] focus:outline-none focus:ring-2 focus:ring-[#C79A8B]/30"
                  />
                </div>
                <div>
                  <label htmlFor="profile-email" className="mb-2 block text-sm font-medium text-[#916B61]">
                    Email
                  </label>
                  <input
                    id="profile-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-[#E8C9BD] bg-white px-4 py-3 text-[#916B61] placeholder-[#916B61]/50 focus:border-[#C79A8B] focus:outline-none focus:ring-2 focus:ring-[#C79A8B]/30"
                  />
                </div>
                <div>
                  <label htmlFor="skin-type" className="mb-2 block text-sm font-medium text-[#916B61]">
                    Skin Type
                  </label>
                  <select
                    id="skin-type"
                    value={skinType}
                    onChange={(e) => setSkinType(e.target.value)}
                    className="w-full rounded-xl border border-[#E8C9BD] bg-white px-4 py-3 text-[#916B61] focus:border-[#C79A8B] focus:outline-none focus:ring-2 focus:ring-[#C79A8B]/30"
                  >
                    <option value="">Select your skin type</option>
                    <option value="dry">Dry</option>
                    <option value="oily">Oily</option>
                    <option value="combination">Combination</option>
                    <option value="sensitive">Sensitive</option>
                    <option value="normal">Normal</option>
                  </select>
                </div>
              </div>

              {/* Preferences */}
              <div className="mt-8 border-t border-[#E8C9BD]/50 pt-8">
                <h2 className="mb-4 text-lg font-semibold text-[#916B61]">
                  Preferences
                </h2>
                <div className="space-y-3">
                  <label className="flex cursor-pointer items-center gap-3">
                    <input
                      type="checkbox"
                      checked={newsletter}
                      onChange={(e) => setNewsletter(e.target.checked)}
                      className="h-4 w-4 rounded border-[#b38080]/50 text-[#C79A8B] focus:ring-[#C79A8B]/50"
                    />
                    <span className="text-[#916B61]">Send me news and offers</span>
                  </label>
                  <label className="flex cursor-pointer items-center gap-3">
                    <input
                      type="checkbox"
                      checked={glowTips}
                      onChange={(e) => setGlowTips(e.target.checked)}
                      className="h-4 w-4 rounded border-[#b38080]/50 text-[#C79A8B] focus:ring-[#C79A8B]/50"
                    />
                    <span className="text-[#916B61]">Weekly glow tips and skincare advice</span>
                  </label>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button type="button">Save Changes</Button>
                <Button href="/shop" variant="outline">
                  Continue Shopping
                </Button>
              </div>
            </div>
          </FadeInSection>
        </div>
      </main>

      <Footer />
    </>
  );
}
