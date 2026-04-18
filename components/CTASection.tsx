"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { fadeUp, viewportOnce } from "@/lib/motion";

type CTASectionProps = {
  title: string;
  description: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export default function CTASection({
  title,
  description,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: CTASectionProps) {
  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className="overflow-hidden rounded-[36px] bg-dark px-5 py-8 text-text-light sm:px-8 sm:py-10 lg:px-10 lg:py-12"
    >
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-text-light/60 sm:text-sm sm:tracking-[0.35em]">
            Покана
          </p>
          <h2 className="mt-4 font-display text-2xl font-bold sm:text-3xl lg:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-sm leading-7 text-text-light/75 sm:text-base sm:leading-8">{description}</p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href={primaryHref}
            className="rounded-full bg-primary px-5 py-2.5 text-center text-xs font-semibold text-white transition-all duration-200 hover:scale-[1.02] hover:bg-rust sm:px-6 sm:py-3 sm:text-sm"
          >
            {primaryLabel}
          </Link>
          {secondaryHref && secondaryLabel ? (
            <Link
              href={secondaryHref}
              className="rounded-full border border-accent-light px-5 py-2.5 text-center text-xs font-semibold text-text-light transition-all duration-200 hover:scale-[1.02] hover:bg-rust sm:px-6 sm:py-3 sm:text-sm"
            >
              {secondaryLabel}
            </Link>
          ) : null}
        </div>
      </div>
    </motion.section>
  );
}
