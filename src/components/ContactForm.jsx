      
"use client";
import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("loading");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } else {
      setStatus("error");
    }
  }
  return (
    <>
   <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Форма зворотного зв'язку */}
        <div>
          <div className="text-center">
            <h2 className="text-black px-4 py-2 rounded tracking-wider text-[2vw]">НАПИШІТЬ НАМ</h2>
          </div>
           <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md">
            {/* Ім'я */}
            <div>
              <label htmlFor="name" className="block text-lg font-semibold text-gray-700">Ваше ім'я</label>
                   <input
                   id="name"
                  type="text"
                  placeholder="Ваше ім'я"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                  className="w-full bg-white px-4 py-2 border border-gray-300 rounded-md"
                  data-has-listeners="true"
                />
            </div>
            
            {/* Номер телефону */}
            <div>
              <label htmlFor="phone" className="block text-lg font-semibold text-gray-700">Номер телефону</label>
                <input
                id="phone"
                type="tel"
                placeholder="Введіть ваш номер телефону"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
                className="w-full bg-white px-4 py-2 border border-gray-300 rounded-md"
                data-has-listeners="true"
                />
            </div>
            
            {/* Коментар */}
            <div>
              <label htmlFor="comment" className="block text-lg font-semibold text-gray-700">Коментар</label>
              <textarea
                id="comment"
                placeholder="Повідомлення"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
                rows="5"
                className="w-full bg-white px-4 py-2 border border-gray-300 rounded-md"
                data-has-listeners="true"
              />
            </div>
            
            {/* Кнопка відправити */}
            <button type="submit" className="bg-black text-white p-2">
              Відправити
            </button>
            {status === "success" && <p className="text-green-600">✅ Повідомлення відправлено!</p>}
            {status === "error" && <p className="text-red-600">❌ Сталася помилка</p>}
          </form>
        </div>
        
        {/* Контактна інформація та карта */}
        <div className="flex flex-col items-center">
          {/* Карта */}
          <div className="mb-6 w-full h-[300px] bg-cover rounded-md" style={{ backgroundImage: "url('/images/ukraine-map.jpg')" }}></div>
          
          {/* Контактні дані */}
          <div className="text-center">
            <p className="text-lg font-semibold text-gray-700">Контакти</p>
            <div className="mt-4 space-y-2">
              <p className="text-gray-600">Телефон: +38 (050) 123-45-67</p>
              <p className="text-gray-600">Пошта: example@email.com</p>
              
              {/* Соціальні мережі */}
              <div className="flex justify-center space-x-4 mt-4">
                <a href="https://t.me/your_telegram" target="_blank" rel="noopener noreferrer">
                  <img src="/icons/telegram-icon.svg" alt="Telegram" className="w-8 h-8" />
                </a>
                <a href="https://viber.com/your_viber" target="_blank" rel="noopener noreferrer">
                  <img src="/icons/viber-icon.svg" alt="Viber" className="w-8 h-8" />
                </a>
                <a href="https://instagram.com/your_instagram" target="_blank" rel="noopener noreferrer">
                  <img src="/icons/instagram-icon.svg" alt="Instagram" className="w-8 h-8" />
                </a>
              </div>
            </div>
          </div>
        </div>
            </div>
    </>
  );
}