"use client";

import type { FestivalEvent } from "@/data/events";
import { CalendarDays, MapPin, Tag } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

type EventCardProps = {
  event: FestivalEvent;
};

export default function EventCard({ event }: EventCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      whileHover={{ scale: 1.02 }}
      className="group flex h-full flex-col overflow-hidden rounded-[28px] border border-border bg-white shadow-sm transition-shadow duration-200 hover:shadow-md"
    >
      <div className="relative border-b border-border px-6 py-8">
        {event.badge ? (
          <span
            className={`absolute right-5 top-5 rounded-full px-3 py-1 text-xs font-medium ${
              event.badge === "Популярно"
                ? "bg-accent-light text-rust"
                : "bg-primary text-white"
            }`}
          >
            {event.badge}
          </span>
        ) : null}
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-primary">
          {event.city}
        </p>
        <h3 className="min-h-[4rem] max-w-xs font-display text-2xl font-bold leading-tight text-text-base">
          {event.title}
        </h3>
        <p className="mt-4 min-h-[5.25rem] max-w-md text-sm leading-7 text-text-muted">
          {event.description}
        </p>
      </div>

      <div className="flex flex-1 flex-col px-6 py-6">
        <div className="space-y-3 text-sm text-text-muted">
          <p className="flex items-center gap-2">
            <CalendarDays size={16} className="text-primary" />
            <time dateTime={event.isoDate}>{event.date}</time>
          </p>
          <p className="flex items-center gap-2">
            <MapPin size={16} className="text-primary" />
            {event.city}
          </p>
          <p className="flex items-center gap-2">
            <Tag size={16} className="text-primary" />
            <span className="rounded-full border border-border bg-cream px-3 py-1 text-xs text-rust">
              {event.category}
            </span>
          </p>
        </div>

        <div className="mt-6 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-text-muted">
              Цена
            </p>
            <p className="mt-1 text-2xl font-bold text-text-base">
              {event.priceLabel}
            </p>
          </div>
          <Link
            href="/contact"
            className="rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-rust"
          >
            Запази в любими
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
