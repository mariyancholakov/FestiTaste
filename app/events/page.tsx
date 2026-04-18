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
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <section className="rounded-[36px] bg-parchment px-6 py-14 sm:px-10">
          <SectionTitle
            eyebrow="Събития"
            title="Календар с кулинарни фестивали и събития"
            description="Филтрирай по град, категория и месец, за да намериш фестивала, който пасва на следващия ти вкусен план."
          />
        </section>

        <div className="mt-10">
          <EventsExplorer events={events} />
        </div>
      </div>
    </div>
  );
}
