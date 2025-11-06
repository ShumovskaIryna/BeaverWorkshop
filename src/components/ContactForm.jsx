"use client";

import Link from "next/link";

export default function ContactForm() {
  return (
    <section id="contact" className="w-full py-12 bg-[var(--background)]">
      <div className="text-center mb-8">
        <h2 className="tracking-wider mb-10 text-[clamp(32px,8vw,36px)] font-semibold">
          КОНТАКТИ
        </h2>
         <p className="text-[clamp(14px,4vw,18px)] leading-snug">
          Зв’яжіться з нами будь-яким <br/> зручним способом! <br/>
          Телефон, пошта або соціальні мережі <br/> — ми завжди раді допомогти.
          </p>
            
      </div>
      <div className="mx-auto w-[90vw] md:w-[80vw] grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
          <img
            src="https://beaverworkshop.s3.eu-west-3.amazonaws.com/Images/bob2.png"
            alt="Бобрик"
            className="w-auto h-90 object-cover"
          />
          <img
            src="https://beaverworkshop.s3.eu-west-3.amazonaws.com/Images/Ukraine2.png"
            alt="Карта України"
            className="w-auto h-60 object-cover"
          />
        <div className="text-center md:text-left">
          <div className="mt-3 space-y-2 text-[clamp(16px,4.5vw,18px)]">
            <p>
              Телефон:{" "}
              <a
                href="tel:+380955947843"
                className="underline hover:no-underline"
              >
                +38095 594 78 43
              </a>
            </p>

            <p>
              Пошта:{" "}
              <a
                href="mailto:Waldorf.vlasova@gmail.com"
                className="underline hover:no-underline"
              >
                Waldorf.vlasova@gmail.com
              </a>
            </p>

            <div className="flex justify-center md:justify-start gap-5 pt-3">
                 <a
                href="viber://add?number=380955947843"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Viber"
              >
                <img
                  src="https://beaverworkshop.s3.eu-west-3.amazonaws.com/Images/viber.png"
                  alt="Viber"
                  className="h-9 w-9 hover:scale-105 transition"
                />
              </a>
              <a
                href="https://t.me/+380955947843"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
              >
                <img
                  src="https://beaverworkshop.s3.eu-west-3.amazonaws.com/Images/telegram.png"
                  alt="Telegram"
                  className="h-9 w-9 hover:scale-105 transition"
                />
              </a>
            </div>
          </div>

        {/* Права частина — контакти */}

          {/* Кнопка */}
          <Link
            href="https://t.me/+380955947843"
            className="
              relative flex justify-center px-10 py-4 mt-8 rounded-full
              text-[clamp(16px,4vw,20px)] font-semibold tracking-wide
              text-white transition-all duration-300
              border border-black
              bg-gradient-to-b from-[#44895D] to-[#004017]
              shadow-inner
              before:absolute before:inset-0 before:rounded-full
              before:shadow-[inset_0_3px_3px_rgba(255,255,255,0.7),inset_0_-3px_3px_rgba(0,0,0,0.7)]
              before:pointer-events-none
              hover:brightness-110 hover:scale-[1.05]
            "
          >
            Зв’язатися
          </Link>
        </div>
      </div>
    </section>
  );
}