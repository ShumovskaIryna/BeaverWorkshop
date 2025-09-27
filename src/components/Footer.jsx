"use client"
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full py-10">
      <div
        className="
          mx-auto w-[90vw] md:w-[80vw]
          relative rounded-3xl overflow-hidden
          "
        style={{
          backgroundImage: "url('/images/footer.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* затемнення для контрасту тексту */}
        <div className="absolute inset-0 bg-[#4b3d32]/85" />

        {/* контент */}
        <div className="relative z-10 px-6 sm:px-15 py-8">
          {/* верхня частина: 4 колонки */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
            {/* Лого + копірайт (ліворуч) */}
            <div className="space-y-4">
              <Link href="/" aria-label="На головну">
                <Image
                  src="/images/Logo.png"
                  alt="Beaver Workshop"
                  width={180}
                  height={90}
                  className="w-[160px] sm:w-[180px] h-auto"
                  priority
                />
              </Link>
              <p className="text-white/80 text-[clamp(13px,3.8vw,14px)]">
                Усі права захищені — {year}
              </p>
            </div>

            {/* Меню сайту */}
            <nav className="text-white/90">
              <ul className="space-y-3 text-[clamp(14px,4.2vw,16px)] tracking-wide">
                <li><Link href="/" className="hover:opacity-90">Головна</Link></li>
                 <li><Link href="/about" className="hover:opacity-90">Про нас</Link></li>
                <li><Link href="/portfolio" className="hover:opacity-90">Портфоліо</Link></li>
                <li><Link href="/contact" className="hover:opacity-90">Контакти</Link></li>
              </ul>
            </nav>

        {/* Контакти */}
            <div className="text-white/90">
              <ul className="space-y-3 text-[clamp(14px,4.2vw,16px)] tracking-wide">
                <li><p>📞 +38095 594 78 43</p></li>
                 <li> <p>✉️ beaver@gmail.com</p></li>
                <li><p>📍 Іванків, Україна</p></li>
                <li><p>🕒 Пн–Пт: 9:00–18:00</p></li>
              </ul>     
            </div>
            {/* Контакти + соцмережі + up */}
            <div className="flex flex-col items-start gap-4">

              {/* кнопка вгору */}
               <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="mt-2 mb-8 inline-flex items-center justify-center rounded-full border border-white/60 text-white/90 h-10 w-10 hover:bg-white/10"
              >
                <span className="text-2xl leading-none">↑</span>
              </button>
               <div className="flex items-center gap-4">
                <a
                  href="https://www.instagram.com/beaver_workshop.l.v/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <Image src="/images/instagram.png" alt="" width={32} height={32} />
                </a>
                <a
                  href="https://t.me/+380955947843"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Telegram"
                >
                  <Image src="/images/telegram.png" alt="" width={32} height={32} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
