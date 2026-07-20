"use client";
import Image from "next/image";

export default function AboutUs() {
  return (
    <section id="about" className="w-full relative py-20 md:py-20 overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.12] mix-blend-soft-light"
        style={{
          backgroundImage: `
            radial-gradient(ellipse at 20% 0%, rgba(255,255,255,0.06), transparent 60%),
            linear-gradient(90deg, rgba(40,28,18,0.35) 1px, transparent 1px),
            linear-gradient(180deg, rgba(40,28,18,0.12) 1px, transparent 1px)
          `,
          backgroundSize: "100% 100%, 140px 100%, 100% 80px",
        }}
      />

      <div className="relative z-[2] mx-auto w-[92vw] md:w-[86vw]">
        {/* Заголовок */}
        <div className="text-center mb-12">
          <h2
            className="font-black leading-[0.9]"
            style={{
              fontSize: "clamp(32px,8vw,80px)",
              WebkitTextStroke: "2px #7a5231",
              color: "transparent",
            }}
          >
            ПРО НАС
          </h2>
          <div className="mx-auto mt-3 h-[6px] w-[200px] bg-gradient-to-r from-[#236a3b] to-[#0d331a]" />
        </div>

      {/* Контент: на мобільному спершу права колонка, потім ліва */}
      <div className="mx-auto w-[90vw] md:w-[70vw] grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-0">
        {/* ЛІВА КОЛОНКА (на мобільному друга) */}
        <div className="order-2 md:order-1 flex flex-col gap-6 md:gap-8">
          {/* Фото 1 */}
          <div className="relative w-full h-[40vh] rounded-xl overflow-hidden">
            <Image
              src="https://beaver-workshop-gallery.s3.amazonaws.com/Images/stairs1.png"
              alt="Деревʼяні сходи з масиву — приклад робіт"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Лічильник + текст */}
          <h3 className="text-[clamp(36px,10vw,40px)] font-bold">
            275+{" "}
            <span className="text-[clamp(20px,7vw,22px)] font-normal">
              реалізованих проєктів
            </span>
          </h3>
          <p className="text-[clamp(14px,4vw,16px)] leading-relaxed md:w-[30vw]">
            Наша колекція з більш ніж <strong>275 реалізованих проєктів</strong> — це
            довіра власників комерційних об’єктів і приватних будинків. Ми
            створюємо <strong>деревʼяні сходи</strong>, <strong>дубові двері</strong> та
            вироби з <strong>масиву</strong>, які одночасно естетичні та функціональні,
            відповідають вимогам інтер’єру й технічним умовам.
          </p>

          {/* Фото 2 */}
          <div className="relative w-full h-[40vh] rounded-xl overflow-hidden">
            <Image
              src="https://beaver-workshop-gallery.s3.amazonaws.com/Images/stairs3.png"
              alt="Виготовлення та монтаж деревʼяних сходів і дверей"
              fill
              className="object-cover"
            />
          </div>

          {/* Лічильник + текст */}
          <h3 className="text-[clamp(36px,10vw,40px)] font-bold">
            200+{" "}
            <span className="text-[clamp(20px,7vw,22px)] font-normal">
              задоволених клієнтів
            </span>
          </h3>
          <p className="text-[clamp(14px,4vw,16px)] leading-relaxed md:w-[30vw]">
            Обслуговування клієнтів і дизайн — це мистецтво. Забезпечуємо
            <strong> своєчасний звʼязок</strong>, точний прорахунок і <strong>монтаж під ключ</strong>.
            Працюємо з породами <strong>дуб</strong>, <strong>ясен</strong>, <strong>горіх</strong>, <strong>вільха</strong> — добираємо
            матеріали, фурнітуру та покриття під ваш інтер’єр і бюджет.
          </p>
        </div>

        {/* ПРАВА КОЛОНКА (на мобільному перша) */}
        <div className="order-1 md:order-2 flex flex-col gap-6 md:gap-8 md:mt-[5vw]">
          <p className="text-[clamp(14px,4vw,16px)] leading-relaxed mb-5 md:mx-[6vw] md:w-[28vw]">
            Маємо <strong>власне виробництво</strong>. Проєкт — це синергія
            дизайну, правильного <strong>підбору деревини</strong>, інженерного підходу та
            ваших побажань. Впроваджуємо <strong>дерев’яні сходи</strong>, <strong>двері з масиву</strong>,
            меблі й елементи інтер’єру з <strong>натурального дерева</strong> з
            контролем якості на кожному етапі.
          </p>

          {/* Фото 3 */}
          <div className="relative w-full h-[40vh] rounded-xl overflow-hidden">
            <Image
              src="https://beaver-workshop-gallery.s3.amazonaws.com/Images/stairs2.png"
              alt="Власне деревообробне виробництво — Beaver Workshop"
              fill
              className="object-cover"
            />
          </div>

          {/* Лічильник + текст */}
          <h3 className="text-[clamp(36px,10vw,40px)] font-bold mx-0 md:mx-[6vw]">
            12{" "}
            <span className="text-[clamp(20px,7vw,22px)] font-normal">
              років досвіду
            </span>
          </h3>
          <p className="text-[clamp(14px,4vw,16px)] leading-relaxed mb-5 mx-0 md:mx-[6vw] md:w-[29vw]">
            За <strong>12 років</strong> виконали десятки успішних проєктів — від перших
            ескізів до <strong>монтажу під ключ</strong>. Столи, рейки, <strong>підвіконня</strong>,
            <strong> дубові двері</strong> та <strong>сходи з масиву</strong> — виготовляємо, доставляємо,
            встановлюємо. Працюємо в Києві та області.
          </p>

          {/* Фото 4 */}
          <div className="relative w-full h-[40vh] rounded-xl overflow-hidden">
            <Image
              src="https://beaver-workshop-gallery.s3.amazonaws.com/Images/stairs4.png"
              alt="Реалізовані проєкти з натурального дерева"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
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
            <span className="mx-6">масив дерева</span>
            <span className="mx-6">монтаж під ключ</span>
            <span className="mx-6">Beaver Workshop</span>
            <span className="mx-6">деревʼяні сходи</span>
            <span className="mx-6">двері з масиву</span>
            <span className="mx-6">столи з дерева</span>
            <span className="mx-6">виготовлення меблів</span>
            <span className="mx-6">Beaver Workshop</span>
          </div>
        </div>
      </div>
    </section>
  );
}