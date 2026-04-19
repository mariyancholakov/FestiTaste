import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import SectionTitle from "@/components/SectionTitle";
import { Clock3, Mail, MapPin, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Контакти",
  description:
    "Свържи се с FestiTaste Events за въпроси, партньорства, оферти и съдействие при избор на кулинарни събития в България.",
};

const contactCards = [
  {
    icon: Phone,
    title: "Телефон",
    value: "+359 123 456 789",
  },
  {
    icon: Mail,
    title: "Имейл",
    value: "hello@festitaste.bg",
  },
  {
    icon: MapPin,
    title: "Адрес",
    value: "бул. Витоша 25, София",
  },
  {
    icon: Clock3,
    title: "Работно време",
    value: "Пон-Пет, 09:00-18:00",
  },
];

const faq = [
  {
    question: "Как мога да резервирам място за фестивал?",
    answer:
      "Изпрати ни запитване през формата и ще ти върнем насоки според избраното събитие и наличните оферти.",
  },
  {
    question: "Предлагате ли съдействие за групови посещения?",
    answer:
      "Да, можем да подготвим препоръка и оферта за компании, приятелски групи и корпоративни екипи.",
  },
  {
    question: "Мога ли да получавам нови събития по имейл?",
    answer:
      "Да, на началната страница има форма за бюлетин, чрез която можеш да се абонираш за новини и предстоящи събития.",
  },
  {
    question: "Работите ли с нови партньори и фестивали?",
    answer:
      "Да, отворени сме за партньорства с организатори, производители, винени изби и брандове.",
  },
];

export default function ContactPage() {
  return (
    <div>
      <section className="bg-parchment">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
          <div className="rounded-[36px] bg-parchment px-5 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-14">
            <SectionTitle
              eyebrow="Контакт"
              title="Тук можете да се свържете с нас и да ни пишете за всичко"
              description="Пиши ни за билети, оферти, групови запитвания или партньорства."
            />
          </div>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-8 sm:px-6 sm:py-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12 lg:px-8">
          <div className="space-y-5 sm:space-y-6">
            {contactCards.map((card) => (
              <article
                key={card.title}
                className="rounded-[28px] border border-border bg-white p-5 shadow-sm transition-shadow duration-200 hover:shadow-md sm:p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-light text-primary sm:h-14 sm:w-14">
                    <card.icon size={24} />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-text-base">
                      {card.title}
                    </h2>
                    <p className="mt-2 text-sm leading-7 text-text-muted">
                      {card.value}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="flex items-center">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* <section className="bg-parchment py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="FAQ"
            title="Често задавани въпроси"
            description="Кратки отговори на най-честите запитвания, които получаваме около събитията и офертите."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:mt-10 lg:gap-6">
            {faq.map((item) => (
              <article
                key={item.question}
                className="rounded-[28px] border border-border bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-md"
              >
                <h3 className="text-lg font-semibold text-text-base">
                  {item.question}
                </h3>
                <p className="mt-3 text-sm leading-7 text-text-muted">
                  {item.answer}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section> */}
    </div>
  );
}
