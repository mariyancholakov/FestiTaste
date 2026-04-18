"use client";

import { useState } from "react";

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        event.currentTarget.reset();
        setIsSubmitted(true);
      }}
      onChange={() => setIsSubmitted(false)}
      className="rounded-[32px] border border-border bg-white p-5 shadow-sm sm:p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="space-y-2">
          <span className="text-sm font-semibold text-text-base">Име</span>
          <input
            type="text"
            name="ime"
            required
            className="h-11 w-full rounded-2xl border border-border bg-white px-4 text-sm text-text-base outline-none ring-1 ring-transparent focus:border-primary focus:ring-primary/30 sm:h-12"
          />
        </label>
        <label className="space-y-2">
          <span className="text-sm font-semibold text-text-base">Email</span>
          <input
            type="email"
            name="email"
            required
            className="h-11 w-full rounded-2xl border border-border bg-white px-4 text-sm text-text-base outline-none ring-1 ring-transparent focus:border-primary focus:ring-primary/30 sm:h-12"
          />
        </label>
        <label className="space-y-2">
          <span className="text-sm font-semibold text-text-base">Телефон</span>
          <input
            type="tel"
            name="telefon"
            className="h-11 w-full rounded-2xl border border-border bg-white px-4 text-sm text-text-base outline-none ring-1 ring-transparent focus:border-primary focus:ring-primary/30 sm:h-12"
          />
        </label>
        <label className="space-y-2">
          <span className="text-sm font-semibold text-text-base">Тема</span>
          <input
            type="text"
            name="tema"
            required
            className="h-11 w-full rounded-2xl border border-border bg-white px-4 text-sm text-text-base outline-none ring-1 ring-transparent focus:border-primary focus:ring-primary/30 sm:h-12"
          />
        </label>
      </div>

      <label className="mt-4 block space-y-2">
        <span className="text-sm font-semibold text-text-base">Съобщение</span>
        <textarea
          name="saobshtenie"
          required
          rows={6}
          className="w-full rounded-[24px] border border-border bg-white px-4 py-3 text-sm text-text-base outline-none ring-1 ring-transparent focus:border-primary focus:ring-primary/30"
        />
      </label>

      <button
        type="submit"
        className="mt-6 inline-flex h-11 w-full items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold text-white transition-all duration-200 hover:scale-[1.02] hover:bg-rust sm:h-12"
      >
        Изпрати запитване
      </button>

      {isSubmitted ? (
        <p className="mt-4 text-sm font-semibold text-primary">
          Благодарим! Това е демо форма и съобщението не се изпраща реално.
        </p>
      ) : null}
    </form>
  );
}
