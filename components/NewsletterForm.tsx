"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function NewsletterForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      onSubmit={(event) => {
        event.preventDefault();
        event.currentTarget.reset();
        setIsSubmitted(true);
      }}
      onChange={() => setIsSubmitted(false)}
      className="rounded-[28px] border border-border bg-white p-6 shadow-sm"
    >
      <div className="flex flex-col gap-4 sm:flex-row">
        <input
          type="email"
          required
          placeholder="Въведи имейл адрес"
          className="h-14 flex-1 rounded-full border border-border bg-white px-5 text-sm text-text-base outline-none ring-1 ring-transparent placeholder:text-text-muted/50 focus:border-primary focus:ring-primary/30"
        />
        <button
          type="submit"
          className="h-14 rounded-full bg-primary px-6 text-sm font-semibold text-white transition-all duration-200 hover:scale-[1.02] hover:bg-rust"
        >
          Абонирай се
        </button>
      </div>
      <p className="mt-4 text-sm text-text-muted">
        Изпращаме само селектирани фестивали, ранни оферти и полезни новини.
      </p>
      {isSubmitted ? (
        <p className="mt-4 text-sm font-semibold text-primary">
          Благодарим! Формата е демо и не изпраща данни към backend.
        </p>
      ) : null}
    </motion.form>
  );
}
