"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-[var(--foreground)] text-white">
      <div className="mx-auto flex max-w-8xl items-center justify-between px-4 py-3 md:px-8">
        {/* Логотип */}
        <Link href="/" className="flex items-center">
          <Image
              src="https://beaverworkshop.s3.eu-west-3.amazonaws.com/Images/Logo.png"
              alt="Logo"
              width={500}
              height={250}
              priority
              className="
                w-[40vw] max-w-[200px] min-w-[120px]
                h-auto
              "
            />
        </Link>

        {/* Навігація desktop */}
        <nav className="hidden md:flex gap-8 text-bold tracking-wide text-[clamp(16px,4vw,20px)]">
          <Link href="/" className="hover:text-brand-accent">
            Головна
          </Link>
          <Link href="/about" className="hover:text-brand-accent">
            Про нас
          </Link>
          <Link href="/portfolio" className="hover:text-brand-accent">
            Портфоліо
          </Link>
          <Link href="/contact" className="hover:text-brand-accent">
            Контакти
          </Link>
        </nav>

        {/* Телефон (desktop only) */}
        <div className="hidden md:block">
          <Link
            href="https://t.me/+380955947843"
            className="
              relative inline-block px-10 py-4 mt-2 rounded-full
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

        {/* Бургер-меню (mobile) */}
        <button
          className="inline-flex items-center justify-center rounded-md p-2 md:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
        >
          {/* Іконка бургер / close */}
          <svg
            className="h-10 w-10"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="md:hidden bg-[var(--foreground)] px-8 py-3">
          <ul className="flex flex-col gap-4 text-bold tracking-wide text-[clamp(18px,5vw,22px)]">
            <li>
              <Link href="/" onClick={() => setOpen(false)}>
                Головна
              </Link>
            </li>
            <li>
              <Link href="/about" onClick={() => setOpen(false)}>
                Про нас
              </Link>
            </li>
            <li>
              <Link href="/portfolio" onClick={() => setOpen(false)}>
                Портфоліо
              </Link>
            </li>
            <li>
              <Link href="/contact" onClick={() => setOpen(false)}>
                Контакти
              </Link>
            </li>
            <li>
               <Link
                href="https://t.me/+380955947843"
                  className="
                  relative flex justify-center px-10 py-4 mt-2 rounded-full
                  text-[clamp(16px,4vw,20px)] font-semibold tracking-wide
                  text-white transition-all duration-300
                  border border-black
                  bg-gradient-to-b from-[#44895D] to-[#004017]
                  shadow-inner
                  before:absolute before:inset-0 before:rounded-full
                  before:shadow-[inset_0_3px_3px_rgba(255,255,255,0.7),inset_0_-3px_3px_rgba(0,0,0,0.7)]
                  before:pointer-events-none
                  hover:brightness-110 hover:scale-[1.05]
                ">
                Зв'язатися
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
