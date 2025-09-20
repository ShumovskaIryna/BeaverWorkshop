import Image from "next/image";

export default function AboutUs() {
  return (
    <section id="about" className="w-full py-12">
      <div className="text-center mb-10">
        <h2 className="text-black tracking-wider text-[clamp(22px,5vw,32px)] font-semibold">
          ПРО НАС
        </h2>
      </div>

      <div className="mx-auto w-[90vw] md:w-[70vw] grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-0">
        {/* Left блок */}
        <div className="flex flex-col gap-6 md:gap-8">
          <div className="relative w-full h-[40vh] rounded-xl overflow-hidden">
            <Image src="/images/stairs1.png" alt="Сходи" fill className="object-cover" />
          </div>
                <h3 className="text-[3vw] font-semibold">275 <span className="text-[1.5vw] font-normal">реалізованих проєктів</span></h3>
                <p className="w-[30vw] text-[0.9vw] leading-relaxed ">
                Наша колекція з більш ніж 275 реалізованих проектів є відображенням довіри власників великих комерційних об'єктів, а також господарів будинків і квартир. Ці проекти свідчать про нашу здатність створювати простори, що не лише вражають естетично, але й відповідають усім потребам і вимогам. Ми завжди раді поділитися з вами зразками наших реальних проектів, щоб ви могли оцінити нашу роботу на власному досвіді.</p>
          <div className="relative w-full h-[40vh] rounded-xl overflow-hidden">
            <Image src="/images/stairs3.png" alt="Клієнти" fill className="object-cover" />
          </div>
                <h3 className="text-[3vw] font-semibold">200+ <span className="text-[1.5vw] font-normal">задоволених клієнтів</span></h3>
                <p className="w-[30vw] leading-relaxed text-[0.9vw]">
                Обслуговування клієнтів і дизайн подібні до мистецтва — обидва вимагають особливого таланту. Наша мета полягає в тому, щоб забезпечити нашим клієнтам найвищий рівень обслуговування. Ми завжди на зв'язку з ними, готові оперативно відповісти на всі їх запитання та потреби
          </p>
        </div>
             {/* Right block */}
        <div className="flex flex-col gap-6 md:gap-8 md:mt-[5vw]">
                <p className="mx-[6vw] w-[30vw] text-[1.2vw] leading-relaxed mb-5">
                У нас власне виробництво. Робота над проектом - це тісний зв'язок між дизайном інтер'єру, підбором якісного матеріалу, інженерним підходом та побажаннями замовника. Організовано чітку та відповідальну роботу.
                Ми - практики. Практично всі наші проекти реалізуються відповідно до проекту. </p>
          <div className="relative w-full h-[40vh] rounded-xl overflow-hidden">
            <Image src="/images/stairs2.png" alt="Проєкти" fill className="object-cover" />
          </div>
                <h3 className="text-[3vw] mx-[6vw] font-semibold">12 <span className="text-[1.5vw] font-normal">років досвіду</span></h3>
                <p className="mx-[6vw] w-[30vw] text-[0.9vw] leading-relaxed mb-5">
                За 12 років нашої роботи ми здійснили безліч успішних проектів, які не лише прикрашають і задовольняють наших клієнтів, але й допомагають у їх повсякденному житті та бізнесі. Наш спектр послуг широкий: від створення перших ескізів до оздоблення кожної дрібниці. Ми гарантуємо створення бажаного затишку, якого ви так давно мріяли!</p>
          <div className="relative w-full h-[40vh] rounded-xl overflow-hidden">
            <Image src="/images/stairs4.png" alt="Досвід" fill className="object-cover" />
          </div>
        </div>
      </div>
   
    </section>
  );
}