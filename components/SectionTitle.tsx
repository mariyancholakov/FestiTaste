"use client";

import { motion } from "framer-motion";

type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
  theme?: "light" | "dark";
};

export default function SectionTitle({
  eyebrow,
  title,
  description,
  centered = false,
  theme = "dark",
}: SectionTitleProps) {
  const eyebrowClass = theme === "light" ? "text-cream/75" : "text-primary";
  const titleClass = theme === "light" ? "text-white" : "text-dark-green";
  const descriptionClass =
    theme === "light" ? "text-white/82" : "text-dark-green/70";

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}
    >
      {eyebrow ? (
        <p
          className={`mb-3 text-sm font-semibold uppercase tracking-[0.35em] ${eyebrowClass}`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`font-display text-3xl font-bold leading-tight sm:text-4xl ${titleClass}`}
      >
        {title}
      </h2>
      {description ? (
        <p className={`mt-4 text-base leading-8 sm:text-lg ${descriptionClass}`}>
          {description}
        </p>
      ) : null}
    </motion.div>
  );
}
