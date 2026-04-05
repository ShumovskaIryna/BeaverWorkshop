"use client";
import { useEffect, useState } from "react";

export default function Character() {
  const [showBeaver, setShowBeaver] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShowBeaver(true), 500);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 300);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!showBeaver) return null;

  return (
    <div
      className={`
        fixed z-50 animate-character transition-transform duration-500 ease-in-out
        bottom-5 right-[120px]
        ${isScrolled ? "scale-character" : ""}
      `}
    >
      <img
        src="/images/Beaver.png"
        alt="Персонаж"
    className="w-[46vw] sm:w-[40vw] md:w-[30vw] lg:w-[30vw] h-auto"
      />
    </div>
  );
}