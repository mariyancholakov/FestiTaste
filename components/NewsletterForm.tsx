"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { fadeUp, viewportOnce } from "@/lib/motion";

export default function NewsletterForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <motion.form
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      onSubmit={(event) => {
        event.preventDefault();
        event.currentTarget.reset();
        setIsSubmitted(true);
      }}
      onChange={() => setIsSubmitted(false)}
      className="rounded-[28px] border border-border bg-white p-5 shadow-sm sm:p-6"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:gap-2">
        <input
          type="email"
          required
          placeholder="Въведи имейл адрес"
          className="h-11 w-full rounded-full border border-border bg-white px-4 text-sm text-text-base outline-none ring-1 ring-transparent placeholder:text-text-muted/50 focus:border-primary focus:ring-primary/30 sm:h-12 sm:flex-1 sm:px-5"
        />
        <button
          type="submit"
          className="h-11 w-full rounded-full bg-primary px-5 text-sm font-semibold text-white transition-all duration-200 hover:scale-[1.02] hover:bg-rust sm:h-12 sm:w-auto sm:px-6"
        >
          Абонирай се
        </button>
      </div>
      <p className="mt-4 text-sm text-text-muted">
        Изпращаме само селектирани фестивали, ранни оферти и полезни новини.
      </p>
      {isSubmitted ? (
        <p className="mt-4 text-sm font-semibold text-primary">
          Абонирахте се успешно!
        </p>
      ) : null}
    </motion.form>
  );
}
