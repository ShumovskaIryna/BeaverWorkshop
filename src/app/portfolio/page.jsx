"use client";
import { useEffect, useState, useCallback } from "react";
import Header from "./../../components/Header";
import Footer from "./../../components/Footer";
import BeaverMin from "./../../components/BeaverMin";

export default function Portfolio() {
  const [images, setImages] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filter, setFilter] = useState("Сходи");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // lightbox
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0); // глобальний індекс у filtered

  // pagination
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(16); // 8 (xs), 9 (md), 12 (lg)

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("/api/images");
        if (!res.ok) throw new Error("Помилка завантаження");
        const data = await res.json();
        setImages(data.images || []);
        setCategories(["Всі", ...(data.categories || [])]);
      } catch (e) {
        setError(e.message || "Не вдалося завантажити зображення");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const filtered =
    filter === "Всі" ? images : images.filter((i) => i.category === filter);

  // скидаємо сторінку при зміні фільтра або pageSize
  useEffect(() => {
    setPage(1);
  }, [filter, pageSize]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const startIndex = (page - 1) * pageSize;
  const pageItems = filtered.slice(startIndex, startIndex + pageSize);

  const openLightbox = (idxOnPage) => {
    setActiveIndex(startIndex + idxOnPage);
    setIsOpen(true);
  };
  const closeLightbox = () => setIsOpen(false);

  const next = useCallback(() => {
    if (!filtered.length) return;
    setActiveIndex((i) => (i + 1) % filtered.length);
  }, [filtered.length]);

  const prev = useCallback(() => {
    if (!filtered.length) return;
    setActiveIndex((i) => (i - 1 + filtered.length) % filtered.length);
  }, [filtered.length]);

  // клавіші
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    const original = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = original;
    };
  }, [isOpen, next, prev]);

  // хелпери пагінації
  const goTo = (p) => setPage(Math.min(Math.max(1, p), totalPages));
  const prevPage = () => goTo(page - 1);
  const nextPage = () => goTo(page + 1);

  // будуємо короткий список сторінок: 1 ... cur-1 cur cur+1 ... last
  const visiblePages = (() => {
    const pages = [];
    const push = (x) => pages.push(x);
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) push(i);
    } else {
      const first = 1, last = totalPages;
      const left = Math.max(2, page - 1);
      const right = Math.min(totalPages - 1, page + 1);
      push(first);
      if (left > 2) push("…");
      for (let i = left; i <= right; i++) push(i);
      if (right < totalPages - 1) push("…");
      push(last);
    }
    return pages;
  })();

  return (
    <main className="min-h-screen flex flex-col items-center">
      <Header />

      <section className="w-full py-8">
        <div className="mx-auto w-[90vw] md:w-[80vw]">
          <h2 className="text-center text-black tracking-wider text-[clamp(32px,8vw,36px)] font-semibold mb-4">
            ПОРТФОЛІО
          </h2>
          <BeaverMin />

          {/* Фільтри */}
          <div className="mt-6 mb-6 flex gap-2 overflow-x-auto no-scrollbar">
            {categories.map((cat) => {
              const active = filter === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`whitespace-nowrap rounded-full px-4 py-2 text-[clamp(14px,4.5vw,16px)] transition
                    ${active
                      ? "bg-brand-accent text-white"
                      : "bg-white text-brand-dark border border-black/10 hover:bg-black/5"
                    }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Стани */}
          {loading && <p className="text-center text-gray-600">Завантаження…</p>}
          {error && <p className="text-center text-red-600">{error}</p>}
          {!loading && !error && filtered.length === 0 && (
            <p className="text-center text-gray-600">Немає зображень у цій категорії.</p>
          )}

          {/* Сітка карток */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {pageItems.map((img, i) => (
              <button
                key={`${img.src}-${i}`}
                onClick={() => openLightbox(i)}
                className="group relative aspect-[4/3] overflow-hidden rounded-lg bg-white"
                aria-label="Відкрити зображення"
              >
                <img
                  src={img.src}
                  alt={`portfolio-${i}`}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />
              </button>
            ))}
          </div>

          {/* Пагінація */}
          {totalPages > 1 && (
            <div className="mt-8 flex items-center justify-center gap-2 sm:gap-3">
              <button
                onClick={prevPage}
                disabled={page === 1}
                className={`rounded-full px-3 sm:px-4 py-2 border text-sm sm:text-base
                  ${page === 1 ? "opacity-40 cursor-not-allowed" : "hover:bg-black/5"}
                `}
                aria-label="Попередня сторінка"
              >
                ‹
              </button>

              {visiblePages.map((p, idx) =>
                p === "…" ? (
                  <span key={`dots-${idx}`} className="px-2 text-gray-500">…</span>
                ) : (
                  <button
                    key={p}
                    onClick={() => goTo(p)}
                    className={`rounded-full px-3 sm:px-4 py-2 text-sm sm:text-base
                      ${p === page
                        ? "bg-brand-accent text-white"
                        : "bg-white text-brand-dark border border-black/10 hover:bg-black/5"
                      }`}
                    aria-current={p === page ? "page" : undefined}
                  >
                    {p}
                  </button>
                )
              )}

              <button
                onClick={nextPage}
                disabled={page === totalPages}
                className={`rounded-full px-3 sm:px-4 py-2 border text-sm sm:text-base
                  ${page === totalPages ? "opacity-40 cursor-not-allowed" : "hover:bg-black/5"}
                `}
                aria-label="Наступна сторінка"
              >
                ›
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Лайтбокс */}
      {isOpen && filtered[activeIndex] && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80"
          aria-modal="true"
          role="dialog"
          onClick={closeLightbox}
        >
          <div
            className="relative max-h-[90vh] max-w-[92vw] md:max-w-[86vw] lg:max-w-[80vw]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filtered[activeIndex].src}
              alt={`full-${activeIndex}`}
              className="max-h-[90vh] w-auto object-contain rounded-lg shadow-2xl"
            />

            {/* Закрити */}
            <button
              onClick={closeLightbox}
              className="absolute -top-3 -right-3 h-10 w-10 rounded-full bg-white/90 text-black text-xl font-bold hover:bg-white"
              aria-label="Закрити"
            >
              ×
            </button>

            {/* Стрілки */}
            <button
              onClick={prev}
              className="absolute left-0 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white/80 hover:bg-white text-black text-2xl font-semibold"
              aria-label="Попереднє"
            >
              ‹
            </button>
            <button
              onClick={next}
              className="absolute right-0 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white/80 hover:bg-white text-black text-2xl font-semibold"
              aria-label="Наступне"
            >
              ›
            </button>
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}
