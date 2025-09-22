"use client";
import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [status, setStatus] = useState("idle");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", phone: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="w-full py-12">
      <div className="mx-auto w-[90vw] md:w-[80vw] grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Форма */}
        <div>
          <div className="text-center mb-6">
            <h2 className="text-black tracking-wider text-[clamp(22px,5vw,32px)] font-semibold">
              НАПИШІТЬ НАМ
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-xl mx-auto">
            {/* Ім’я */}
            <div>
              <label htmlFor="name" className="block text-[clamp(15px,4.5vw,18px)] font-semibold text-gray-700">
                Ваше ім’я
              </label>
              <input
                id="name"
                type="text"
                placeholder="Ваше ім’я"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                className="mt-2 w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-[clamp(15px,4.5vw,17px)] outline-none focus:ring-2 focus:ring-brand-accent"
              />
            </div>

            {/* Телефон */}
            <div>
              <label htmlFor="phone" className="block text-[clamp(15px,4.5vw,18px)] font-semibold text-gray-700">
                Номер телефону
              </label>
              <input
                id="phone"
                type="tel"
                inputMode="tel"
                placeholder="+38 (0__) ___-__-__"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                required
                pattern="^[+]?[\d\s()-]{7,}$"
                className="mt-2 w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-[clamp(15px,4.5vw,17px)] outline-none focus:ring-2 focus:ring-brand-accent"
              />
              <p className="mt-1 text-[clamp(12px,3.8vw,14px)] text-gray-500">
                Можна у будь-якому зручному форматі
              </p>
            </div>

            {/* Коментар */}
            <div>
              <label htmlFor="message" className="block text-[clamp(15px,4.5vw,18px)] font-semibold text-gray-700">
                Коментар
              </label>
              <textarea
                id="message"
                placeholder="Опишіть, що саме потрібно"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={5}
                required
                className="mt-2 w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-[clamp(15px,4.5vw,17px)] outline-none focus:ring-2 focus:ring-brand-accent"
              />
            </div>

            {/* Кнопка */}
            <button
              type="submit"
              disabled={status === "loading"}
              className="mt-2 h-12 rounded-full bg-brand-accent px-6 text-[clamp(16px,4.8vw,18px)] font-semibold text-white hover:opacity-95 active:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "loading" ? "Відправляємо…" : "Відправити"}
            </button>

            {/* Статус */}
            {status === "success" && (
              <p className="text-green-600 text-[clamp(14px,4vw,16px)]">✅ Повідомлення відправлено! Ми скоро зв’яжемось.</p>
            )}
            {status === "error" && (
              <p className="text-red-600 text-[clamp(14px,4vw,16px)]">❌ Сталася помилка. Спробуйте ще раз.</p>
            )}
          </form>
        </div>

        {/* Контакти */}
        <div className="flex flex-col items-center">
        {/* Карта */}
          <div
            className="mb-6 w-full h-[180px] sm:h-[220px] md:h-[260px] rounded-md bg-contain bg-no-repeat bg-center"
            style={{ backgroundImage: "url('/images/ukraine.png')" }}
            aria-label="Карта України"
          />
          <div className="text-center">
            <p className="text-[clamp(16px,4.6vw,18px)] font-semibold text-gray-700">Контакти</p>
            <div className="mt-3 space-y-2 text-[clamp(15px,4.5vw,17px)] text-gray-700">
              <p>
                Телефон:{" "}
                <a href="tel:+380501234567" className="underline hover:no-underline">
                  +38 (050) 123-45-67
                </a>
              </p>
              <p>
                Пошта:{" "}
                <a href="mailto:example@email.com" className="underline hover:no-underline">
                  example@email.com
                </a>
              </p>
              <div className="flex justify-center gap-5 pt-3">
                <a href="https://t.me/your_telegram" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
                  <img src="/images/telegram.png" alt="" className="h-8 w-8" />
                </a>
                <a href="https://viber.com/your_viber" target="_blank" rel="noopener noreferrer" aria-label="Viber">
                  <img src="/images/viber.png" alt="" className="h-8 w-8" />
                </a>
                <a href="https://www.instagram.com/beaver_workshop.l.v/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <img src="/images/instagram.png" alt="" className="h-8 w-8" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}