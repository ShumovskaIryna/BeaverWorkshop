// app/components/Footer.jsx
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#f8f5f2] text-[#3e2f1c] py-10 mt-20">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Логотип та опис */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Beaver Workshop</h2>
          <p>
            Виготовляємо двері, сходи, підвіконня, столи та інші вироби з дерева
            (ясень, дуб, вільха, горіх). Безкоштовна консультація та прорахунок.
          </p>
        </div>

        {/* Меню */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Меню</h3>
          <ul className="space-y-2">
            <li><Link href="/">Головна</Link></li>
            <li><Link href="/portfolio">Портфоліо</Link></li>
            <li><Link href="/contacts">Контакти</Link></li>
            <li><Link href="/about">Про нас</Link></li>
          </ul>
        </div>

        {/* Контакти */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Контакти</h3>
          <p>📞 +380 67 123 45 67</p>
          <p>✉️ info@woodmaster.com</p>
          <p>📍 Київ, Україна</p>
          <p>🕒 Пн–Пт: 9:00–18:00</p>
        </div>

        {/* Соцмережі */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Ми в соцмережах</h3>
          <div className="flex space-x-4 text-2xl">
            <a href="#"></a>
            <a href="#"></a>
            <a href="#"></a>
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-[#d6cfc7] pt-4 text-center text-sm">
        © {new Date().getFullYear()} Beaver Workshop. Всі права захищені.
      </div>
    </footer>
  );
}
