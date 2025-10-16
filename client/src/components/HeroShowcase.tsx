import React from "react";

type Slide = {
  id: string;
  img: string;
  eyebrow?: string; // “NEW ARRIVALS”
  title: string; // “Sound that goes…”
  ctaText?: string;
  ctaHref?: string;
};

type SideCard = {
  id: string;
  img: string;
  eyebrow?: string; // “WEARABLES”
  title: string; // “Intelligent & Durable…”
  href?: string;
};

const slides: Slide[] = [
  {
    id: "slide1",
    img: "/images/bitoku (2).jpg",
    eyebrow: "Recien Llegado",
    title: "Preparado para ser el proximo espiritu del bosque?",
    ctaText: "Compra Aqui",
    ctaHref: "#",
  },
  {
    id: "slide2",
    img: "/images/hero/laptop.jpg",
    eyebrow: "HOT DEAL",
    title: "Powerful laptops for creators",
    ctaText: "Discover",
    ctaHref: "#",
  },
  {
    id: "slide3",
    img: "/images/hero/console.jpg",
    eyebrow: "GAMING",
    title: "Next-gen fun for everyone",
    ctaText: "Browse",
    ctaHref: "#",
  },
];

const sideCards: SideCard[] = [
  {
    id: "Folders",
    img: "/images/bitoku-organizador.jpg",
    eyebrow: "FOLDERS",
    title: "Para almacenar y organizar tus juegos",
    href: "#",
  },
  {
    id: "protectores",
    img: "/images/bitoku.jpg",
    eyebrow: "PROTECTORES",
    title: "Para proteger tus juegos",
    href: "#",
  },
];

const HeroShowcase: React.FC = () => {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6  lg:px-8  lg:mt-6">
        {/* Grid: en desktop 3 columnas; el carrusel ocupa 2 */}
        <div className="grid gap-4 lg:grid-cols-3 ">
          {/* Carrusel principal */}
          <div className="lg:col-span-2">
            <div className="carousel w-full rounded-2xl bg-base-100 shadow">
              {slides.map((s, i) => {
                const prev = slides[(i - 1 + slides.length) % slides.length].id;
                const next = slides[(i + 1) % slides.length].id;
                return (
                  <div
                    id={s.id}
                    className="carousel-item relative w-full"
                    key={s.id}
                  >
                    {/* contenido */}
                    <div className="flex w-full items-center justify-between lg:gap-6 sm-gap-0 p-6 sm:p-8 flex-col sm:flex-row">
                      <div className="max-w-xl">
                        {s.eyebrow && (
                          <span className="badge badge-info mb-3 lg:ml-4 sm:ml-0 bg-lime-600 text-white border-0">
                            {s.eyebrow}
                          </span>
                        )}
                        <h2 className="text-l font-semibold leading-tight sm:text-3xl lg:text-4xl lg:ml-4 sm:ml-0">
                          {s.title}
                        </h2>
                        {s.ctaText && (
                          <a
                            href={s.ctaHref || "#"}
                            className="btn btn-neutral mt-6 lg:ml-4 sm:ml-0 bg-purple-600 border-0"
                          >
                            {s.ctaText} →
                          </a>
                        )}
                        {/* indicadores (dots) */}
                        <div className=" hidden mt-6 flex items-center gap-2">
                          {slides.map((dot) => (
                            <a
                              key={dot.id}
                              href={`#${dot.id}`}
                              className={`h-2 w-6 rounded-full transition ${
                                dot.id === s.id ? "bg-neutral" : "bg-base-300"
                              }`}
                            />
                          ))}
                        </div>
                      </div>

                      <img
                        src={s.img}
                        alt={s.title}
                        className="block h-80 w-auto shrink-0 object-cover sm:block md:h-72 lg:h-100"
                      />
                    </div>

                    {/* flechas */}
                    <a
                      href={`#${prev}`}
                      className="btn btn-circle btn-sm absolute left-3 top-1/2 -translate-y-1/2"
                      aria-label="Prev"
                    >
                      ❮
                    </a>
                    <a
                      href={`#${next}`}
                      className="btn btn-circle btn-sm absolute right-3 top-1/2 -translate-y-1/2"
                      aria-label="Next"
                    >
                      ❯
                    </a>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Columna derecha: dos tarjetas */}
          <div className="flex flex-col gap-4 h-full">
            {sideCards.map((c) => (
              <a
                key={c.id}
                href={c.href || "#"}
                className="flex-1 flex items-center rounded-2xl bg-base-100 p-2 shadow transition hover:shadow-lg"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={c.img}
                    alt={c.title}
                    className="h-44 w-44 rounded-xl object-cover"
                  />
                  <div>
                    {c.eyebrow && (
                      <p className="text-xs font-semibold text-info">
                        {c.eyebrow}
                      </p>
                    )}
                    <h3 className="text-base font-semibold leading-snug">
                      {c.title}
                    </h3>
                    <span className="mt-2 inline-block text-sm text-base-content/70">
                      Explore →
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroShowcase;
