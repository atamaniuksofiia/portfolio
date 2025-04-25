"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "About", href: "/" },
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/projects" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="w-full border-b border-gray-200 dark:border-gray-700 p-4 mb-6">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        <div className="text-xl font-bold text-primary">Welcome</div>
        <ul className="hidden md:flex gap-6">
          {navItems.map(({ label, href }) => (
            <li key={href}>
              <Link
                href={href}
                className={`text-sm hover:underline ${
                  pathname === href ? "font-semibold underline" : ""
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
