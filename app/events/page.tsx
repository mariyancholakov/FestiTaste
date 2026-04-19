import type { Metadata } from "next";
import EventsExplorer from "@/components/EventsExplorer";
import SectionTitle from "@/components/SectionTitle";
import { events } from "@/data/events";

export const metadata: Metadata = {
  title: "Събития",
  description:
    "Разгледай всички кулинарни фестивали и гурме събития на FestiTaste Events с удобни филтри по град, категория и месец.",
};

export default function EventsPage() {
  return (
    <div className="bg-parchment">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
        <section className="rounded-[36px] bg-parchment px-5 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-14">
          <SectionTitle
            eyebrow="Събития"
            title="Тук можеш да откриеш всички фестивали и събития"
            description="Филтрирай по град, категория и месец, за да намериш перфектния фестивал за теб."
          />
        </section>

        <div className="mt-4 sm:mt-6">
          <EventsExplorer events={events} />
        </div>
      </div>
    </div>
  );
}
