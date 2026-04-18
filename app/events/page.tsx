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
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <section className="rounded-[36px] bg-gradient-to-br from-dark-green via-primary to-accent px-6 py-14 text-white sm:px-10">
        <SectionTitle
          eyebrow="Events"
          theme="light"
          title="Календар с кулинарни фестивали и събития"
          description="Филтрирай по град, категория и месец, за да намериш фестивала, който пасва на следващия ти вкусен план."
        />
      </section>

      <div className="mt-10">
        <EventsExplorer events={events} />
      </div>
    </div>
  );
}
