import Header from "./../components/Header"
import ServicesSection from "./../components/Services"
import Furniture from "./../components/Furniture"
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
        {/* Що виготовляємо */}
        <Furniture/>
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
