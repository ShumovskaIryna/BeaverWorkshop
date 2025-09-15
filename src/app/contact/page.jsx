import Header from "./../../components/Header"
import ContactForm from "./../../components/ContactForm"
import BeaverMin from "./../../components/BeaverMin"

export default function Contact() {
  return (
    <main className="min-h-screen flex flex-col items-center">
     <Header/>
     <BeaverMin/>
      <ContactForm/>
    </main>
  );
}