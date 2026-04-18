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
      className="rounded-[32px] border border-dark-green/10 bg-white p-6 shadow-[0_18px_50px_rgba(27,67,50,0.08)] sm:p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="space-y-2">
          <span className="text-sm font-semibold text-dark-green">Име</span>
          <input
            type="text"
            name="ime"
            required
            className="h-12 w-full rounded-2xl border border-dark-green/10 bg-bg px-4 text-sm outline-none focus:border-primary"
          />
        </label>
        <label className="space-y-2">
          <span className="text-sm font-semibold text-dark-green">Email</span>
          <input
            type="email"
            name="email"
            required
            className="h-12 w-full rounded-2xl border border-dark-green/10 bg-bg px-4 text-sm outline-none focus:border-primary"
          />
        </label>
        <label className="space-y-2">
          <span className="text-sm font-semibold text-dark-green">Телефон</span>
          <input
            type="tel"
            name="telefon"
            className="h-12 w-full rounded-2xl border border-dark-green/10 bg-bg px-4 text-sm outline-none focus:border-primary"
          />
        </label>
        <label className="space-y-2">
          <span className="text-sm font-semibold text-dark-green">Тема</span>
          <input
            type="text"
            name="tema"
            required
            className="h-12 w-full rounded-2xl border border-dark-green/10 bg-bg px-4 text-sm outline-none focus:border-primary"
          />
        </label>
      </div>

      <label className="mt-4 block space-y-2">
        <span className="text-sm font-semibold text-dark-green">Съобщение</span>
        <textarea
          name="saobshtenie"
          required
          rows={6}
          className="w-full rounded-[24px] border border-dark-green/10 bg-bg px-4 py-3 text-sm outline-none focus:border-primary"
        />
      </label>

      <button
        type="submit"
        className="mt-6 inline-flex h-12 items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold text-white transition-all duration-200 hover:scale-[1.02] hover:bg-accent"
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
