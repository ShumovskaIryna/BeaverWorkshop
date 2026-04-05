import Link from "next/link";

const ACCENT = {
  beigeGrad: "linear-gradient(90deg, rgb(255,239,216) 0%, rgb(167,149,115) 100%)",
  woodStripe: "linear-gradient(90deg, #5a3c22, #7a5231 45%, #5a3c22 100%)",
  grad: "linear-gradient(90deg, #236a3b 0%, #0d331a 100%)",
};

const services = [
  {
    id: "01",
    title: "КОНСУЛЬТАЦІЯ ТА ПРОРАХУНОК *FREE*",
    description:
      "Безкоштовна консультація та детальний прорахунок: двері, сходи, столи, підвіконня з масиву — підберемо матеріал, конструктив і бюджет оптимально.",
    buttonText: "Розрахувати вартість",
    image: "https://beaver-workshop.s3.amazonaws.com/Images/1b.png",
    link: "https://t.me/+380955947843",
  },
  {
    id: "02",
    title: "ПІДБІР МАТЕРІАЛІВ ТА ФУРНІТУРИ",
    description:
      "Допоможемо обрати дерево, фурнітуру, покриття та конструктиви відповідно до технічних вимог та дизайну інтер'єру.",
    buttonText: "Дізнатися більше",
    image: "https://beaver-workshop.s3.amazonaws.com/Images/2b.png",
    link: "#materials",
  },
  {
    id: "03",
    title: "ВИРОБНИЦТВО",
    description:
      "Виготовляємо двері, сходи, меблі та інші вироби з дуба, ясена, горіха та вільхи. Повний цикл виробництва.",
    buttonText: "Дізнатися більше",
    image: "https://beaver-workshop.s3.amazonaws.com/Images/3b.png",
    link: "/about",
  },
  {
    id: "04",
    title: "МОНТАЖ ПІД КЛЮЧ",
    description:
      "Професійне встановлення дверей, сходів та меблів. Гарантія, акуратність, точність і відповідність вашому проєкту.",
    buttonText: "Переглянути портфоліо",
    image: "https://beaver-workshop.s3.amazonaws.com/Images/4b.png",
    link: "/portfolio",
  },
];

export default function ServicesSection() {
  return (
    <section className="relative py-20 md:py-24">

      {/* заголовок по центру */}
      <div className="relative mx-auto w-[92vw] md:w-[86vw] text-center">
        <h2
          className="font-black leading-[0.9]"
          style={{
            fontSize: "clamp(34px,10vw,90px)",
            WebkitTextStroke: "2px #7a5231",
            color: "transparent",
          }}
        >
          ПОСЛУГИ
        </h2>
        <div
          className="mt-3 h-[6px] w-[160px] mx-auto"
          style={{ background: ACCENT.grad }}
        />
      </div>

      {/* сітка */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mx-auto w-[92vw] md:w-[86vw]">

        {services.map((s) => (
          <article
            key={s.id}
            className="relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-[8px]
                       ring-1 ring-white/20 shadow-[0_20px_60px_rgba(0,0,0,0.25)]
                       hover:bg-white/14 transition flex flex-col"
          >
            {/* верхній деревʼяний штрих */}
            <div
              className="absolute inset-x-6 top-0 h-[6px] rounded-b"
              style={{
                background: ACCENT.woodStripe,
                opacity: 0.55,
              }}
            />

            {/* контент */}
            <div className="flex flex-col md:flex-row gap-5 p-6 md:p-8 relative">

              {/* зображення */}
              <div className="relative w-full md:w-[42%]">
                <div className="absolute inset-0 z-[1] bg-gradient-to-br from-black/35 via-black/20 to-transparent rounded-xl" />
                <img
                  src={s.image}
                  alt={s.title}
                  className="relative z-[2] w-full h-[220px] md:h-full object-contain p-2 opacity-90"
                />

                {/* ID ПОЗАДУ ТА ВГОРІ */}
                <span
                  className="absolute right-3 top-2 font-black select-none z-0 pointer-events-none"
                  style={{
                    WebkitTextStroke: "2.2px #000",
                    color: "#E8DCCB",
                    fontSize: "clamp(70px,10vw,140px)",
                    lineHeight: 1,
                    opacity: 0.85,
                    textShadow: "0 6px 26px rgba(0,0,0,0.35)",
                  }}
                >
                  {s.id}
                </span>
              </div>

              {/* текст */}
              <div className="flex flex-col md:w-[58%]">
                <h3
                  className="uppercase font-extrabold max-w-max px-3 py-1 rounded-md"
                  style={{
                    background: ACCENT.beigeGrad,
                    fontSize: "clamp(16px,4.5vw,20px)",
                    color: "#1c140e",
                  }}
                >
                  {s.title}
                </h3>

                <p className="mt-3 text-[clamp(13px,3.8vw,16px)] leading-snug">
                  {s.description}
                </p>

                <div className="mt-5 flex items-center gap-4">
                  <Link
                    href={s.link}
                    className="inline-flex items-center justify-center px-6 py-3 rounded-full text-[13px] font-semibold uppercase tracking-wide text-white
                               bg-[linear-gradient(135deg,#2fa657_0%,#236a3b_45%,#0d331a_100%)]
                               shadow-[inset_0_3px_10px_rgba(255,255,255,0.25),0_10px_28px_rgba(0,0,0,0.25)]
                               hover:scale-[1.04] active:scale-[0.99] transition"
                  >
                    {s.buttonText}
                  </Link>

                  <span className="text-[10px] uppercase tracking-widest text-white/70">
                    {s.id} / 04
                  </span>
                </div>
              </div>
            </div>

            {/* нижній скляний рядок */}
            <div className="mt-auto px-5 py-3 md:px-6 md:py-3.5 bg-white/8 backdrop-blur-[4px] flex items-center justify-between">
              <span className="text-[10px] uppercase tracking-[0.2em] opacity-80">
                stairs • doors • tables • sells
              </span>
              <span
                className="h-[8px] w-[90px] sm:w-[110px] md:w-[120px] rounded"
                style={{ background: ACCENT.grad }}
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
