"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-stone-800 text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
        {/* Логотип */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/Logo.png"
            alt="Logo"
            width={120}
            height={60}
            priority
          />
        </Link>

        {/* Навігація desktop */}
        <nav className="hidden md:flex gap-8 text-base font-medium tracking-wide">
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
          <Link href="/contact" className="hover:text-brand-accent">
            +38095 594 78 43
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
            className="h-6 w-6"
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
        <nav className="md:hidden border-t border-stone-700 bg-stone-800 px-4 py-3">
          <ul className="flex flex-col gap-4 text-base">
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
              <Link href="/contact" onClick={() => setOpen(false)}>
                +38095 594 78 43
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
