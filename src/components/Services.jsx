import Link from "next/link";

const services = [
  {
    id: '01',
    title: 'КОНСУЛЬТАЦІЯ + ПРОРАХУНОК',
    description:
      'Ми пропонуємо індивідуальний підхід до кожного проекту. Наша спеціалізація -  створення вражаючих та функціональних рішень як для комерційних, так і для житлових будівель. Наші професійні дизайнери забезпечать вам естетично задоволення та практичну використовуваність кожного, зробленого нами, елементу інтер’єру.',
    buttonText: 'Розрахувати вартість',
    image: '/images/s1.png',
    link: '/contact',
  },
  {
    id: '02',
    title: 'ПІДБІР МАТЕРІАЛІВ ТА ФУРНІТУРИ',
    description:
      "Об'єднанням наших фахівців із вибору матеріалів і предметів інтер`єру забезпечується ефективне та економічне рішення для клієнта. Ми допомагаємо вибрати стильні та практичні елементи, що гармонійно доповнять ваш будинок без порушення загального вигляду. Лише з якісні та екологічно чисті матеріали.",
    buttonText: 'Дізнатися більше',
    image: '/images/s2.png',
    link: '#materials',
  },
  {
    id: '03',
    title: 'ВЛАСНЕ ВИРОБНИЦТВО',
    description:
      'Ми самостійно виготовляємо кожний елемент інтер’єру, Кожен етап обробки є індивідуальний та унікальний, різьблення, обробка, фарбування, лакування за вашими дизайнами та побажаннями.',
    buttonText: 'Дізнатися більше',
    image: '/images/s3.png',
    link: '/about',
  },
  {
    id: '04',
    title: 'УСТАНОВКА ПІД КЛЮЧ',
    description:
      'Наша послуга забезпечує повний контроль та виконання всіх етапів проекту з мінімальним втручанням з боку замовника.',
    buttonText: 'Переглянути портфоліо',
    image: '/images/s4.png',
    link: '/portfolio',
  },
];

export default function ServicesSection() {
  return (
    <section className="-mt-8">
      <div className="text-center mb-0 mt-[-80px] lg:mb-15 lg:mt-5">
        <h2 className="text-black px-0 py-0 rounded tracking-wider text-[clamp(20px,5vw,28px)] font-semibold">
          ПОСЛУГИ
        </h2>
      </div>

      <div className="w-[90vw] md:w-[80vw] mx-auto space-y-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col lg:flex-row items-start justify-between gap-6"
          >
        {/* ID */}
          <div className="lg:w-1/10 flex justify-center lg:justify-start">
            <div
              className="font-bold text-[clamp(48px,12vw,80px)] text-[#4e3f3f]"
              style={{
                WebkitTextStroke: "2px #6b4b36"
              }}
            >
              {service.id}
            </div>
          </div>

            {/* Text */}
            <div className="lg:w-6/10 space-y-3">
              <h3 className="text-[clamp(16px,4.5vw,20px)] font-semibold uppercase text-[#2b2b2b]">
                {service.title}
              </h3>
              <p className="text-[clamp(14px,4vw,16px)] leading-snug text-gray-700">
                {service.description}
              </p>
              <Link
                href={service.link}
                className="inline-block border text-[clamp(14px,3.8vw,15px)] border-black text-black px-5 py-2 mt-4 rounded-full hover:bg-black hover:text-white transition"
              >
                {service.buttonText}
              </Link>
            </div>

            {/* Image */}
            <div className="lg:w-6/10">
              <img
                src={service.image}
                alt={service.title}
                className="rounded-xl w-full h-auto object-cover shadow-lg"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
