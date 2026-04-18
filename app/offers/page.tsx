import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import OfferCard from "@/components/OfferCard";
import SectionTitle from "@/components/SectionTitle";
import { offers } from "@/data/offers";
import { BadgePercent, CalendarRange, Ticket } from "lucide-react";

export const metadata: Metadata = {
  title: "Оферти",
  description:
    "Виж актуалните пакети и отстъпки за кулинарни фестивали, включително early bird, VIP и групови предложения.",
};

const steps = [
  {
    icon: BadgePercent,
    title: "Избери оферта",
    description:
      "Сравни пакетите според бюджет, тип преживяване и формат на посещението.",
  },
  {
    icon: CalendarRange,
    title: "Провери валидността",
    description:
      "Виж срока, ограниченията и за кои фестивали се прилага конкретната отстъпка.",
  },
  {
    icon: Ticket,
    title: "Изпрати запитване",
    description:
      "Свържи се с нас и ще ти подготвим насочване към най-подходящото предложение.",
  },
];

export default function OffersPage() {
  return (
    <div className="pb-24">
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-[36px] bg-gradient-to-r from-primary via-accent to-cream px-6 py-14 sm:px-10">
          <SectionTitle
            eyebrow="Offers"
            title="Пакети и специални предложения за по-вкусно планиране"
            description="От ранни резервации до уикенд пакети с нощувки, тук са събрани най-полезните предложения за сезона."
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {offers.map((offer) => (
            <OfferCard key={offer.id} offer={offer} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="How It Works"
          title="Как работят офертите"
          description="Три лесни стъпки, с които бързо избираш най-добрия вариант за следващия фестивал."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {steps.map((step, index) => (
            <article
              key={step.title}
              className="rounded-[28px] border border-dark-green/10 bg-white p-6 shadow-[0_18px_50px_rgba(27,67,50,0.06)]"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                  <step.icon size={26} />
                </div>
                <span className="text-5xl font-display font-bold text-primary/18">
                  0{index + 1}
                </span>
              </div>
              <h3 className="mt-5 text-xl font-semibold text-dark-green">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-dark-green/70">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <CTASection
          title="Искаш да комбинираме фестивал и оферта вместо теб?"
          description="Изпрати ни кратко запитване и ще ти предложим подходящо събитие, пакет и бюджетна рамка."
          primaryHref="/contact"
          primaryLabel="Поискай предложение"
          secondaryHref="/events"
          secondaryLabel="Виж събитията"
        />
      </section>
    </div>
  );
}
