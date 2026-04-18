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
      className={`flex h-full flex-col rounded-[28px] border p-6 shadow-[0_18px_50px_rgba(27,67,50,0.06)] ${
        offer.highlight
          ? "border-primary bg-gradient-to-br from-primary to-accent text-white"
          : "border-dark-green/10 bg-white text-dark-green"
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p
            className={`text-sm font-semibold uppercase tracking-[0.3em] ${
              offer.highlight ? "text-white/75" : "text-primary"
            }`}
          >
            Специална оферта
          </p>
          <h3 className="mt-4 font-display text-2xl font-bold">{offer.title}</h3>
        </div>
        <span
          className={`rounded-full px-3 py-1 text-sm font-bold ${
            offer.highlight
              ? "bg-white/15 text-white"
              : "bg-cream text-primary"
          }`}
        >
          {offer.priceLabel}
        </span>
      </div>

      <p
        className={`mt-5 text-lg font-semibold ${
          offer.highlight ? "text-white" : "text-dark-green"
        }`}
      >
        {offer.summary}
      </p>
      <p
        className={`mt-3 flex-1 text-sm leading-7 ${
          offer.highlight ? "text-white/82" : "text-dark-green/70"
        }`}
      >
        {offer.details}
      </p>
      <div
        className={`mt-6 rounded-2xl px-4 py-3 text-sm font-medium ${
          offer.highlight
            ? "bg-white/12 text-white"
            : "bg-cream text-dark-green"
        }`}
      >
        {offer.validity}
      </div>
    </motion.article>
  );
}
