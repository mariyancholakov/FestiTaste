"use client";

import type { Offer } from "@/data/offers";
import { motion } from "framer-motion";

type OfferCardProps = {
  offer: Offer;
};

export default function OfferCard({ offer }: OfferCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      whileHover={{ scale: 1.02 }}
      className="flex h-full flex-col rounded-[28px] border border-border bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-md"
    >
      <div className="flex min-h-24 items-start justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            Специална оферта
          </p>
          <h3 className="mt-4 font-display text-2xl font-bold text-text-base">
            {offer.title}
          </h3>
        </div>
        <span className="rounded-full bg-cream px-6 text-center w-fit py-1 text-sm font-bold text-rust">
          {offer.priceLabel}
        </span>
      </div>

      <p className="mt-5 min-h-14 text-lg font-semibold text-text-base">
        {offer.summary}
      </p>
      <p className="mt-3 min-h-[5.25rem] flex-1 text-sm leading-7 text-text-muted">
        {offer.details}
      </p>
      <div className="mt-6 rounded-2xl bg-cream px-4 py-3 text-sm font-medium text-rust">
        {offer.validity}
      </div>
    </motion.article>
  );
}
