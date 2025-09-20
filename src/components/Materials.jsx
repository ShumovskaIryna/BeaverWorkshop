export default function Materials() {
  const materials = [
    {
      id: 1,
      name: 'ЯСЕНЬ',
      description: 'Твердий та довговічний матеріал з виразною текстурою.',
      imageSrc: '/images/ash.png',
    },
    {
      id: 2,
      name: 'ВІЛЬХА',
      description: "М'яке дерево з приємним червонуватим відтінком.",
      imageSrc: '/images/alder.png',
    },
    {
      id: 3,
      name: 'ДУБ',
      description: 'Міцний, стійкий до зношування, з характерною текстурою.',
      imageSrc: '/images/oak.png',
    },
    {
      id: 4,
      name: 'ГОРІХ',
      description: "Має темний відтінок і гарно виглядає в інтер'єрі.",
      imageSrc: '/images/walnut.png',
    },
  ];

  return (
    <section
      id="materials"
      className="relative py-14 w-full bg-cover bg-center"
      style={{ backgroundImage: "url('/images/s2.png')" }}
    >
     <div className="absolute inset-0 bg-[var(--background)]/90"></div>
      <div className="relative z-10">
        {/* Заголовок */}
        <div className="text-center mb-10">
          <h2 className="text-black tracking-wider text-[clamp(22px,5vw,32px)] font-semibold">
            МАТЕРІАЛИ
          </h2>
          <p className="mt-2 px-5 text-[clamp(14px,4.5vw,18px)] text-gray-700">
            Ми працюємо з різними типами деревини для створення якісних виробів
          </p>
        </div>

        {/* Сітка карток */}
        <div className="mx-auto w-[90vw] md:w-[80vw] grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {materials.map((material) => (
            <div
              key={material.id}
              className="flex flex-col items-center text-center p-4 sm:p-6"
            >
              <img
                src={material.imageSrc}
                alt={material.name}
                className="w-[clamp(120px,28vw,180px)] h-auto object-contain mb-3 sm:mb-4"
              />
              <h3 className="text-[clamp(16px,5vw,20px)] font-semibold text-[#2b2b2b] mb-2">
                {material.name}
              </h3>
              <p className="text-[clamp(13px,4vw,15px)] text-gray-600 leading-snug">
                {material.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
