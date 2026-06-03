import Link from "next/link";
import { SocialLinks } from "./SocialLinks";

const footerLinks = {
  Shop: [
    { href: "/shop", label: "All Products" },
    { href: "/shop?category=cleanser", label: "Cleansers" },
    { href: "/shop?category=moisturizer", label: "Moisturizers" },
    { href: "/shop?category=serum", label: "Serums" },
  ],
  Company: [
    { href: "/about", label: "Our Story" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ],
  Legal: [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-[#E8C9BD] text-[#916B61]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p
              className="font-serif text-xl font-semibold text-[#916B61]"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            >
              Glow Corner
            </p>
            <p className="mt-2 text-sm opacity-90">
              Soft, premium skincare for natural beauty.
            </p>
            <p className="mt-4 text-sm font-medium">Follow us</p>
            <SocialLinks className="mt-2 flex gap-2" />
          </div>
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="mb-3 font-semibold">{heading}</h4>
              <ul className="space-y-2">
                {links.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-sm transition-colors hover:text-[#C79A8B]"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 border-t border-[#916B61]/20 pt-8 text-center text-sm opacity-80">
          © {new Date().getFullYear()} Glow Corner. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
