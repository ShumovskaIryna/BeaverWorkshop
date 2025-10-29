import Image from "next/image";

export default function Coatings() {
  const coatings = [
    {
      id: 1,
      name: "ОЛІЯ-ВІСК",
      description:
        "Створює теплий, природний вигляд деревини та приємну на дотик поверхню",
      imageSrc: "https://beaverworkshop.s3.eu-west-3.amazonaws.com/Images/oilwax.png",
    },
    {
      id: 2,
      name: "МІЦНИЙ ВІСК",
      description:
        "Створює додатковий захист від подряпин і вологи, додає блиску та гладкості.",
      imageSrc: "https://beaverworkshop.s3.eu-west-3.amazonaws.com/Images/strongwax.png",
    },
    {
      id: 3,
      name: "ПОЛІУРЕТАНОВИЙ ЛАК",
      description:
        "Міцне прозоре покриття, що утворює захисну плівку та забезпечує довговічність.",
      imageSrc: "https://beaverworkshop.s3.eu-west-3.amazonaws.com/Images/lacquer.png",
    },
    {
      id: 4,
      name: "2K ЕМАЛЬ",
      description:
        "Кольорове, стійке до зносу та вологи покриття, ідеальне для яскравих інтер'єрів.",
      imageSrc: "https://beaverworkshop.s3.eu-west-3.amazonaws.com/Images/enamel.png",
    },
  ];

  return (
    <section id="coatings" className="py-14 w-full relative">
      {/* Заголовок */}
      <div className="text-center mb-10">
        <h2 className="tracking-wider text-[clamp(32px,8vw,36px)] font-semibold">
          ПОКРИТТЯ
        </h2>
      </div>

      {/* Сітка карток */}
      <div className="mx-auto w-[90vw] md:w-[80vw] grid grid-cols-2 lg:grid-cols-4 gap-1 sm:gap-2">
        {coatings.map((coating) => (
          <div
            key={coating.id}
            className="flex flex-col items-center text-center p-4"
          >
            <img
              src={coating.imageSrc}
              alt={coating.name}
              className="w-[clamp(120px,28vw,180px)] h-auto object-contain mb-3 sm:mb-4"
            />
            <h3 className="text-[clamp(16px,5vw,20px)] font-semibold mb-2">
              {coating.name}
            </h3>
            <p className="text-[clamp(14px,4vw,18px)] leading-snug">
              {coating.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}