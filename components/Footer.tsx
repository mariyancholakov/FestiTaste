import Link from "next/link";

const footerLinks = [
  { href: "/events", label: "Събития" },
  { href: "/offers", label: "Оферти" },
  { href: "/about", label: "За нас" },
  { href: "/contact", label: "Контакти" },
];

export default function Footer() {
  return (
    <footer className="border-t border-rust/30 bg-dark text-text-light">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 sm:py-12 lg:grid-cols-[1.4fr_0.8fr_1fr] lg:px-8">
        <div className="space-y-4">
          <p className="font-display text-2xl font-bold sm:text-3xl">FestiTaste Events</p>
          <p className="max-w-xl text-sm leading-7 text-text-light/60">
            Платформа за кулинарни фестивали, винени уикенди и вкусни
            преживявания в България. Събираме на едно място най-апетитните
            събития и актуални оферти.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-text-light/60">
            Навигация
          </h2>
          <nav className="flex flex-col gap-3" aria-label="Footer навигация">
            {footerLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-text-light/70 transition-all duration-200 hover:text-accent"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="space-y-4">
          <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-text-light/60">
            Контакт
          </h2>
          <div className="space-y-2 text-sm text-text-light/70">
            <p>hello@festitaste.bg</p>
            <p>+359 888 123 456</p>
            <p>бул. Витоша 25, София</p>
            <p>Пон-Пет, 09:00-18:00</p>
          </div>
        </div>
      </div>

      <div className="border-t border-rust/30 px-4 py-4 text-center text-sm text-text-light/60">
        © 2026 FestiTaste Events. Всички права запазени.
      </div>
    </footer>
  );
}
