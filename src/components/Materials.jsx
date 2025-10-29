export default function Materials() {
  const materials = [
    {
      id: 1,
      name: 'ЯСЕНЬ',
      description: 'Твердий та довговічний матеріал з виразною текстурою.',
      imageSrc: 'https://beaverworkshop.s3.eu-west-3.amazonaws.com/Images/ashh.png',
    },
    {
      id: 2,
      name: 'ВІЛЬХА',
      description: "М'яке дерево з приємним червонуватим відтінком.",
      imageSrc: 'https://beaverworkshop.s3.eu-west-3.amazonaws.com/Images/ald.png',
    },
    {
      id: 3,
      name: 'ДУБ',
      description: 'Міцний, стійкий до зношування, з характерною текстурою.',
      imageSrc: 'https://beaverworkshop.s3.eu-west-3.amazonaws.com/Images/oakk.png',
    },
    {
      id: 4,
      name: 'ГОРІХ',
      description: "Має темний відтінок і гарно виглядає в інтер'єрі.",
      imageSrc: 'https://beaverworkshop.s3.eu-west-3.amazonaws.com/Images/nut.png',
    },
  ];

  return (
    <section
      id="materials"
      className="relative py-14 w-full bg-cover bg-center"
      style={{ backgroundImage: "url('https://beaverworkshop.s3.eu-west-3.amazonaws.com/Images/s2.png')" }}
    >
     <div className="absolute inset-0 bg-[var(--background)]/80"></div>
      <div className="relative z-10">
        {/* Заголовок */}
        <div className="text-center mb-10">
          <h2 className="tracking-wider text-[clamp(32px,8vw,36px)] font-semibold">
            МАТЕРІАЛИ
          </h2>
          <p className="mt-2 px-5 text-[clamp(18px,5vw,24px)]">
            Ми працюємо з різними типами деревини для створення якісних виробів
          </p>
        </div>

        {/* Сітка карток */}
        <div className="mx-auto w-[90vw] md:w-[80vw] grid grid-cols-2 lg:grid-cols-4 gap-1 sm:gap-2">
          {materials.map((material) => (
            <div
              key={material.id}
              className="flex flex-col items-center text-center p-2 sm:p-5"
            >
              <img
                src={material.imageSrc}
                alt={material.name}
                className="w-[clamp(120px,28vw,180px)] h-auto object-contain mb-3 sm:mb-4"
              />
              <h3 className="text-[clamp(16px,5vw,20px)] font-semibold mb-2">
                {material.name}
              </h3>
              <p className="text-[clamp(14px,4vw,18px)] leading-snug">
                {material.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
