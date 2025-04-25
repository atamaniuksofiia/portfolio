"use client";

import Link from "next/link"; // Використовуємо Link з Next.js
import { useState, useEffect } from "react";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation"; // Використовуємо usePathname з Next.js

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
];

export default function Navbar() {
  const pathname = usePathname(); // Використовуємо usePathname з Next.js
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-5xl mx-auto flex justify-between items-center px-4">
        <Link
          href="/"
          className="font-heading text-xl font-bold text-foreground"
        >
          Sofiia Atamaniuk
        </Link>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex gap-6">
            {navItems.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`font-medium text-sm animated-underline ${
                    pathname === href
                      ? "text-primary after:w-full"
                      : "text-foreground/80 hover:text-foreground"
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <ThemeSwitcher />
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border py-4 animate-fade-in">
          <ul className="flex flex-col items-center gap-4">
            {navItems.map(({ label, href }) => (
              <li key={href} className="w-full">
                <Link
                  href={href}
                  className={`block py-2 text-center font-medium ${
                    pathname === href
                      ? "text-primary"
                      : "text-foreground/80 hover:text-foreground"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
            <li className="pt-2 border-t border-border w-full flex justify-center">
              <ThemeSwitcher />
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
