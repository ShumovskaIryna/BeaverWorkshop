const products = [
  { title: "Сходи", icon: "/images/icons/stairs.png" },
  { title: "Рейки", icon: "/images/icons/rails.png" },
  { title: "Двері", icon: "/images/icons/door.png" },
  { title: "Підвіконня", icon: "/images/icons/windowsill.png" },
  { title: "Столи", icon: "/images/icons/table.png" },
  { title: "Ліжка", icon: "/images/icons/bed.png" },
  { title: "Тумби", icon: "/images/icons/nightstand.png" },
];

export default function Furniture() {
  return (
    <section 
        className="relative py-14 w-full bg-cover bg-center mt-20"
        style={{ backgroundImage: "url('/images/fur.png')" }}
        >
     <div className="absolute inset-0 bg-[var(--background)]/90"></div>
     <div className="relative z-10">
      <div className="text-center mb-8">
        <h2 className="text-black tracking-wider text-[clamp(22px,5vw,32px)] font-semibold">
          ЩО ВИГОТОВЛЯЄМО
        </h2>
      </div>

      {/* FLEX-КОНТЕЙНЕР: центрує й останній ряд */}
      <div className="mx-auto w-[90vw] md:w-[80vw] flex flex-wrap justify-center gap-8">
        {products.map((p) => (
          <div
            key={p.title}
            className="
              flex flex-col items-center justify-center text-center space-y-4 p-4
              basis-1/3 sm:basis-1/4 md:basis-1/5
              shrink-0
            "
          >
            <img
              src={p.icon}
              alt={p.title}
              className="
                object-contain
                w-[clamp(96px,26vw,128px)] h-[clamp(96px,26vw,128px)]   /* мобілка: ще більші */
                sm:w-[clamp(80px,18vw,116px)] sm:h-[clamp(80px,18vw,116px)]
              "
            />
            <h3 className="text-[clamp(18px,5.4vw,22px)] font-semibold text-[#2b2b2b]">
              {p.title}
            </h3>
          </div>
        ))}
        </div>
      </div>
    </section>
  );
}
