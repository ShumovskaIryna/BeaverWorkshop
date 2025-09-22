const products = [
  { title: "Сходи", icon: "/images/icons/1.png" },
  { title: "Рейки", icon: "/images/icons/2.png" },
  { title: "Двері", icon: "/images/icons/3.png" },
  { title: "Столи", icon: "/images/icons/5.png" },
  { title: "Ліжка", icon: "/images/icons/4.png" },
  { title: "Тумби", icon: "/images/icons/6.png" },
];

export default function Furniture() {
  return (
    <section 
      className="relative py-14 w-full bg-cover bg-center mt-20"
      style={{ backgroundImage: "url('/images/fu.png')" }}
    >
      {/* затемнення фону */}
      <div className="absolute inset-0 bg-[var(--background)]/70"></div>
      <div className="relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-black tracking-wider text-[clamp(22px,5vw,32px)] font-semibold">
            ТИПИ ВИРОБІВ
          </h2>
        </div>

        {/* FLEX-КОНТЕЙНЕР: центрує і останній ряд */}
        <div className="mx-auto w-[90vw] md:w-[80vw] flex flex-wrap justify-center gap-4 sm:gap-6">
          {products.map((p) => (
            <div
              key={p.title}
              className="
                flex flex-col items-center justify-center text-center space-y-1 p-1
                basis-1/2.5 sm:basis-1/2 md:basis-1/4
                shrink-0
              "
            >
              <img
                src={p.icon}
                alt={p.title}
                className="
                  object-contain
                  w-[clamp(140px,36vw,200px)] h-[clamp(140px,36vw,200px)]
                  sm:w-[clamp(130px,26vw,180px)] sm:h-[clamp(130px,26vw,180px)]
                  md:w-[clamp(120px,20vw,160px)] md:h-[clamp(120px,20vw,160px)]
                "
              />
              <h3 className="text-[clamp(18px,5.2vw,22px)] font-semibold text-[#2b2b2b]">
                {p.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
