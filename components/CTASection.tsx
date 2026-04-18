"use client";

import { motion } from "framer-motion";
import Link from "next/link";

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
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="overflow-hidden rounded-[36px] bg-dark px-6 py-12 text-text-light sm:px-10"
    >
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-text-light/60">
            Покана
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-base leading-8 text-text-light/75">{description}</p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href={primaryHref}
            className="rounded-full bg-primary px-6 py-3 text-center text-sm font-semibold text-white transition-all duration-200 hover:scale-[1.02] hover:bg-rust"
          >
            {primaryLabel}
          </Link>
          {secondaryHref && secondaryLabel ? (
            <Link
              href={secondaryHref}
              className="rounded-full border border-accent-light px-6 py-3 text-center text-sm font-semibold text-text-light transition-all duration-200 hover:scale-[1.02] hover:bg-rust"
            >
              {secondaryLabel}
            </Link>
          ) : null}
        </div>
      </div>
    </motion.section>
  );
}
