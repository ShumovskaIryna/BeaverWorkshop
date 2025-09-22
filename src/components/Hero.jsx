import Image from "next/image";
import Character from "./../components/Character"

export default function Hero() {
  return (
    <main className="min-h-screen flex flex-col items-center">
      {/* Mobile Version */}
      <div className="relative w-full aspect-[7/10] overflow-hidden md:hidden">
        <img
          src="/images/MainSt.png"
          alt="Main Photo"
          className="h-full w-full object-cover"
          style={{ objectPosition: "18% center" }}
          loading="eager"
          decoding="async"
        />
        <div className="absolute right-1 top-3 w-[90%] bg-[var(--background)]/80 px-2 py-1 rounded">
          <h2 className="text-[6vw] leading-tight tracking-wide">
                DOORS & STAIRS & TABLES <br />
                & WINDOWSILLS & SHELVES
          </h2>
        </div>
         <a
          href="#contact" className="absolute bottom-0 left-1 hover:scale-105 transition">
          <img src="/images/BTN.png" alt="Замовити" className="w-[68vw] h-auto" />
        </a>

        {/* 🦫 Мобільний Бобер – ТІЛЬКИ В СЕРЕДИНІ mobile-hero, НЕ fixed */}
        <img
          src="/images/Beaver.png"
          alt="Персонаж"
          className="
            absolute z-30
            bottom-34 right-24
            w-[56vw] h-auto
            z-50 animate-character transition-transform duration-500 ease-in-out
          "
        />
      </div>
      {/* Desktop Version */}
      <div className="relative hidden md:block md:w-[96vw] md:aspect-[16/7] overflow-hidden">
        <Image
          src="/images/MainSt.png"
          alt="Main Photo"
          fill
          className="object-cover md:object-center"
          sizes="96vw"
          priority
          unoptimized
        />
        <h2 className="absolute right-[-40px] top-6 w-1/2 text-[2.7vw] font-regular leading-tight tracking-wide">
          DOORS & STAIRS & TABLES <br />
          & WINDOWSILLS & SHELVES
        </h2>
         <a
          href="#contact" className="absolute bottom-0 left-4 sm:left-10 hover:scale-105 transition">
          <Image
            src="/images/BTN.png"
            alt="Замовити"
            width={260}
            height={200}
            className="w-[27vw] h-auto"
            unoptimized
          />
        </a>
        <Character />
      </div>
    </main>
  );
}
