import Image from "next/image";

export default function Coatings() {
  const coatings = [
    {
      id: 1,
      name: "ОЛІЯ-ВІСК",
      description:
        "Створює теплий природний вигляд деревини, підкреслює текстуру, приємна на дотик. Ідеально для столів, підвіконь і меблів.",
      imageSrc:
        "https://beaver-workshop-gallery.s3.amazonaws.com/images/oilwax.png",
      tags: ["натуральність", "матовий блиск", "екологічність", "тактильність"],
      keywords: [
        "олія-віск для дерева",
        "натуральне покриття",
        "захист деревини",
        "покриття для столів",
      ],
    },
    {
      id: 2,
      name: "МІЦНИЙ ВІСК",
      description:
        "Додає підвищений захист від подряпин і вологи, надає глянець і гладкість. Добре для дверей та сходинок.",
      imageSrc:
        "https://beaver-workshop-gallery.s3.amazonaws.com/images/strongwax.png",
      tags: ["зносостійкість", "глянець", "вологостійкість", "простий догляд"],
      keywords: [
        "міцний віск для дерева",
        "глянцеве покриття",
        "вологостійке покриття",
        "захист від подряпин",
      ],
    },
    {
      id: 3,
      name: "PU-ЛАК",
      description:
        "Формує прозору захисну плівку з високою стійкістю до зносу. Рекомендовано для сходів, рейок та робочих поверхонь.",
      imageSrc:
        "https://beaver-workshop-gallery.s3.amazonaws.com/images/lacquer.png",
      tags: ["макс. захист", "прозорість", "довговічність", "для сходів"],
      keywords: [
        "поліуретановий лак",
        "прозорий лак для дерева",
        "довговічне покриття",
        "захист дерев’яних сходів",
      ],
    },
    {
      id: 4,
      name: "2K ЕМАЛЬ",
      description:
        "Кольорове двокомпонентне покриття з підвищеною стійкістю до зносу та вологи. Влучний вибір для яскравих інтер’єрів.",
      imageSrc:
        "https://beaver-workshop-gallery.s3.amazonaws.com/images/enamel.png",
      tags: ["кольорова", "двокомпонентна", "міцність", "вологостійкість"],
      keywords: [
        "2K емаль по дереву",
        "кольорова емаль",
        "стійке покриття",
        "фарбування деревини",
      ],
    },
  ];

  // Глобальний список ключових слів блоку (потрапляє у DOM як sr-only)
  const seoKeywords = [
    "покриття для дерева",
    "олія-віск",
    "міцний віск",
    "поліуретановий лак",
    "2K емаль",
    "захист деревини",
    "обробка дерева",
    "дерев’яні сходи покриття",
    "дубові двері покриття",
    "столи з масиву покриття",
    "Beaver Workshop",
  ];

  return (
    <section id="coatings" className="relative py-16 md:py-24 w-full overflow-hidden">

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
            ПОКРИТТЯ
          </h2>
          <div className="mx-auto mt-3 h-[6px] w-[180px] bg-gradient-to-r from-[#236a3b] to-[#0d331a]" />
          <p className="mt-4 px-4 md:px-0 text-[clamp(16px,3.8vw,20px)] opacity-90">
            Обираємо фініш під завдання: натуральний блиск, максимальний захист або колір.
          </p>
        </div>

        {/* Сітка карток — скло */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
          {coatings.map((c) => (
            <article
              key={c.id}
              itemScope
              itemType="https://schema.org/Product"
              className="
                relative rounded-2xl overflow-hidden
                bg-white/10 backdrop-blur-[8px]
                ring-1 ring-white/20 shadow-[0_20px_60px_rgba(0,0,0,0.25)]
                hover:bg-white/14 transition
                p-4 sm:p-5 text-center
              "
            >
              {/* верхній «дерев’яний» штрих */}
              <div
                className="absolute inset-x-6 top-0 h-[6px] rounded-b"
                style={{
                  background:
                    "linear-gradient(90deg, #5a3c22, #7a5231 45%, #5a3c22 100%)",
                  opacity: 0.55,
                  mixBlendMode: "multiply",
                }}
              />

              <div className="mx-auto mb-3 sm:mb-4 relative w-[clamp(120px,28vw,180px)] aspect-[1/1]">
                <Image
                  src={c.imageSrc}
                  alt={c.name}
                  fill
                  sizes="(max-width: 768px) 45vw, 180px"
                  className="object-contain"
                />
              </div>

              <h3
                className="inline-block uppercase font-extrabold leading-tight px-2 py-1 rounded-md"
                style={{
                  background: "linear-gradient(90deg, #E8DCCB 0%, #d9c8a9 100%)",
                  fontSize: "clamp(16px,4.5vw,20px)",
                  color: "#1c140e",
                }}
                itemProp="name"
              >
                {c.name}
              </h3>

              <p
                className="mt-2 text-[clamp(13px,3.8vw,16px)] leading-snug md:leading-normal"
                itemProp="description"
              >
                {c.description}
              </p>

              {/* Чіпи-теги (SEO + UX) */}
              <ul className="mt-3 flex flex-wrap justify-center gap-2">
                {c.tags.map((t) => (
                  <li
                    key={t}
                    className="px-2.5 py-1 text-[11px] tracking-wide rounded-md bg-white/2 backdrop-blur-[3px]"
                  >
                    {t}
                  </li>
                ))}
              </ul>

              {/* Приховані ключові слова під кожен продукт (для SEO-індексації) */}
              <ul className="sr-only">
                {c.keywords.map((k) => (
                  <li key={k}>{k}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {/* Глобальні ключові слова блоку — sr-only */}
        <ul className="sr-only">
          {seoKeywords.map((k) => (
            <li key={k}>{k}</li>
          ))}
        </ul>

        {/* JSON-LD ItemList (SEO) */}
        <script
          type="application/ld+json"
          // @ts-ignore — ручний JSON-LD
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              "name": "Wood Coatings",
              "itemListElement": coatings.map((c, idx) => ({
                "@type": "Product",
                "position": idx + 1,
                "name": c.name,
                "description": c.description,
                "image": c.imageSrc,
                "brand": { "@type": "Brand", "name": "Beaver Workshop" },
                "category": "Wood coating",
              })),
            }),
          }}
        />
      </div>
    </section>
  );
}