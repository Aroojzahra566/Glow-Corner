"use client";

import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b-2 border-[#b38080] bg-[#F7EBE5]/95 backdrop-blur-sm">
      <nav className="relative mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-8">
        <div className="hidden flex-1 md:block" aria-hidden />
        <ul className="hidden items-center justify-center gap-8 md:flex md:flex-1">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="text-[#916B61] transition-colors hover:text-[#C79A8B]"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex flex-1 justify-end gap-3">
          <Link
            href="/cart"
            aria-label="Cart"
            className="flex items-center justify-center rounded-full bg-[#E8C9BD]/50 p-2.5 text-[#916B61] shadow-sm ring-1 ring-[#b38080]/20 transition-all duration-200 hover:scale-110 hover:bg-[#C79A8B]/40 hover:shadow-md hover:ring-[#C79A8B]/50"
          >
            <CartIcon />
          </Link>
          <Link
            href="/account"
            aria-label="Profile"
            className="flex items-center justify-center rounded-full bg-[#E8C9BD]/50 p-2.5 text-[#916B61] shadow-sm ring-1 ring-[#b38080]/20 transition-all duration-200 hover:scale-110 hover:bg-[#C79A8B]/40 hover:shadow-md hover:ring-[#C79A8B]/50"
          >
            <AccountIcon />
          </Link>
        </div>
      </nav>
    </header>
  );
}

function AccountIcon() {
  return (
    <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
      />
    </svg>
  );
}

function CartIcon() {
  return (
    <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
      />
    </svg>
  );
}
