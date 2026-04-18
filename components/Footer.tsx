import Link from "next/link";

const footerLinks = [
  { href: "/events", label: "Събития" },
  { href: "/offers", label: "Оферти" },
  { href: "/about", label: "За нас" },
  { href: "/contact", label: "Контакти" },
];

export default function Footer() {
  return (
    <footer className="border-t border-dark-green/10 bg-dark-green text-cream">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.4fr_0.8fr_1fr] lg:px-8">
        <div className="space-y-4">
          <p className="font-display text-3xl font-bold">FestiTaste Events</p>
          <p className="max-w-xl text-sm leading-7 text-cream/80">
            Платформа за кулинарни фестивали, винени уикенди и вкусни
            преживявания в България. Събираме на едно място най-апетитните
            събития и актуални оферти.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-cream/60">
            Навигация
          </h2>
          <nav className="flex flex-col gap-3" aria-label="Footer навигация">
            {footerLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-cream/80 transition-all duration-200 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="space-y-4">
          <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-cream/60">
            Контакт
          </h2>
          <div className="space-y-2 text-sm text-cream/80">
            <p>hello@festitaste.bg</p>
            <p>+359 888 123 456</p>
            <p>бул. Витоша 25, София</p>
            <p>Пон-Пет, 09:00-18:00</p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-4 text-center text-sm text-cream/60">
        © 2026 FestiTaste Events. Всички права запазени.
      </div>
    </footer>
  );
}
