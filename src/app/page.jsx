import Image from "next/image";
import Header from "./../components/Header"
import ServicesSection from "./../components/Services"
import Materials from "./../components/Materials"
import Coatings from "./../components/Coatings"
import ContactForm from "./../components/ContactForm"
import Footer from "./../components/Footer"
import Character from "./../components/Character"

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center">
    <Header/>
      <div className="w-[96vw] relative aspect-[16/7] mb-20">
       <Image
          src="/images/MainSt.png"
          alt="Main Photo"
          fill
          className="object-cover"
        />
          <h2 className="absolute right-[-40px] top-6 w-1/2 text-[2.7vw] font-regular leading-tight tracking-wide"
          >
            DOORS & STAIRS & TABLES <br />
            & WINDOWSILLS & SHELVES
          </h2>
          <button className="absolute bottom-0 left-4 sm:left-10 hover:scale-105 transition">
            <Image
              src="/images/BTN.png"
              alt="Замовити"
              width={260}
              height={200}
              className="w-[27vw] h-auto"
            />
          </button>
        </div>

        {/* Beaver */}
         <Character/>
        {/* Послуги */}
        <ServicesSection/>

        <div className="w-full text-center max-w-8xl top-30 relative mb-30">
            <h2 className="text-black px-4 py-2 rounded tracking-wider text-[2vw]">ЩО ВИГОТОВЛЯЄМО</h2>
        </div>
       <div className="relative w-[80vw] aspect-[16/10] mb-16">
          <Image
            src="/images/Types.png"
            alt="Main Photo"
            fill
            className="object-cover rounded-xl"
          />
        </div>
 
        {/* Матеріали */}
        <Materials />
        {/* Покриття */}
        <Coatings />
        {/* Контакти */}
        <ContactForm/>
        {/* Footer */}
        <Footer/>
    </main>
  );
}
