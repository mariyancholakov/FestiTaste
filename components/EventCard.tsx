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
      className="group flex h-full flex-col overflow-hidden rounded-[28px] border border-dark-green/10 bg-white shadow-[0_18px_50px_rgba(27,67,50,0.08)]"
    >
      <div className="relative overflow-hidden bg-gradient-to-br from-primary via-accent to-cream px-6 py-8 text-white">
        {event.badge ? (
          <span className="absolute right-5 top-5 rounded-full bg-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] backdrop-blur">
            {event.badge}
          </span>
        ) : null}
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-white/80">
          {event.city}
        </p>
        <h3 className="max-w-xs font-display text-2xl font-bold leading-tight">
          {event.title}
        </h3>
        <p className="mt-4 max-w-md text-sm leading-7 text-white/85">
          {event.description}
        </p>
      </div>

      <div className="flex flex-1 flex-col px-6 py-6">
        <div className="space-y-3 text-sm text-dark-green/75">
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
            {event.category}
          </p>
        </div>

        <div className="mt-6 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-dark-green/45">
              Цена
            </p>
            <p className="mt-1 text-2xl font-bold text-dark-green">
              {event.priceLabel}
            </p>
          </div>
          <Link
            href="/contact"
            className="rounded-full bg-dark-green px-5 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-primary"
          >
            Запази интерес
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
