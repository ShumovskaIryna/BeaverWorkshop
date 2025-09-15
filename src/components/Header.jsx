import Image from "next/image";

export default function Header() {
  return (
    <>
      <nav className="w-full bg-stone-800 text-white px-8 py-4 flex justify-between items-center shadow">
        <div className="text-xl font-bold">  
            <Image
            src="/images/Logo.png"
            alt="Logo"
            width={150}
            height={100}
            /></div>
        <ul className="flex gap-10 text-sm" 
        style={{ fontFamily: 'Raleway', fontSize: '16px', letterSpacing: '0.01em' }}>
          <li><a href="/" className="hover:underline">Головна</a></li>
          <li><a href="/about" className="hover:underline">Про нас</a></li>
          <li><a href="/portfolio" className="hover:underline">Портфоліо</a></li>
          <li><a href="/contact" className="hover:underline">Контакти</a></li>
        </ul>
        <p><a href="/contact" className="hover:underline">+380676617881</a></p>
      </nav>

    </>
  );
}
