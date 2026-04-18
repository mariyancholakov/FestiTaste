"use client";

import type { Offer } from "@/data/offers";
import { motion } from "framer-motion";
import { fadeUp, gentleHover, viewportOnce } from "@/lib/motion";

type OfferCardProps = {
  offer: Offer;
};

export default function OfferCard({ offer }: OfferCardProps) {
  return (
    <motion.article
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      whileHover={gentleHover}
      className="flex h-full flex-col rounded-[28px] border border-border bg-white p-5 shadow-sm transition-shadow duration-200 hover:shadow-md sm:p-6"
    >
      <div className="flex min-h-20 items-start justify-between gap-4 sm:min-h-24">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary sm:text-sm sm:tracking-[0.3em]">
            Специална оферта
          </p>
          <h3 className="mt-3 font-display text-xl font-bold text-text-base sm:mt-4 sm:text-2xl">
            {offer.title}
          </h3>
        </div>
        <span className="w-fit rounded-full bg-cream px-4 py-1 text-center text-xs font-bold text-rust sm:px-6 sm:text-sm">
          {offer.priceLabel}
        </span>
      </div>

      <p className="mt-4 min-h-12 text-base font-semibold text-text-base sm:mt-5 sm:min-h-14 sm:text-lg">
        {offer.summary}
      </p>
      <p className="mt-3 min-h-[4.5rem] flex-1 text-sm leading-6 text-text-muted sm:min-h-[5.25rem] sm:leading-7">
        {offer.details}
      </p>
      <div className="mt-5 rounded-2xl bg-cream px-4 py-3 text-sm font-medium text-rust sm:mt-6">
        {offer.validity}
      </div>
    </motion.article>
  );
}
