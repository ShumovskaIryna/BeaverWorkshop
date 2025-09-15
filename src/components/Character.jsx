"use client"
import { useEffect, useState } from 'react';

export default function Character() {
  const [showBeaver, setShowBeaver] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  // const [isButtonClicked, setIsButtonClicked] = useState(false);

  // const handleButtonClick = () => {
  //   setIsButtonClicked(true);
  // };

  useEffect(() => {
    setTimeout(() => {
      setShowBeaver(true);
    }, 500);
  }, []);

  useEffect(() => {
    // Обробка скролу
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsScrolled(true);  // зменшуємо
      } else {
        setIsScrolled(false); // повертаємо
      }
    };
       window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); // очищення
  }, []);

  return (
    <div className="relative">
    
      {/* Beaver */}
      {showBeaver && (
        <div
          className={`fixed bottom-5 right-4 sm:right-10 lg:right-[120px] z-50 animate-character transition-transform duration-500 ease-in-out ${
            isScrolled ? "scale-character" : ""
          }`}
        >
          <img
            src="/images/Beaver.png"
            alt="Персонаж"
            className="w-[30vw] sm:w-[60vw] md:w-[30vw] h-auto"
          />
        </div>
      )}
        {/* <div className="absolute right-[120px] bottom-[50px] z-50">
          <button
            onClick={handleButtonClick}
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
          >
            Так, я хочу отримати допомогу
          </button>
        </div> */}

      {/* {isButtonClicked && (
        <div className="mt-8">
          <h2 className="text-2xl text-center text-primary">Форма зворотного зв'язку</h2>
        </div>
      )} */}
    </div>
  );
}