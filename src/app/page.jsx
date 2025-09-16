import Image from "next/image";
import Header from "./../components/Header"
import ServicesSection from "./../components/Services"
import Materials from "./../components/Materials"
import Coatings from "./../components/Coatings"
import ContactForm from "./../components/ContactForm"
import Footer from "./../components/Footer"
import Character from "./../components/Character"
import Hero from "./../components/Hero"

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center">
    <Header/>
    <Hero/>
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
