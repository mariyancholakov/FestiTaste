import type { Metadata } from "next";
import SectionTitle from "@/components/SectionTitle";
import { team } from "@/data/team";
import {
  HeartHandshake,
  MapPinned,
  PhoneCall,
  Sparkles,
  Users,
  UtensilsCrossed,
} from "lucide-react";

export const metadata: Metadata = {
  title: "За нас",
  description:
    "Научи повече за FestiTaste Events, нашата история, ценности, екип и кулинарната мисия зад фестивалите в България.",
};

const stats = [
  { value: "25+", label: "събития" },
  { value: "10+", label: "града" },
  { value: "5000+", label: "посетители" },
  { value: "50+", label: "партньори" },
];

const values = [
  {
    icon: Sparkles,
    title: "Кураторски подбор",
    description:
      "Промотираме събития с ясно качество, добър вкус и смислено преживяване за посетителя.",
  },
  {
    icon: HeartHandshake,
    title: "Локални партньорства",
    description:
      "Работим с производители, ресторанти и шеф-готвачи, които носят характер на всяка дестинация.",
  },
  {
    icon: Users,
    title: "Човешко отношение",
    description:
      "Комуникираме ясно и помагаме с насоки според интересите, компанията и бюджета.",
  },
  {
    icon: UtensilsCrossed,
    title: "Вкусна организация",
    description:
      "Подреждаме информацията така, че вдъхновението и практичността да вървят заедно.",
  },
];

const contactProfile = [
  "Тел: +359 888 123 456",
  "Имейл: hello@festitaste.bg",
  "Адрес: бул. Витоша 25, София",
  "Работно време: Пон-Пет, 09:00-18:00",
];

export default function AboutPage() {
  return (
    <div>
      <section className="bg-parchment">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
          <div className="rounded-[36px] bg-parchment px-5 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-14">
            <SectionTitle
              eyebrow="За нас"
              title="Историята зад FestiTaste Events"
              description="Създадохме бранда, за да превърнем търсенето на кулинарни фестивали в красиво, ясно и вдъхновяващо преживяване."
            />
          </div>
        </div>
      </section>

      <section className="bg-cream pt-8 pb-4 sm:pt-10 sm:pb-6">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-4 sm:gap-8 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10 lg:px-8">
          <article className="rounded-[32px] border border-border bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-md sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary sm:text-sm sm:tracking-[0.35em]">
              Нашата история
            </p>
            <h2 className="mt-4 font-display text-2xl font-bold text-text-base sm:text-3xl">
              От идея за вкусни уикенди до подбрана платформа за събития
            </h2>
            <p className="mt-5 text-sm leading-7 text-text-muted sm:text-base sm:leading-8">
              FestiTaste Events започва като малка инициатива за събиране на
              качествени кулинарни събития в България. С времето превърнахме
              подбора, организацията и вдъхновяващото представяне в основна
              мисия на бранда.
            </p>
            <p className="mt-4 text-sm leading-7 text-text-muted sm:text-base sm:leading-8">
              Днес комбинираме фестивали, специални оферти и локални истории в
              платформа, която помага на хората да избират по-лесно и да пътуват
              по-вкусно.
            </p>
          </article>

          <aside className="rounded-[32px] bg-dark p-6 text-text-light shadow-sm sm:p-8">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-rust/40 text-accent sm:h-14 sm:w-14">
                <MapPinned size={26} />
              </div>
              <div>
                <p className="font-display text-xl font-bold sm:text-2xl">FestiTaste HQ</p>
                <p className="text-sm text-text-light/70">София, България</p>
              </div>
            </div>
            <div className="mt-8 space-y-4 text-sm leading-7 text-text-light/75">
              {contactProfile.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
            <div className="mt-8 flex items-center gap-3 rounded-[24px] bg-rust/40 p-4 text-text-light">
              <PhoneCall size={18} className="text-accent" />
              <p className="text-sm">
                Пишем и отговаряме бързо, когато искаш помощ с избор на събитие.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-parchment py-12 sm:py-14 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition-shadow duration-200 hover:shadow-md">
            <div className="border-b border-border px-5 py-6 sm:px-8 sm:py-8">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary sm:text-sm sm:tracking-[0.35em]">
                Локация
              </p>
              <h2 className="mt-1 font-display text-2xl font-bold text-text-base sm:text-3xl">
                Къде се намира FestiTaste HQ
              </h2>
              <p className="mt-1 text-sm leading-7 text-text-muted sm:text-base sm:leading-8">
                бул. Витоша 25, София
              </p>
            </div>
            <div className="h-[520px] w-full sm:h-[620px] lg:h-[720px]">
              <iframe
                title="Локация на FestiTaste Events"
                src="https://www.google.com/maps?q=bul.%20Vitosha%2025,%20Sofia&z=15&output=embed"
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-dark py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-5 sm:grid-cols-2 lg:gap-6 xl:grid-cols-4">
            {stats.map((stat) => (
              <article
                key={stat.label}
                className="rounded-[28px] bg-dark p-6 text-center"
              >
                <p className="font-display text-4xl font-bold text-accent sm:text-5xl">
                  {stat.value}
                </p>
                <p className="mt-3 text-sm uppercase tracking-[0.3em] text-text-light/70">
                  {stat.label}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-parchment py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Екип"
            title="Екипът, който подрежда вкусовете, маршрутите и партньорствата"
            description="Три роли, една обща мисия: по-добри гурме преживявания за всеки посетител."
          />
          <div className="mt-8 grid gap-5 lg:mt-10 lg:grid-cols-3 lg:gap-6">
            {team.map((member) => (
              <article
                key={member.id}
                className="rounded-[28px] border border-border bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-light text-primary sm:h-14 sm:w-14">
                  <Users size={26} />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-text-base">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-primary">
                  {member.role}
                </p>
                <p className="mt-4 text-sm leading-7 text-text-muted">
                  {member.bio}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Ценности"
            title="Ценности, по които изграждаме всяко събитие"
            description="Те определят както партньорствата ни, така и начина, по който представяме фестивалите."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:mt-10 lg:gap-6 xl:grid-cols-4">
            {values.map((value) => (
              <article
                key={value.title}
                className="rounded-[28px] border border-border bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-light text-primary sm:h-14 sm:w-14">
                  <value.icon size={26} />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-text-base">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-text-muted">
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
