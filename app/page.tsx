import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import EventCard from "@/components/EventCard";
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
    <div className="pb-24">
      <section className="overflow-hidden border-b border-primary/10 bg-[linear-gradient(135deg,rgba(192,57,43,0.96),rgba(230,126,34,0.92),rgba(253,246,236,0.9))]">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-white/75">
              Вкусни пътувания из България
            </p>
            <h1 className="mt-6 font-display text-5xl font-bold leading-tight text-white sm:text-6xl">
              Открий най-вкусните кулинарни фестивали в България
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/88">
              FestiTaste Events събира на едно място гурме фестивали, винени
              уикенди и специални предложения за хора, които обичат да
              пътуват чрез вкусове.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/events"
                className="rounded-full bg-white px-7 py-4 text-center text-sm font-semibold text-dark-green transition-all duration-200 hover:scale-[1.02] hover:bg-cream"
              >
                Разгледай събитията
              </Link>
              <Link
                href="/offers"
                className="rounded-full border border-white/35 px-7 py-4 text-center text-sm font-semibold text-white transition-all duration-200 hover:scale-[1.02] hover:bg-white/10"
              >
                Виж офертите
              </Link>
            </div>
          </div>

          <div className="grid gap-4 self-end sm:grid-cols-2 lg:grid-cols-1">
            <article className="rounded-[30px] bg-white/14 p-6 text-white backdrop-blur">
              <p className="text-sm uppercase tracking-[0.3em] text-white/65">
                Следващо събитие
              </p>
              <p className="mt-4 font-display text-3xl font-bold">
                Sofia Street Food Fest
              </p>
              <p className="mt-2 text-sm text-white/80">14 юни 2025 · София</p>
            </article>
            <article className="rounded-[30px] bg-dark-green/80 p-6 text-white shadow-xl">
              <p className="text-sm uppercase tracking-[0.3em] text-white/60">
                Топ оферта
              </p>
              <p className="mt-4 font-display text-3xl font-bold">Early Bird</p>
              <p className="mt-2 text-sm text-white/80">
                30% отстъпка до 31 май
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Featured Events"
          title="Подбрани фестивали, които започват сезона силно"
          description="Три събития, с които си струва да започнеш вкусния календар за 2025."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {events.filter((event) => event.featured).map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </section>

      <section className="bg-cream/70 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Offers Preview"
            title="Оферти, които правят преживяването още по-сладко"
            description="Избери пакет според стила си на пътуване и резервирай навреме."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {offers.slice(0, 3).map((offer) => (
              <OfferCard key={offer.id} offer={offer} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Why Choose Us"
          title="Защо любителите на храната избират FestiTaste"
          description="Подреждаме програмата, офертите и полезната информация така, че да планираш по-лесно."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {featuredBenefits.map((benefit) => (
            <article
              key={benefit.title}
              className="rounded-[28px] border border-dark-green/10 bg-white p-6 shadow-[0_18px_50px_rgba(27,67,50,0.06)]"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <benefit.icon size={26} />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-dark-green">
                {benefit.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-dark-green/70">
                {benefit.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Testimonials"
            title="Какво казват посетителите след фестивалния уикенд"
            description="Истинската стойност на едно събитие се усеща най-добре през историите на хората, които са били там."
            centered
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <CTASection
          title="Планирай следващия си вкусен уикенд"
          description="Разгледай пълния календар от събития или директно ни пиши, ако искаш препоръка според града, бюджета и категорията."
          primaryHref="/events"
          primaryLabel="Към всички събития"
          secondaryHref="/contact"
          secondaryLabel="Свържи се с нас"
        />
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-6 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Newsletter CTA"
          title="Получи следващите фестивали първи"
          description="Абонирай се за бюлетина и ще изпращаме селекция от нови фестивали, оферти и вдъхновяващи маршрути."
          centered
        />
        <div className="mt-8">
          <NewsletterForm />
        </div>
      </section>
    </div>
  );
}
