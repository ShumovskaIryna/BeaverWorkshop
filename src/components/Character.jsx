"use client"
import { useEffect, useState } from 'react';

export default function Character() {
  const [showBeaver, setShowBeaver] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowBeaver(true);
    }, 500);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) setIsScrolled(true);
      else setIsScrolled(false);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative">
      {showBeaver && (
<div
  className={`fixed
    bottom-5
    right-1 
    sm:right-10
    lg:right-[120px]
    z-50 animate-character transition-transform duration-500 ease-in-out
    ${isScrolled ? "scale-character" : ""}
  `}
>
  <img
    src="/images/Beaver.png"
    alt="Персонаж"
    className="w-[46vw] sm:w-[40vw] md:w-[30vw] lg:w-[22vw] h-auto"
  />
</div>
      )}
    </div>
  );
}