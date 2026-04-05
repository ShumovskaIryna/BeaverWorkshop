"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const NAV = [
  { href: "/", label: "Головна" },
  { href: "/about", label: "Про нас" },
  { href: "/portfolio", label: "Портфоліо" },
  { href: "/contact", label: "Контакти" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Скляний бар із «дерев’яним» штрихом */}
      <div className="relative bg-black/30 backdrop-blur-md ring-1 ring-white/20">
        <div
          className="absolute inset-x-6 top-0 h-[6px] rounded-b"
          style={{
            background:
              "linear-gradient(90deg, #5a3c22, #7a5231 45%, #5a3c22 100%)",
            opacity: 0.55,
            mixBlendMode: "multiply",
          }}
        />
        <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />

        <div className="mx-auto w-[92vw] md:w-[86vw] flex items-center justify-between py-3">
          {/* Лого */}
          <Link href="/" className="flex items-center">
            <Image
              src="https://beaver-workshop.s3.amazonaws.com/Images/Logo.png"
              alt="Beaver Workshop Logo"
              width={500}
              height={250}
              priority
              className="w-[40vw] max-w-[200px] min-w-[120px] h-auto"
            />
          </Link>

          {/* Навігація — desktop */}
          <nav className="hidden md:flex items-center gap-8 uppercase tracking-wide text-[clamp(14px,2vw,16px)]">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative text-white/90 hover:text-white transition
                           inline-flex items-center
                           hover:underline underline-offset-[6px]
                           hover:scale-[1.04]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA — desktop */}
          <div className="hidden md:block">
            <Link
              href="https://t.me/+380955947843"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full
                         text-[14px] font-semibold uppercase tracking-wide text-white
                         bg-[linear-gradient(135deg,#2fa657_0%,#236a3b_45%,#0d331a_100%)]
                         shadow-[inset_0_3px_10px_rgba(255,255,255,0.25),0_8px_20px_rgba(0,0,0,0.25)]
                         hover:scale-[1.04] active:scale-[0.99] transition"
            >
              Зв’язатися
            </Link>
          </div>

          {/* Бургер — mobile (відкриває/закриває) */}
          <button
            aria-label="Перемкнути меню"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-white/90 hover:text-white"
          >
            {/* міняємо іконку в залежності від стану */}
            {open ? (
              <svg className="h-9 w-9" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            ) : (
              <svg className="h-9 w-9" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Мобільне меню — без ESC/кліку поза/автозакриття по лінку */}
      {open && (
        <div className="md:hidden fixed inset-0 z-40">
          {/* затемнення */}
          <div className="absolute inset-0 bg-black/60 pointer-events-none" />
          {/* панель */}
          <div
            id="mobile-menu"
            className="absolute inset-x-0 top-0 rounded-b-2xl
                       bg-white/10 backdrop-blur-xl ring-1 ring-white/20
                       shadow-[0_30px_80px_rgba(0,0,0,0.4)]
                       animate-[menuDrop_260ms_ease-out]"
          >
            {/* дерев’яний штрих зверху */}
            <div
              className="absolute inset-x-8 top-0 h-[6px] rounded-b"
              style={{
                background:
                  "linear-gradient(90deg, #5a3c22, #7a5231 45%, #5a3c22 100%)",
                opacity: 0.6,
              }}
            />
            <div className="mx-auto w-[92vw] py-4">
              {/* верхній ряд: лого + та ж кнопка-бургер (закриває) */}
              <div className="flex items-center justify-between">
                <Link href="/" className="flex items-center">
                  <Image
                    src="https://beaver-workshop.s3.amazonaws.com/Images/Logo.png"
                    alt="Beaver Workshop Logo"
                    width={260}
                    height={120}
                    className="w-[44vw] max-w-[180px] h-auto"
                  />
                </Link>
                <button
                  aria-label="Перемкнути меню"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center justify-center rounded-md p-2 text-white/90 hover:text-white"
                >
                  <svg className="h-9 w-9" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                  </svg>
                </button>
              </div>

              {/* лінки */}
              <nav className="mt-6">
                <ul className="flex flex-col gap-3 text-white">
                  {NAV.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="block rounded-xl px-4 py-4
                                   text-[clamp(18px,5vw,22px)] font-semibold uppercase tracking-wide
                                   bg-white/5 ring-1 ring-white/10
                                   transition transform
                                   hover:bg-white/10 hover:scale-[1.02] hover:underline underline-offset-8"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                  {/* CTA */}
                  <li className="pt-2">
                    <Link
                      href="https://t.me/+380955947843"
                      className="block text-center rounded-full px-6 py-4
                                 text-[clamp(16px,4.5vw,18px)] font-semibold uppercase tracking-wide text-white
                                 bg-[linear-gradient(135deg,#2fa657_0%,#236a3b_45%,#0d331a_100%)]
                                 shadow-[inset_0_3px_10px_rgba(255,255,255,0.25),0_10px_28px_rgba(0,0,0,0.25)]
                                 transition transform
                                 hover:scale-[1.02]"
                    >
                      Зв’язатися
                    </Link>
                  </li>
                </ul>
              </nav>

              <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-white/30 to-transparent" />
              <div className="py-4 text-center text-xs uppercase tracking-[0.25em] text-white/70">
                wood • stairs • doors • shelves • tables
              </div>
            </div>
          </div>
        </div>
      )}

    </header>
  );
}
