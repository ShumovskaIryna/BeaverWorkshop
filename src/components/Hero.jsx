import Image from "next/image";
import Character from "./../components/Character"

export default function Hero() {
  return (
    <main className="min-h-screen flex flex-col items-center">
        {/* Mobile Version */}
      <div className="relative w-full aspect-[4/5] overflow-hidden md:hidden">
        <img
          src="/images/MainSt.png"
          alt="Main Photo"
          className="h-full w-full object-cover"
          style={{ objectPosition: "20% center" }}
          loading="eager"
          decoding="async"
        />
        <div className="absolute right-1 top-3 w-[90%] bg-[var(--background)]/80 px-2 py-1 rounded">
            <h2 className="text-[6vw] leading-tight tracking-wide">
                DOORS & STAIRS & TABLES <br />
                & WINDOWSILLS & SHELVES
            </h2>
        </div>
        <button className="absolute bottom-6 left-3 hover:scale-105 transition">
          <img src="/images/BTN.png" alt="Замовити" className="w-[58vw] h-auto" />
        </button>
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
        <button className="absolute bottom-0 left-4 sm:left-10 hover:scale-105 transition">
          <Image
            src="/images/BTN.png"
            alt="Замовити"
            width={260}
            height={200}
            className="w-[27vw] h-auto"
            unoptimized
          />
        </button>
      </div>
      <Character />
    </main>
  );
}



