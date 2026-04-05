import Header from "./../../components/Header"
import AboutUs from "./../../components/AboutUs"
import Footer from "./../../components/Footer"
import BeaverMin from "./../../components/BeaverMin"

export default function About() {
  return (
    <main className="min-h-screen flex flex-col items-center">
    <Header/>
    <BeaverMin/>
    <AboutUs />
    {/* Footer */}
    <Footer/>
    </main>
  );
}