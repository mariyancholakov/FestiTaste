"use client";

import type { Testimonial } from "@/data/testimonials";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

type TestimonialCardProps = {
  testimonial: Testimonial;
};

export default function TestimonialCard({
  testimonial,
}: TestimonialCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      whileHover={{ scale: 1.02 }}
      className="h-full rounded-[28px] border border-dark-green/10 bg-white p-6 shadow-[0_18px_50px_rgba(27,67,50,0.06)]"
    >
      <div className="flex gap-1 text-accent">
        {Array.from({ length: testimonial.rating }).map((_, index) => (
          <Star key={`${testimonial.id}-${index}`} size={16} fill="currentColor" />
        ))}
      </div>
      <p className="mt-5 text-base leading-8 text-dark-green/75">
        “{testimonial.quote}”
      </p>
      <div className="mt-6 border-t border-dark-green/10 pt-5">
        <p className="font-semibold text-dark-green">{testimonial.name}</p>
        <p className="mt-1 text-sm text-dark-green/55">
          {testimonial.role} · {testimonial.city}
        </p>
      </div>
    </motion.article>
  );
}
