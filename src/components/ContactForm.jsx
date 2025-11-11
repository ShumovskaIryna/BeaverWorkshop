"use client";


export default function ContactForm() {
  return (
    <section className="relative w-full py-20 md:py-20 overflow-hidden" id="contact">
      <div className="relative z-10 mx-auto w-[92vw] md:w-[86vw]">
        {/* Заголовок */}
        <div className="text-center mb-12">
          <h2
            className="font-black leading-[0.9]"
            style={{
              fontSize: "clamp(32px,8vw,80px)",
              WebkitTextStroke: "2px #7a5231",
              color: "transparent",
            }}
          >
            КОНТАКТИ
          </h2>
          <div className="mx-auto mt-3 h-[6px] w-[200px] bg-gradient-to-r from-[#236a3b] to-[#0d331a]" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* ЛІВИЙ БЛОК — БОБЕР + МЕСЕНДЖЕРИ */}
          <article
            className="relative rounded-2xl p-6 md:p-8 overflow-hidden
                       bg-white/10 backdrop-blur-[8px]
                       ring-1 ring-white/20 shadow-[0_20px_60px_rgba(0,0,0,0.25)]
                       flex flex-col items-center"
          >
            {/* Верхній дерев'яний штрих */}
            <div
              className="absolute inset-x-8 top-0 h-[6px] rounded-b"
              style={{
                background: "linear-gradient(90deg, #5a3c22, #7a5231 45%, #5a3c22 100%)",
                opacity: 0.55,
              }}
            />
            <p className="text-[clamp(14px,3vw,20px)] text-center leading-snug text-white/90">
              Зв’яжіться з нами будь-яким зручним способом!
              Телефон, пошта або соціальні мережі <br />— ми завжди раді допомогти.
            </p>

            {/* МЕГА-іконки */}
            <div className="flex items-center gap-10 mb-8 mt-4">
              <a
                href="viber://add?number=380955947843"
                className="h-20 w-20 md:h-24 md:w-24 rounded-full bg-white/20 backdrop-blur
                           flex items-center justify-center hover:scale-110 transition"
              >
                <img
                  src="https://beaverworkshop.s3.eu-west-3.amazonaws.com/Images/viber.png"
                  className="h-12 w-12 md:h-14 md:w-14"
                  alt="Viber"
                />
              </a>

              <a
                href="https://t.me/+380955947843"
                className="h-20 w-20 md:h-24 md:w-24 rounded-full bg-white/20 backdrop-blur
                           flex items-center justify-center hover:scale-110 transition"
              >
                <img
                  src="https://beaverworkshop.s3.eu-west-3.amazonaws.com/Images/telegram.png"
                  className="h-12 w-12 md:h-14 md:w-14"
                  alt="Telegram"
                />
              </a>
            </div>

            {/* Бобер — ВИСОТА = КАРТА */}
            <div className="relative w-full max-w-[520px] h-[260px] md:h-[360px]">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-black/35 via-black/20 to-transparent" />
              <img
                src="https://beaverworkshop.s3.eu-west-3.amazonaws.com/Images/bob2.png"
                className="relative z-10 w-full h-full object-contain"
                alt="Бобер"
              />
            </div>

            {/* Нижній дерев'яний штрих */}
            <div
              className="absolute inset-x-8 bottom-0 h-[6px] rounded-t"
              style={{
                background: "linear-gradient(90deg, #5a3c22, #7a5231 45%, #5a3c22 100%)",
                opacity: 0.55,
              }}
            />
          </article>

          {/* ПРАВА КАРТКА — ВСІ КОНТАКТИ + АДРЕСА + КАРТА */}
          <article
            className="relative rounded-2xl p-6 md:p-8 overflow-hidden
                       flex flex-col gap-8
                       bg-white/10 backdrop-blur-[8px]
                       ring-1 ring-white/20 shadow-[0_20px_60px_rgba(0,0,0,0.25)]"
          >
            {/* Верхній дерев'яний штрих */}
            <div
              className="absolute inset-x-8 top-0 h-[6px] rounded-b"
              style={{
                background: "linear-gradient(90deg, #5a3c22, #7a5231 45%, #5a3c22 100%)",
                opacity: 0.55,
              }}
            />

            {/* Зв'язок */}
            <div>
              <ul className="mt-4 space-y-2 text-[clamp(14px,2.4vw,18px)] text-white/90">
                <li>
                  📞 Номер телефону:&nbsp;
                  <a href="tel:+380955947843" className="underline underline-offset-4">
                    +38095 594 78 43
                  </a>
                </li>
                <li>
                  📧 Електронна пошта:&nbsp;
                  <a
                    href="mailto:Waldorf.vlasova@gmail.com"
                    className="underline underline-offset-4"
                  >
                    Waldorf.vlasova@gmail.com
                  </a>
                </li>
              </ul>
            </div>

            {/* Адреса */}
            <div>
              <p className="mt-3 text-[clamp(14px,2.4vw,18px)] text-white/90">
                📍 Адреса:&nbsp; м. Бориспіль, Україна <br />
                *Надаємо послуги по всій Київській області.
              </p>
            </div>

            {/* Карта — ВИСОТА = БОБЕР */}
            <div className="relative rounded-xl overflow-hidden w-full h-[260px] md:h-[360px]">
              <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-black/20 to-transparent" />
              <img
                src="https://beaverworkshop.s3.eu-west-3.amazonaws.com/Images/Ukraine2.png"
                className="relative z-10 w-full h-full object-contain"
                alt="Карта України"
              />
            </div>

            {/* Нижній дерев'яний штрих */}
            <div
              className="absolute inset-x-8 bottom-0 h-[6px] rounded-t"
              style={{
                background: "linear-gradient(90deg, #5a3c22, #7a5231 45%, #5a3c22 100%)",
                opacity: 0.55,
              }}
            />
          </article>
        </div>
      </div>

      {/* Біжуча стрічка з SEO ключами */}
      <div className="mt-14 border-y-2 border-black/40 bg-white/10 backdrop-blur-[4px]">
        <div className="mx-auto w-full py-3 overflow-hidden relative">
          <div
            className="whitespace-nowrap animate-marquee"
            style={{
              fontSize: "12px",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
            }}
          >
            <span className="mx-6">деревʼяні сходи</span>
            <span className="mx-6">дубові двері</span>
            <span className="mx-6">виготовлення деревʼяних меблів</span>
            <span className="mx-6">рейки • ліжка • тумби</span>
            <span className="mx-6">масив дерева</span>
            <span className="mx-6">монтаж під ключ</span>
            <span className="mx-6">Beaver Workshop</span>
            <span className="mx-6">деревʼяні сходи</span>
            <span className="mx-6">двері з масиву</span>
            <span className="mx-6">столи з дерева</span>
            <span className="mx-6">виготовлення меблів</span>
            <span className="mx-6">Beaver Workshop</span>
          </div>
        </div>
      </div>
    </section>
  );
}