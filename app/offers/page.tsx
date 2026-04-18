import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import OfferCard from "@/components/OfferCard";
import SectionTitle from "@/components/SectionTitle";
import { offers } from "@/data/offers";
import { BadgePercent, CalendarRange, Ticket } from "lucide-react";

export const metadata: Metadata = {
  title: "Оферти",
  description:
    "Виж актуалните пакети и отстъпки за кулинарни фестивали, включително ранни записвания, ВИП и групови предложения.",
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
    <div>
      <section className="bg-parchment">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="rounded-[36px] bg-parchment px-6 py-14 sm:px-10">
            <SectionTitle
              eyebrow="Оферти"
              title="Пакети и специални предложения за по-вкусно планиране"
              description="От ранни резервации до уикенд пакети с нощувки, тук са събрани най-полезните предложения за сезона."
            />
          </div>
        </div>
      </section>

      <section className="bg-cream py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {offers.map((offer) => (
              <OfferCard key={offer.id} offer={offer} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-parchment py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Как работи"
            title="Как работят офертите"
            description="Три лесни стъпки, с които бързо избираш най-добрия вариант за следващия фестивал."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {steps.map((step, index) => (
              <article
                key={step.title}
                className="rounded-[28px] border border-border bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-md"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-light text-primary">
                    <step.icon size={26} />
                  </div>
                  <span className="text-5xl font-display font-bold text-primary/18">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="mt-5 text-xl font-semibold text-text-base">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-text-muted">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <CTASection
            title="Искаш да комбинираме фестивал и оферта вместо теб?"
            description="Изпрати ни кратко запитване и ще ти предложим подходящо събитие, пакет и бюджетна рамка."
            primaryHref="/contact"
            primaryLabel="Поискай предложение"
            secondaryHref="/events"
            secondaryLabel="Виж събитията"
          />
        </div>
      </section>
    </div>
  );
}
