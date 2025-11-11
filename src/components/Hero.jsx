"use client";
import Image from "next/image";
import Link from "next/link";
import Character from "./../components/Character";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] md:min-h-screen overflow-hidden">

      {/* ФОНове зображення — desktop */}
      <div className="hidden md:block absolute inset-0">
        <Image
          src="https://beaverworkshop.s3.eu-west-3.amazonaws.com/Images/stairs1.png"
          alt="Деревʼяні сходи та двері з масиву — Beaver Workshop"
          fill
          priority
          unoptimized
          className="object-cover object-center opacity-20"
        />
      </div>

      {/* ФОНове зображення — mobile */}
      <div className="block md:hidden absolute inset-0">
        <img
          src="https://beaverworkshop.s3.eu-west-3.amazonaws.com/Images/stairs1.png"
          alt="Деревʼяні сходи — мобільна версія"
          className="h-full w-full object-cover opacity-20"
          style={{ objectPosition: "80% center" }}
          loading="eager"
        />
      </div>

      {/* Напівпрозорий затемнений деревʼяний шар */}
      <div
        className="absolute inset-0 opacity-[0.45] md:opacity-[0.45]"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 0%, rgba(0,0,0,0.45), transparent 60%),
            linear-gradient(90deg, rgba(40,28,18,0.55) 1px, transparent 1px),
            linear-gradient(180deg, rgba(40,28,18,0.25) 1px, transparent 1px)
          `,
          backgroundSize: "100% 100%, 120px 100%, 100% 80px",
          mixBlendMode: "multiply"
        }}
      />

      {/* Контент HERO */}
      <div className="relative z-10 max-w-[92vw] md:max-w-[86vw] mx-auto pt-[8vh] md:pt-[12vh]">
        
        {/* Головний заголовок */}
        <h1
          className="font-black uppercase leading-[1.45]"
          style={{
            fontSize: "clamp(38px,12vw,120px)",
            WebkitTextStroke: "2.5px rgb(147, 112, 86)",
            color: "transparent",
          }}
        >
          ВИРОБИ З ДЕРЕВА
        </h1>

        {/* Підзаголовок */}
        <p
          className="mt-5 text-white/90 max-w-[600px] text-[clamp(16px,4.6vw,24px)] leading-snug"
        >
          Деревʼяні сходи, дубові двері, столи й елементи інтерʼєру з натурального дерева. 
          Виготовлення та монтаж <strong>під ключ</strong> — Київ та область.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-4">
          <Link
            href="https://t.me/+380955947843"
            className="
              inline-flex items-center justify-center px-8 py-4 rounded-full
              text-white font-semibold uppercase tracking-wide
              text-[clamp(14px,4vw,18px)]
              bg-[linear-gradient(135deg,#2fa657_0%,#236a3b_45%,#0d331a_100%)]
              shadow-[inset_0_4px_10px_rgba(255,255,255,0.25),0_10px_28px_rgba(0,0,0,0.25)]
              hover:scale-[1.04] active:scale-[0.98] transition
            "
          >
            Прорахувати вартість
          </Link>

          <Link
            href="/portfolio"
            className="
              inline-flex items-center justify-center px-8 py-4 rounded-full
              text-white font-semibold uppercase tracking-wide
              text-[clamp(14px,4vw,18px)]
              bg-white/10 backdrop-blur-[4px] border border-white/20
              hover:bg-white/20 hover:scale-[1.03] active:scale-[0.98] transition
            "
          >
            Переглянути портфоліо
          </Link>
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
            <span className="mx-6">натуральне дерево</span>
            <span className="mx-6">монтаж під ключ</span>
            <span className="mx-6">275+ проєктів</span>
            <span className="mx-6">деревʼяні сходи</span>
            <span className="mx-6">12 років досвіду</span>
            <span className="mx-6">столи з дерева</span>
            <span className="mx-6">виготовлення меблів</span>
            <span className="mx-6">Beaver Workshop</span>
          </div>
        </div>
      </div>
      </div>

      <div className="hidden md:block absolute right-[4vw] bottom-0 z-20">
        <Character />
      </div>
    </section>
  );
}
