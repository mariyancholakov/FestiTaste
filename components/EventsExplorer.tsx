"use client";

import type { FestivalEvent } from "@/data/events";
import EventCard from "@/components/EventCard";
import { Search } from "lucide-react";
import { useState } from "react";

type EventsExplorerProps = {
  events: FestivalEvent[];
};

export default function EventsExplorer({ events }: EventsExplorerProps) {
  const [search, setSearch] = useState("");
  const [city, setCity] = useState("Всички градове");
  const [category, setCategory] = useState("Всички категории");
  const [month, setMonth] = useState("Всички месеци");

  const cities = ["Всички градове", ...new Set(events.map((event) => event.city))];
  const categories = [
    "Всички категории",
    ...new Set(events.map((event) => event.category)),
  ];
  const months = ["Всички месеци", ...new Set(events.map((event) => event.month))];

  const normalizedSearch = search.trim().toLowerCase();
  const filteredEvents = events.filter((event) => {
    const matchesSearch =
      normalizedSearch.length === 0 ||
      `${event.title} ${event.description} ${event.city} ${event.category}`
        .toLowerCase()
        .includes(normalizedSearch);
    const matchesCity = city === "Всички градове" || event.city === city;
    const matchesCategory =
      category === "Всички категории" || event.category === category;
    const matchesMonth = month === "Всички месеци" || event.month === month;

    return matchesSearch && matchesCity && matchesCategory && matchesMonth;
  });

  return (
    <section className="space-y-8">
      <div className="rounded-[32px] border border-border bg-cream p-5 sm:p-6">
        <div className="grid gap-4 lg:grid-cols-[1.5fr_repeat(3,1fr)]">
          <label className="relative">
            <span className="sr-only">Търси събитие</span>
            <Search
              size={18}
              className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-text-muted"
            />
            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Търси по име, град или категория"
              className="h-14 w-full rounded-full border border-border bg-white pl-12 pr-5 text-sm text-text-base outline-none focus:border-primary"
            />
          </label>

          <select
            value={city}
            onChange={(event) => setCity(event.target.value)}
            className="h-14 rounded-full border border-border bg-white px-5 text-sm text-text-base outline-none focus:border-primary"
          >
            {cities.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>

          <select
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            className="h-14 rounded-full border border-border bg-white px-5 text-sm text-text-base outline-none focus:border-primary"
          >
            {categories.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>

          <select
            value={month}
            onChange={(event) => setMonth(event.target.value)}
            className="h-14 rounded-full border border-border bg-white px-5 text-sm text-text-base outline-none focus:border-primary"
          >
            {months.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      </div>

      <p className="text-sm text-text-muted">
        Показани събития: <span className="font-semibold">{filteredEvents.length}</span>
      </p>

      {filteredEvents.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      ) : (
        <div className="rounded-[28px] border border-dashed border-border bg-white px-6 py-12 text-center text-text-muted">
          Няма намерени събития по текущите критерии. Пробвай с друг град,
          месец или по-кратка заявка.
        </div>
      )}
    </section>
  );
}
