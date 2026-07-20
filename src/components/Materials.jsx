// app/components/Materials.tsx
export default function Materials() {
  const materials = [
    {
      id: 1,
      name: "ЯСЕН",
      description: "Твердий та довговічний матеріал з виразною текстурою.",
      imageSrc: "https://beaver-workshop-gallery.s3.amazonaws.com/images/ashh.png",
    },
    {
      id: 2,
      name: "ВІЛЬХА",
      description: "М'яке дерево з приємним червонуватим відтінком.",
      imageSrc: "https://beaver-workshop-gallery.s3.amazonaws.com/images/ald.png",
    },
    {
      id: 3,
      name: "ДУБ",
      description: "Міцний, стійкий до зношування, з характерною текстурою.",
      imageSrc: "https://beaver-workshop-gallery.s3.amazonaws.com/images/oakk.png",
    },
    {
      id: 4,
      name: "ГОРІХ",
      description: "Має темний відтінок і гарно виглядає в інтер'єрі.",
      imageSrc: "https://beaver-workshop-gallery.s3.amazonaws.com/images/nut.png",
    },
  ];

  return (
    <section
      id="materials"
      className="relative py-10 md:py-10 w-full overflow-hidden"
    >
      <div className="relative z-10 mx-auto w-[92vw] md:w-[86vw]">
        {/* Заголовок */}
        <div className="text-center mb-10 md:mb-14">
          <h2
            className="font-black leading-[0.9]"
            style={{
              fontSize: "clamp(32px,8vw,80px)",
              WebkitTextStroke: "2px #7a5231",
              color: "transparent",
            }}
          >
            МАТЕРІАЛИ
          </h2>
          <div className="mx-auto mt-3 h-[6px] w-[160px] bg-gradient-to-r from-[#236a3b] to-[#0d331a]" />
          <p className="mt-4 px-4 md:px-0 text-[clamp(16px,3.8vw,20px)] opacity-90">
            Ми працюємо з різними типами деревини для створення якісних виробів
          </p>
        </div>

        {/* Сітка карток (hug-height) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
          {materials.map((m) => (
            <article
              key={m.id}
              className="
                relative rounded-2xl
                bg-white/10 backdrop-blur-[8px]
                ring-1 ring-white/20 shadow-[0_20px_60px_rgba(0,0,0,0.25)]
                hover:bg-white/14 transition
                p-4 sm:p-5 text-center
                overflow-visible
              "
            >
              <img
                src={m.imageSrc}
                alt={m.name}
                loading="lazy"
                className="
                  mx-auto mb-3 sm:mb-4 object-contain
                  w-[clamp(120px,26vw,180px)] h-auto
                "
              />

              <h3
                className="inline-block uppercase font-extrabold leading-tight px-3 py-1 rounded-md"
                style={{
                  background: "linear-gradient(90deg, #E8DCCB 0%, #d9c8a9 100%)",
                  fontSize: "clamp(16px,4.5vw,20px)",
                  color: "#1c140e",
                }}
              >
                {m.name}
              </h3>

              {/* ОПИС: дозволяємо повністю розкриватися */}
              <p
                className="
                  mt-2 text-[clamp(13px,3.8vw,16px)]
                  leading-snug md:leading-normal
                  break-words hyphens-auto
                "
              >
                {m.description}
              </p>

              {/* нижня панель тепер у потоці (не absolute) */}
              <div className="mt-4 h-[36px] flex items-center justify-center bg-white/2 backdrop-blur-[4px] rounded-md">
                <span className="text-[10px] tracking-[0.25em] opacity-70">
                  *Натуральне дерево
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
