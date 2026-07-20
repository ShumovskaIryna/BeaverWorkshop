const products = [
  { title: "Сходи", icon: "https://beaver-workshop-gallery.s3.amazonaws.com/Images/icons/1.png" },
  { title: "Рейки", icon: "https://beaver-workshop-gallery.s3.amazonaws.com/Images/icons/2.png" },
  { title: "Двері", icon: "https://beaver-workshop-gallery.s3.amazonaws.com/Images/icons/3.png" },
  { title: "Столи", icon: "https://beaver-workshop-gallery.s3.amazonaws.com/Images/icons/5.png" },
  { title: "Ліжка", icon: "https://beaver-workshop-gallery.s3.amazonaws.com/Images/icons/4.png" },
  { title: "Тумби", icon: "https://beaver-workshop-gallery.s3.amazonaws.com/Images/icons/6.png" },
];

const ACCENT = {
  green: "#236a3b",
  beige: "#E8DCCB",
  coal: "#121212",
  grad: "linear-gradient(90deg, #236a3b 0%, #0d331a 100%)",
};

export default function Furniture() {
  return (
    <section className="relative py-16 md:py-24" aria-labelledby="furniture-heading">
      {/* м’який «дерев’яний» фон секції */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.10]"
        style={{
          backgroundImage: `
            linear-gradient(90deg, rgba(70,48,30,.22) 1px, transparent 1px),
            linear-gradient(180deg, rgba(70,48,30,.12) 1px, transparent 1px)
          `,
          backgroundSize: "160px 100%, 100% 90px",
          mixBlendMode: "soft-light",
        }}
      />

      {/* Заголовок (по центру) */}
      <div className="relative mx-auto w-[92vw] md:w-[86vw] mb-10 md:mb-14 text-center">
        <h2
          id="furniture-heading"
          className="font-black leading-[0.9] inline-block"
          style={{
            fontSize: "clamp(34px,10vw,90px)",
            WebkitTextStroke: "2px #7a5231",
            color: "transparent",
          }}
        >
          ТИПИ ВИРОБІВ
        </h2>
        <div
          className="mt-2 h-[6px] w-[160px] mx-auto"
          style={{ background: ACCENT.grad }}
        />
      </div>


      <div className="relative mx-auto w-[92vw] md:w-[86vw] grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
        {products.map((p, i) => (
          <article
            key={p.title}
            className="group relative overflow-hidden rounded-2xl h-full
                       bg-white/10 backdrop-blur-[6px]
                       ring-1 ring-white/15 shadow-[0_20px_60px_rgba(0,0,0,0.25)]
                       hover:bg-white/14 transition
                       flex flex-col"
          >
            {/* тонкий «дерев’яний» індикатор зверху */}
            <div
              className="absolute inset-x-6 top-0 h-[6px] rounded-b"
              style={{
                background: "linear-gradient(90deg, #5a3c22, #7a5231 45%, #5a3c22 100%)",
                opacity: 0.55,
                mixBlendMode: "multiply",
              }}
            />

            {/* Контент внутрішній */}
            <div className="relative flex flex-col md:flex-row items-center gap-4 md:gap-6 p-4 md:p-8">
              {/* іконка */}
              <div className="relative w-full md:w-[42%]">
                <div className="absolute inset-0 bg-gradient-to-br from-black/25 via-black/15 to-transparent rounded-xl" />
                <img
                  src={p.icon}
                  alt={p.title}
                  className="relative z-[1] mx-auto w-[130px] h-[130px] sm:w-[160px] sm:h-[160px] md:w-[200px] md:h-[200px] object-contain transition-transform duration-300 group-hover:scale-[1.04]"
                />
              </div>

              {/* текст */}
              <div className="w-full md:flex-1 text-center md:text-left">
                <h3
                  className="uppercase font-extrabold leading-tight inline-block px-3 py-1 rounded-md"
                  style={{
                    background: "linear-gradient(90deg, #E8DCCB 0%, #d9c8a9 100%)",
                    fontSize: "clamp(16px,2.6vw,24px)",
                    color: "#1c140e",
                  }}
                >
                  {p.title}
                </h3>

                <div className="mt-6 flex items-center justify-center md:justify-start gap-2 sm:gap-3">
                  <span className="h-[6px] w-[24px] bg-black/80 rounded" />
                  <span
                    className="
                      text-[9px] sm:text-[7px] uppercase
                      tracking-[0.12em] sm:tracking-[0.16em] md:tracking-[0.22em]
                      opacity-80 break-words
                    "
                  >
                    З натурального дерева
                  </span>
                </div>
              </div>
            </div>

            {/* Нижня панель (hug-content, завжди знизу) */}
            <div className="mt-auto px-4 py-3 md:px-6 md:py-3.5 bg-white/8 backdrop-blur-[4px] flex items-center justify-between">
              <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.16em] sm:tracking-[0.2em] md:tracking-[0.25em] opacity-80">
                Beaver Workshop
              </span>
              <span
                className="h-[6px] w-[70px] sm:w-[110px] md:w-[120px] rounded"
                style={{ background: "linear-gradient(90deg,#236a3b,#0d331a)" }}
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
