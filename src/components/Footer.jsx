"use client"
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative w-full pt-14 pb-10">
      {/* делікатний глобальний фон під футером */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage: `
            radial-gradient(ellipse at 20% 0%, rgba(255,255,255,0.06), transparent 60%),
            linear-gradient(90deg, rgba(40,28,18,0.35) 1px, transparent 1px),
            linear-gradient(180deg, rgba(40,28,18,0.12) 1px, transparent 1px)
          `,
          backgroundSize: "100% 100%, 140px 100%, 100% 80px",
          mixBlendMode: "soft-light",
        }}
      />

      <div className="relative mx-auto w-[92vw] md:w-[86vw]">
        {/* скляна картка футера */}
        <div className="relative rounded-3xl overflow-hidden bg-white/10 backdrop-blur-[10px] ring-1 ring-white/20 shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
          {/* верхній «дерев’яний» штрих */}
          <div
            className="absolute inset-x-8 top-0 h-[6px] rounded-b"
            style={{
              background: "linear-gradient(90deg, #5a3c22, #7a5231 45%, #5a3c22 100%)",
              opacity: 0.55,
            }}
          />

          {/* контент */}
          <div className="relative z-10 px-6 md:px-10 lg:px-14 py-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 items-start">
              {/* 1) Лого + копірайт */}
              <div className="space-y-4">
                <Link href="/" aria-label="На головну" className="inline-block">
                  <Image
                    src="https://beaver-workshop-gallery.s3.amazonaws.com/images/Logo.png"
                    alt="Beaver Workshop — виготовлення з дерева"
                    width={200}
                    height={96}
                    className="w-[160px] sm:w-[190px] h-auto"
                    priority
                  />
                </Link>
                <p className="text-white/85 text-[clamp(13px,3.6vw,14px)]">
                  © Усі права захищені — {year}
                </p>
              </div>

              {/* 2) Меню сайту */}
              <nav className="text-white/90">
                <h4 className="mb-3 text-white/70 uppercase tracking-[0.18em] text-xs">
                  Навігація
                </h4>
                <ul className="space-y-3 text-[clamp(14px,4vw,16px)] tracking-wide">
                  <li>
                    <Link
                      href="/"
                      className="hover:underline underline-offset-4 hover:opacity-100 opacity-90 transition"
                    >
                      Головна
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className="hover:underline underline-offset-4 hover:opacity-100 opacity-90 transition"
                    >
                      Про нас
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/portfolio"
                      className="hover:underline underline-offset-4 hover:opacity-100 opacity-90 transition"
                    >
                      Портфоліо
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="hover:underline underline-offset-4 hover:opacity-100 opacity-90 transition"
                    >
                      Контакти
                    </Link>
                  </li>
                </ul>
              </nav>

              {/* 3) Контакти */}
              <div className="text-white/90">
                <h4 className="mb-3 text-white/70 uppercase tracking-[0.18em] text-xs">
                  Контакти
                </h4>
                <ul className="space-y-3 text-[clamp(14px,4vw,16px)] tracking-wide">
                  <li>
                    <p>
                      📞{" "}
                      <a href="tel:+380955947843" className="underline underline-offset-4">
                        +38095 594 78 43
                      </a>
                    </p>
                  </li>
                  <li>
                    <p>
                      ✉️{" "}
                      <a
                        href="mailto:Waldorf.vlasova@gmail.com"
                        className="underline underline-offset-4"
                      >
                        Waldorf.vlasova@gmail.com
                      </a>
                    </p>
                  </li>
                  <li>
                    <p>📍 Бориспіль, Україна</p>
                  </li>
                  <li>
                    <p>🕒 Пн–Пт: 9:00–18:00</p>
                  </li>
                </ul>
              </div>

              {/* 4) Соцмережі + кнопка вгору */}
              <div className="flex flex-col items-start gap-5">
                <h4 className="text-white/70 uppercase tracking-[0.18em] text-xs">
                  Зв’язок
                </h4>

                <div className="flex items-center gap-5">
                  <a
                    href="viber://add?number=380955947843"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Viber"
                    className="group inline-flex items-center justify-center h-12 w-12 rounded-full bg-white/15 ring-1 ring-white/20 hover:scale-[1.06] transition"
                    title="Відкрити Viber"
                  >
                    <Image
                      src="https://beaver-workshop-gallery.s3.amazonaws.com/images/viber.png"
                      alt="Viber"
                      width={28}
                      height={28}
                    />
                  </a>
                  <a
                    href="https://t.me/+380955947843"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Telegram"
                    className="group inline-flex items-center justify-center h-12 w-12 rounded-full bg-white/15 ring-1 ring-white/20 hover:scale-[1.06] transition"
                    title="Відкрити Telegram"
                  >
                    <Image
                      src="https://beaver-workshop-gallery.s3.amazonaws.com/images/telegram.png"
                      alt="Telegram"
                      width={26}
                      height={26}
                    />
                  </a>
                </div>

                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className="mt-2 inline-flex items-center justify-center h-11 w-11 rounded-full
                             text-white bg-[linear-gradient(135deg,#2fa657_0%,#236a3b_45%,#0d331a_100%)]
                             shadow-[inset_0_3px_10px_rgba(255,255,255,0.25),0_8px_20px_rgba(0,0,0,0.25)]
                             hover:scale-[1.06] active:scale-95 transition"
                  aria-label="Повернутися вгору"
                  title="Повернутися вгору"
                >
                  ↑
                </button>
              </div>
            </div>

            {/* розділювач і SEO-рядок без анімації (щоб не тягнути дод. CSS) */}
            <div className="mt-10 h-px w-full bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            <div className="pt-6 text-center text-[11px] uppercase tracking-[0.25em] text-white/75">
              деревʼяні сходи • дубові двері • масив дерева • виготовлення меблів • підвіконня • столи • рейки • ліжка • тумби
            </div>
          </div>

          {/* нижній «дерев’яний» штрих */}
          <div
            className="absolute inset-x-8 bottom-0 h-[6px] rounded-t"
            style={{
              background: "linear-gradient(90deg, #5a3c22, #7a5231 45%, #5a3c22 100%)",
              opacity: 0.55,
            }}
          />
        </div>
      </div>
    </footer>
  );
}
