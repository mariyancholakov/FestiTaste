import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import EventCard from "@/components/EventCard";
import MotionReveal from "@/components/MotionReveal";
import NewsletterForm from "@/components/NewsletterForm";
import OfferCard from "@/components/OfferCard";
import SectionTitle from "@/components/SectionTitle";
import TestimonialCard from "@/components/TestimonialCard";
import { events } from "@/data/events";
import { offers } from "@/data/offers";
import { testimonials } from "@/data/testimonials";
import {
  MapPinned,
  ShieldCheck,
  TicketPercent,
  UtensilsCrossed,
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Начало",
  description:
    "Открий най-вкусните кулинарни фестивали в България с подбрани събития, оферти и вдъхновяващи гурме преживявания.",
};

const featuredBenefits = [
  {
    icon: MapPinned,
    title: "Събития в цяла България",
    description:
      "Следим фестивали от София до морето и подбираме най-интересните формати за сезона.",
  },
  {
    icon: TicketPercent,
    title: "Актуални оферти",
    description:
      "Събираме early bird билети, VIP пакети и специални предложения за групи и семейства.",
  },
  {
    icon: UtensilsCrossed,
    title: "Кулинарен подбор",
    description:
      "Фокус върху стойностни събития с шеф-готвачи, дегустации и местни производители.",
  },
  {
    icon: ShieldCheck,
    title: "Ясна информация",
    description:
      "Дата, град, категория и цена са видими веднага, за да планираш без излишно лутане.",
  },
];

export default function HomePage() {
  return (
    <div>
      <section className="overflow-hidden border-b border-border bg-parchment">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 sm:py-14 lg:grid-cols-[1.2fr_0.8fr] lg:gap-10 lg:px-8 lg:py-20">
          <MotionReveal className="max-w-3xl text-center lg:text-left">
            <h1 className="mt-4 font-display text-3xl font-bold leading-tight text-text-base sm:mt-6 sm:text-5xl lg:text-6xl">
              Открий най-вкусните кулинарни фестивали в България
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-text-muted sm:mx-auto sm:mt-6 sm:text-lg sm:leading-8 lg:mx-0">
              FestiTaste Events събира на едно място фестивали и събития, както
              и специални предложения за хора, които обичат да пътуват чрез
              вкусове.
            </p>
            <div className="mt-8 flex flex-row flex-wrap justify-center gap-3 sm:mt-10 sm:gap-4 lg:justify-start">
              <Link
                href="/events"
                className="rounded-full bg-primary px-4 py-2.5 text-center text-xs font-semibold text-white transition-all duration-200 hover:scale-[1.02] hover:bg-rust sm:px-7 sm:py-4 sm:text-sm"
              >
                Разгледай събитията
              </Link>
              <Link
                href="/offers"
                className="rounded-full border border-primary px-4 py-2.5 text-center text-xs font-semibold text-primary transition-all duration-200 hover:scale-[1.02] hover:bg-accent-light hover:text-dark sm:px-7 sm:py-4 sm:text-sm"
              >
                Виж офертите
              </Link>
            </div>
          </MotionReveal>

          <MotionReveal
            delay={0.08}
            className="grid gap-5 self-end sm:grid-cols-2 lg:grid-cols-1 lg:gap-8"
          >
            <article className="rounded-[30px] border border-border bg-white p-5 text-text-base shadow-sm sm:p-6">
              <p className="text-xs uppercase tracking-[0.28em] text-text-muted sm:text-sm sm:tracking-[0.3em]">
                Предстоящо събитие
              </p>
              <p className="mt-3 font-display text-2xl font-bold text-text-base sm:mt-4 sm:text-3xl">
                София Стрийт Фууд Фест
              </p>
              <p className="mt-2 text-sm text-text-muted">
                14 юни 2025 · София
              </p>
            </article>
            <article className="rounded-[30px] border border-primary bg-accent-light p-5 text-text-base shadow-sm sm:p-6">
              <p className="text-xs uppercase tracking-[0.28em] text-primary sm:text-sm sm:tracking-[0.3em]">
                Топ оферта
              </p>
              <p className="mt-3 font-display text-2xl font-bold text-text-base sm:mt-4 sm:text-3xl">
                Ранни записвания
              </p>
              <p className="mt-2 text-sm text-text-muted">
                30% отстъпка до 31 май
              </p>
            </article>
          </MotionReveal>
        </div>
      </section>

      <section className="bg-parchment py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Подбрани събития"
            title="Подбрани фестивали, които започват сезона силно"
            description="Три събития, на които си струва да отидеш през 2026."
          />
          <div className="mt-8 grid gap-5 lg:mt-10 lg:grid-cols-3 lg:gap-6">
            {events
              .filter((event) => event.featured)
              .map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Оферти"
            title="Оферти, които правят преживяването още по-сладко"
            description="Избери пакет според стила си на пътуване и резервирай навреме."
          />
          <div className="mt-8 grid gap-5 lg:mt-10 lg:grid-cols-3 lg:gap-6">
            {offers.slice(0, 3).map((offer) => (
              <OfferCard key={offer.id} offer={offer} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-dark py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Защо ние"
            theme="light"
            title="Защо любителите на храната избират FestiTaste"
            description="Подреждаме програмата, офертите и полезната информация така, че да планираш по-лесно."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:mt-10 lg:gap-6 xl:grid-cols-4">
            {featuredBenefits.map((benefit) => (
              <article
                key={benefit.title}
                className="rounded-[28px] border border-rust/50 bg-dark p-6 text-text-light shadow-sm transition-shadow duration-200 hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-rust/40 text-accent sm:h-14 sm:w-14">
                  <benefit.icon size={26} />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-text-light">
                  {benefit.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-text-light/75">
                  {benefit.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-parchment py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Отзиви"
            title="Какво казват посетителите след фестивалния уикенд"
            description="Истинската стойност на едно събитие се усеща най-добре през историите на хората, които са били там."
            centered
          />
          <div className="mt-8 grid gap-5 lg:mt-10 lg:grid-cols-3 lg:gap-6">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <CTASection
            title="Планирай следващия си вкусен уикенд"
            description="Разгледай пълния календар от събития или директно ни пиши, ако искаш препоръка според града, бюджета и категорията."
            primaryHref="/events"
            primaryLabel="Към всички събития"
            secondaryHref="/contact"
            secondaryLabel="Свържи се с нас"
          />
        </div>
      </section>

      <section className="bg-cream pb-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Бюлетин"
            title="Получи следващите фестивали първи"
            description="Абонирай се за бюлетина и ще изпращаме селекция от нови фестивали, оферти и вдъхновяващи маршрути."
            centered
          />
          <div className="mt-8">
            <NewsletterForm />
          </div>
        </div>
      </section>
    </div>
  );
}
