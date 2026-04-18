"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navigation = [
  { href: "/", label: "Начало" },
  { href: "/events", label: "Събития" },
  { href: "/offers", label: "Оферти" },
  { href: "/about", label: "За нас" },
  { href: "/contact", label: "Контакти" },
];

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === href : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-primary/10 bg-bg/85 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-3 text-dark-green transition-all duration-200 hover:text-primary"
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-sm font-bold text-white shadow-lg shadow-primary/20">
            FT
          </span>
          <span>
            <span className="block font-display text-xl font-bold leading-none">
              FestiTaste
            </span>
            <span className="block text-xs uppercase tracking-[0.35em] text-dark-green/60">
              Events
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-2 md:flex" aria-label="Основна навигация">
          {navigation.map((item) => {
            const active = isActive(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200 ${
                  active
                    ? "bg-primary text-white shadow-md shadow-primary/20"
                    : "text-dark-green hover:bg-white hover:text-primary"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          aria-label={isOpen ? "Затвори меню" : "Отвори меню"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-primary/15 bg-white text-dark-green shadow-sm transition-all duration-200 hover:border-primary hover:text-primary md:hidden"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {isOpen ? (
        <nav
          className="border-t border-primary/10 bg-white/95 px-4 py-4 md:hidden"
          aria-label="Мобилна навигация"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {navigation.map((item) => {
              const active = isActive(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`rounded-2xl px-4 py-3 text-sm font-semibold transition-all duration-200 ${
                    active
                      ? "bg-primary text-white"
                      : "bg-cream text-dark-green hover:bg-primary/10 hover:text-primary"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
