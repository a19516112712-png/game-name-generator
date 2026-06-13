"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/search", label: "Generators" },
  { href: "/character-name-generator", label: "Characters" },
  { href: "/fantasy-city-names", label: "Cities" },
  { href: "/blog", label: "Blog" },
  { href: "/search", label: "Search" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-gray-800">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight hover:text-gray-300 transition"
        >
          Game Name Generator Hub
        </Link>

        {/* Desktop nav */}
        <nav className="hidden gap-1 text-sm sm:flex">
          {links.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href) && link.href !== "/";
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`rounded-lg px-3 py-2 transition ${
                  isActive
                    ? "bg-gray-800 text-white font-medium"
                    : "text-gray-400 hover:text-white hover:bg-gray-800/50"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="sm:hidden rounded-lg p-2 text-gray-400 hover:text-white hover:bg-gray-800"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="border-t border-gray-800 px-4 py-3 sm:hidden">
          <div className="flex flex-col gap-1">
            {links.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href) && link.href !== "/";
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-lg px-3 py-2.5 text-sm transition ${
                    isActive
                      ? "bg-gray-800 text-white font-medium"
                      : "text-gray-400 hover:text-white hover:bg-gray-800/50"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </nav>
      )}
    </header>
  );
}
