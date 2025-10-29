import Link from "next/link";

const services = [
  {
    id: '01',
    title: 'КОНСУЛЬТАЦІЯ + ПРОРАХУНОК',
    description:
      'Безкоштовна консультація та точний прорахунок вартості вашого проєкту. Допоможемо підібрати оптимальні матеріали, дизайн і рішення під ваш бюджет.',
    buttonText: 'Розрахувати вартість',
    image: 'https://beaverworkshop.s3.eu-west-3.amazonaws.com/Images/1b.png',
    link: 'https://t.me/+380955947843',
  },
  {
    id: '02',
    title: 'ПІДБІР МАТЕРІАЛІВ ТА ФУРНІТУРИ',
    description:
      'Добираємо якісні дерев’яні матеріали та фурнітуру для дверей, сходів і меблів. Пропонуємо екологічні рішення, що поєднують стиль і довговічність.',
    buttonText: 'Дізнатися більше',
    image: 'https://beaverworkshop.s3.eu-west-3.amazonaws.com/Images/2b.png',
    link: '#materials',
  },
  {
    id: '03',
    title: 'ВЛАСНЕ ВИРОБНИЦТВО',
    description:
      'Виготовляємо вироби з дерева на власному виробництві — від дверей і сходів до підвіконь та столів. Гарантуємо точність, якість і контроль кожного етапу.',
    buttonText: 'Дізнатися більше',
    image: 'https://beaverworkshop.s3.eu-west-3.amazonaws.com/Images/3b.png',
    link: '/about',
  },
  {
    id: '04',
    title: 'УСТАНОВКА ПІД КЛЮЧ',
    description:
      'Професійний монтаж дерев’яних конструкцій під ключ. Виконуємо встановлення швидко, акуратно і з повним контролем якості.',
    buttonText: 'Переглянути портфоліо',
    image: 'https://beaverworkshop.s3.eu-west-3.amazonaws.com/Images/4b.png',
    link: '/portfolio',
  },
];

export default function ServicesSection() {
  return (
    <section>
      <div className="text-center mb-0 mt-[-50px] lg:mb-15 lg:mt-5">
        <h2 className="text-black px-0 py-0 rounded tracking-wider text-[clamp(32px,8vw,36px)] font-semibold">
          ПОСЛУГИ
        </h2>
      </div>

      <div className="w-[90vw] md:w-[80vw] mx-auto space-y-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col lg:flex-row items-center justify-between gap-6"
          >
        {/* ID */}
          <div className="lg:w-2/10 flex justify-center lg:justify-center mb-[-50px]">
            <div
              className="font-bold text-[clamp(52px,16vw,96px)] text-[#4e3f3f]"
              style={{
                WebkitTextStroke: "2px #3C2C20"
              }}
            >
              {service.id}
            </div>
          </div>
            {/* Text */}
            <div className="lg:w-6/10 space-y-3">
              <h3 className="text-[clamp(24px,6vw,24px)] font-semibold uppercase">
                <hr key={index} className="my-10 text-[#3C2C20]" />
                {service.title}
              </h3>
              <p className="text-[clamp(18px,5vw,24px)] leading-snug">
                {service.description}
              </p>
              <Link
                href={service.link}
                    className="relative flex justify-center px-10 py-4 mt-6 rounded-full
                  text-[clamp(16px,4vw,20px)] font-semibold tracking-wide
                  text-white transition-all duration-300
                  border border-black
                  bg-gradient-to-b from-[#44895D] to-[#004017]
                  shadow-inner
                  before:absolute before:inset-0 before:rounded-full
                  before:shadow-[inset_0_3px_3px_rgba(255,255,255,0.7),inset_0_-3px_3px_rgba(0,0,0,0.7)]
                  before:pointer-events-none
                  hover:brightness-110 hover:scale-[1.05]">
                {service.buttonText}
              </Link>
            </div>

            {/* Image */}
            <div className="lg:w-3/10 flex justify-center">
              <img
                src={service.image}
                alt={service.title}
                className="rounded-xl w-auto h-80 object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
