"use client";
import BeaverMin from "./../../components/BeaverMin";
import Header from "./../../components/Header";
import Footer from "./../../components/Footer";
import { useEffect, useState } from 'react';

export default function Portfolio() {
  const [images, setImages] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    fetch('/api/images')
      .then(res => res.json())
      .then(data => {
        setImages(data.images);
        setCategories(["all", ...data.categories]);
      });
  }, []);

  const filteredImages =
    filter === "all"
      ? images
      : images.filter((img) => img.category === filter);

  return (
    <main className="min-h-screen flex flex-col items-center">
      <Header />
      <h2 className="text-3xl font-bold mb-6">Портфоліо</h2>
      <BeaverMin />

      {/* Фільтри */}
      <div className="flex flex-wrap gap-4 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded border ${
              filter === cat
                ? "bg-black text-white"
                : "bg-white text-black border-black"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Картинки */}
      <div className="items-center" style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginLeft: '40px'}}>
        {filteredImages.map((img, i) => (
          <img
            key={i}
            src={img.src}
            alt={`img-${i}`}
            style={{ width: 'auto', height: '250px'}}
          />
        ))}
      </div>

      <Footer />
    </main>
  );
}
