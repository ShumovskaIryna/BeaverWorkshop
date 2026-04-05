"use client";
import { useEffect, useState, useCallback } from "react";
import Header from "./../../components/Header";
import Footer from "./../../components/Footer";
import BeaverMin from "./../../components/BeaverMin";

const ACCENT = {
  grad: "linear-gradient(90deg, #236a3b 0%, #0d331a 100%)",
  beigeGrad: "linear-gradient(90deg, rgb(255,239,216) 0%, rgb(167,149,115) 100%)",
  woodStripe: "linear-gradient(90deg, #5a3c22, #7a5231 45%, #5a3c22 100%)",
};

export default function Portfolio() {
  const [images, setImages] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filter, setFilter] = useState("Сходи");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // lightbox
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  // pagination
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(16);

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

  const filtered = filter === "Всі" ? images : images.filter((i) => i.category === filter);

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

  const goTo = (p) => setPage(Math.min(Math.max(1, p), totalPages));
  const prevPage = () => goTo(page - 1);
  const nextPage = () => goTo(page + 1);

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
    <main className="min-h-screen flex flex-col items-center relative">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.12] mix-blend-soft-light"
        style={{
          backgroundImage: `
            radial-gradient(ellipse at 20% 0%, rgba(255,255,255,0.06), transparent 60%),
            linear-gradient(90deg, rgba(40,28,18,0.35) 1px, transparent 1px),
            linear-gradient(180deg, rgba(40,28,18,0.12) 1px, transparent 1px)
          `,
          backgroundSize: "100% 100%, 140px 100%, 100% 80px",
        }}
      />

      <Header />

      <section className="w-full py-20 md:py-20 relative z-[1]">
        <div className="mx-auto w-[92vw] md:w-[86vw]">
        <div className="text-center mb-12">
          <h2
            className="font-black leading-[0.9]"
            style={{
              fontSize: "clamp(32px,8vw,80px)",
              WebkitTextStroke: "2px #7a5231",
              color: "transparent",
            }}
          >
            ПОРТФОЛІО
          </h2>
          <div className="mx-auto mt-3 h-[6px] w-[200px] bg-gradient-to-r from-[#236a3b] to-[#0d331a]" />
        </div>

          <div className="mt-6 flex justify-center">
            <BeaverMin />
          </div>

          {/* Фільтри */}
          <div className="mt-8 mb-8 flex gap-3 overflow-x-auto no-scrollbar justify-center">
            {categories.map((cat) => {
              const active = filter === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`
                    whitespace-nowrap rounded-full px-4 py-2 text-[clamp(14px,4.5vw,16px)] transition
                    ring-1 ring-white/20 backdrop-blur-[6px]
                    ${active
                      ? "text-[#1c140e] bg-[rgb(255,239,216)]"
                      : "text-white bg-white/10 hover:bg-white/16"
                    }
                  `}
                  style={active ? { background: ACCENT.beigeGrad } : undefined}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Стани */}
          {loading && <p className="text-center text-white/80">Завантаження…</p>}
          {error && <p className="text-center text-red-400">{error}</p>}
          {!loading && !error && filtered.length === 0 && (
            <p className="text-center text-white/80">Немає зображень у цій категорії.</p>
          )}

          {/* Сітка карток */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {pageItems.map((img, i) => (
              <button
                key={`${img.src}-${i}`}
                onClick={() => openLightbox(i)}
                className="
                  group relative overflow-hidden rounded-2xl aspect-[4/3]
                  bg-white/10 backdrop-blur-[6px] ring-1 ring-white/20
                  shadow-[0_14px_40px_rgba(0,0,0,0.25)]
                  hover:bg-white/14 transition
                "
                aria-label="Відкрити зображення"
              >
                {/* верхній «дерев’яний» штрих */}
                <div
                  className="absolute inset-x-4 top-0 h-[6px] rounded-b"
                  style={{ background: ACCENT.woodStripe, opacity: 0.55 }}
                />

                <img
                  src={img.src}
                  alt="portfolio"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />
                <span
                  className="absolute bottom-2 left-2 text-[8px] md:text-[8px] uppercase tracking-widest px-2 py-1 rounded-md"
                  style={{ background: "rgba(255,239,216,.4)", color: "#1c140e" }}
                >
                  {(img.category || "Портфоліо") + " з дерева"}
                </span>
              </button>
            ))}
          </div>

          {/* Пагінація */}
          {totalPages > 1 && (
            <div className="mt-10 flex items-center justify-center gap-2 sm:gap-3">
              <button
                onClick={prevPage}
                disabled={page === 1}
                className={`
                  rounded-full px-4 py-2 text-sm sm:text-base transition backdrop-blur-[6px] ring-1 ring-white/20
                  ${page === 1
                    ? "opacity-40 cursor-not-allowed bg-white/10 text-white"
                    : "bg-white/10 hover:bg-white/16 text-white"
                  }
                `}
                aria-label="Попередня сторінка"
              >
                ‹
              </button>

              {visiblePages.map((p, idx) =>
                p === "…" ? (
                  <span key={`dots-${idx}`} className="px-2 text-white/60">…</span>
                ) : (
                  <button
                    key={p}
                    onClick={() => goTo(p)}
                    className={`
                      rounded-full px-4 py-2 text-sm sm:text-base transition backdrop-blur-[6px] ring-1 ring-white/20
                      ${p === page
                        ? "text-[#1c140e]"
                        : "text-white bg-white/10 hover:bg-white/16"
                      }
                    `}
                    style={p === page ? { background: ACCENT.beigeGrad } : undefined}
                    aria-current={p === page ? "page" : undefined}
                  >
                    {p}
                  </button>
                )
              )}

              <button
                onClick={nextPage}
                disabled={page === totalPages}
                className={`
                  rounded-full px-4 py-2 text-sm sm:text-base transition backdrop-blur-[6px] ring-1 ring-white/20
                  ${page === totalPages
                    ? "opacity-40 cursor-not-allowed bg-white/10 text-white"
                    : "bg-white/10 hover:bg-white/16 text-white"
                  }
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
              alt="full"
              className="max-h-[90vh] w-auto object-contain rounded-2xl shadow-[0_30px_80px_rgba(0,0,0,0.5)] ring-1 ring-white/20"
            />

            <button
              onClick={closeLightbox}
              className="absolute -top-4 -right-4 h-11 w-11 rounded-full bg-white/90 text-black text-xl font-bold hover:bg-white shadow-lg"
              aria-label="Закрити"
            >
              ×
            </button>

            <button
              onClick={prev}
              className="absolute left-[-18px] top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white/85 hover:bg-white text-black text-2xl font-semibold shadow-lg"
              aria-label="Попереднє"
            >
              ‹
            </button>
            <button
              onClick={next}
              className="absolute right-[-18px] top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white/85 hover:bg-white text-black text-2xl font-semibold shadow-lg"
              aria-label="Наступне"
            >
              ›
            </button>

            <span
              className="absolute bottom-[-14px] left-1/2 -translate-x-1/2 text-[11px] md:text-[12px] uppercase tracking-widest px-3 py-1 rounded-full shadow-md"
              style={{ background: "rgba(255,239,216,.95)", color: "#1c140e" }}
            >
              {(filtered[activeIndex].category || "Портфоліо") + " з дерева"}
            </span>
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}
