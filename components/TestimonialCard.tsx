"use client";

import type { Testimonial } from "@/data/testimonials";
import { Star } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, gentleHover, viewportOnce } from "@/lib/motion";

type TestimonialCardProps = {
  testimonial: Testimonial;
};

export default function TestimonialCard({
  testimonial,
}: TestimonialCardProps) {
  return (
    <motion.article
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      whileHover={gentleHover}
      className="h-full rounded-[28px] border border-border bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-md"
    >
      <div className="flex gap-1 text-accent">
        {Array.from({ length: testimonial.rating }).map((_, index) => (
          <Star key={`${testimonial.id}-${index}`} size={16} fill="currentColor" />
        ))}
      </div>
      <p className="mt-5 text-base leading-8 text-text-base">
        “{testimonial.quote}”
      </p>
      <div className="mt-6 border-t border-border pt-5">
        <p className="font-medium text-primary">{testimonial.name}</p>
        <p className="mt-1 text-sm text-text-muted">
          {testimonial.role} · {testimonial.city}
        </p>
      </div>
    </motion.article>
  );
}
