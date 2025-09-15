const services = [
  {
    id: '01',
    title: 'КОНСУЛЬТАЦІЯ + ПРОРАХУНОК',
    description: 'Ми пропонуємо індивідуальний підхід до кожного проекту. Наша спеціалізація -  створення вражаючих та функціональних рішень як для комерційних, так і для житлових будівель. Наші професійні дизайнери забезпечать вам естетично задоволення та практичну використовуваність кожного, зробленого нами, елементу інтер’єру.',
    buttonText: 'Розрахувати вартість',
    image: '/images/s1.png',
  },
  {
    id: '02',
    title: 'ПІДБІР МАТЕРІАЛІВ ТА ФУРНІТУРИ',
    description: "Об'єднанням наших фахівців із вибору матеріалів і предметів інтер`єру забезпечується ефективне та економічне рішення для клієнта. Ми допомагаємо вибрати стильні та практичні елементи, що гармонійно доповнять ваш будинок без порушення загального вигляду. Лише з якісні та екологічно чисті матеріали.",
    buttonText: 'Дізнатися більше',
    image: '/images/s2.png',
  },
  {
    id: '03',
    title: 'ВЛАСНЕ ВИРОБНИЦТВО',
    description: 'Ми самостійно виготовляємо кожний елемент інтер’єру, Кожен етап обробки є індивідуальний та унікальний, різьблення, обробка, фарбування, лакування за вашими дизайнами та побажаннями.',
    buttonText: 'Дізнатися більше',
    image: '/images/s3.png',
  },
  {
    id: '04',
    title: 'УСТАНОВКА ПІД КЛЮЧ',
    description: 'Наша послуга забезпечує повний контроль та виконання всіх етапів проекту з мінімальним втручанням з боку замовника.',
    buttonText: 'Переглянути портфоліо',
    image: '/images/s4.png',
  },
];

export default function ServicesSection() {
  return (
    <>
       <div className="text-center mb-12">
        <h2 className="text-black px-4 py-2 rounded tracking-wider text-[2vw]">ПОСЛУГИ</h2>
      </div>
      <div className="w-[80vw] mx-auto space-y-16">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col lg:flex-row items-start justify-between gap-6">
            {/* Текстова частина */}
            <div className="lg:w-1/10 space-y-3">
              <div className="text-[#4e3f3f] font-bold text-[5vw]">{service.id}</div>
            </div>
            <div className="lg:w-6/10 space-y-3">
              <h3 className="text-[1.1vw] font-semibold uppercase text-[#2b2b2b]">{service.title}</h3>
              <p className="text-[0.95vw] text-gray-700">{service.description}</p>
              <button className="border text-[0.8vw] border-black text-black px-6 py-2 mt-4 rounded-full hover:bg-black hover:text-white transition">
                {service.buttonText}
              </button>
            </div>
            {/* Зображення */}
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
    </>
  );
}