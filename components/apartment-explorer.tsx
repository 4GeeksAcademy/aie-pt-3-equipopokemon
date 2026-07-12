"use client";

import { useDeferredValue, useState } from "react";
import { ApartmentCard } from "@/components/apartment-card";

const apartments = [
  {
    id: 1,
    title: "Loft panoramico con terraza privada",
    location: "Barcelona, El Born",
    description:
      "Espacio luminoso con cocina abierta, vistas a la ciudad y check-in autonomo.",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Salon moderno con grandes ventanales y sofa beige",
    nights: 4,
    pricePerNight: 185,
    rating: 4.91,
    reviews: 128,
    guests: 2,
    type: "Centro" as const,
    badge: "Favorito de huespedes",
  },
  {
    id: 2,
    title: "Apartamento frente al mar con balcon",
    location: "Malaga, La Malagueta",
    description:
      "Distribucion abierta, tonos calidos y acceso caminando al paseo maritimo.",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Apartamento con comedor, balcon y vista al mar",
    nights: 6,
    pricePerNight: 230,
    rating: 4.88,
    reviews: 94,
    guests: 4,
    type: "Playa" as const,
    badge: "Superhost",
  },
  {
    id: 3,
    title: "Cabana de diseno entre pinos",
    location: "Navacerrada, Sierra",
    description:
      "Retiro tranquilo con chimenea, banera exenta y ventanales al bosque.",
    image:
      "https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Cabana de madera con ventanales rodeada de arboles",
    nights: 3,
    pricePerNight: 160,
    rating: 4.97,
    reviews: 76,
    guests: 3,
    type: "Montana" as const,
  },
  {
    id: 4,
    title: "Suite creativa en edificio historico",
    location: "Valencia, Ruzafa",
    description:
      "Interiorismo editorial, zona de trabajo y acceso rapido a restaurantes y galerias.",
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Dormitorio de diseno con texturas naturales y luz suave",
    nights: 5,
    pricePerNight: 205,
    rating: 4.84,
    reviews: 63,
    guests: 2,
    type: "Diseno" as const,
    badge: "Nuevo",
  },
  {
    id: 5,
    title: "Casa mediterranea con patio y piscina",
    location: "Alicante, Altea",
    description:
      "Ambiente relajado, exterior privado y cocina familiar para estancias largas.",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Casa blanca mediterranea con piscina y tumbonas",
    nights: 7,
    pricePerNight: 320,
    rating: 4.95,
    reviews: 141,
    guests: 6,
    type: "Playa" as const,
  },
  {
    id: 6,
    title: "Estudio minimalista cerca del casco antiguo",
    location: "Sevilla, Santa Cruz",
    description:
      "Base comoda para explorar la ciudad con almacenaje oculto y mucha luz natural.",
    image:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Estudio minimalista con cama, escritorio y paredes claras",
    nights: 2,
    pricePerNight: 120,
    rating: 4.79,
    reviews: 52,
    guests: 2,
    type: "Centro" as const,
  },
];

const categories = ["Todos", "Playa", "Centro", "Montana", "Diseno"] as const;
type Category = (typeof categories)[number];
type SortOption = "recommended" | "price-asc" | "price-desc" | "rating-desc";

export function ApartmentExplorer() {
  const [query, setQuery] = useState("");
  const [guestCount, setGuestCount] = useState("2");
  const [selectedCategory, setSelectedCategory] = useState<Category>("Todos");
  const [sortOption, setSortOption] = useState<SortOption>("recommended");

  const deferredQuery = useDeferredValue(query.trim().toLowerCase());

  const visibleApartments = apartments
    .filter((apartment) => {
      const matchesQuery =
        deferredQuery.length === 0 ||
        apartment.location.toLowerCase().includes(deferredQuery) ||
        apartment.title.toLowerCase().includes(deferredQuery);

      const matchesGuests = apartment.guests >= Number(guestCount);
      const matchesCategory =
        selectedCategory === "Todos" || apartment.type === selectedCategory;

      return matchesQuery && matchesGuests && matchesCategory;
    })
    .sort((firstApartment, secondApartment) => {
      if (sortOption === "price-asc") {
        return firstApartment.pricePerNight - secondApartment.pricePerNight;
      }

      if (sortOption === "price-desc") {
        return secondApartment.pricePerNight - firstApartment.pricePerNight;
      }

      if (sortOption === "rating-desc") {
        return secondApartment.rating - firstApartment.rating;
      }

      return secondApartment.reviews - firstApartment.reviews;
    });

  return (
    <main className="min-h-screen bg-[#fff8f6] text-slate-950">
      <section className="border-b border-slate-200 bg-[linear-gradient(180deg,_#fff8f6_0%,_#ffffff_100%)] px-4 pb-10 pt-6 sm:px-6 lg:px-10">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-3">
              <span className="inline-flex rounded-full border border-rose-200 bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-rose-600">
                Inspirado en Airbnb
              </span>
              <div className="space-y-2">
                <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
                  Encuentra apartamentos listos para reservar con una busqueda clara y filtros utiles.
                </h1>
                <p className="max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
                  Una home pensada como punto de entrada al catalogo: buscador, categorias, orden por precio y tarjetas informativas con jerarquia visual fuerte.
                </p>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white bg-white/80 p-5 shadow-[0_20px_60px_rgba(15,23,42,0.10)] backdrop-blur sm:p-6 lg:max-w-sm">
              <p className="text-sm font-medium text-slate-500">Resultados visibles</p>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-slate-950">
                {visibleApartments.length}
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Ajusta destino, huespedes y orden para simular la experiencia de exploracion del marketplace.
              </p>
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-4 shadow-[0_18px_50px_rgba(15,23,42,0.08)] sm:p-5">
            <div className="grid gap-3 lg:grid-cols-[1.8fr_0.8fr_0.9fr_auto]">
              <label className="space-y-2 rounded-2xl border border-slate-200 px-4 py-3">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Destino
                </span>
                <input
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Barcelona, Malaga, Sevilla..."
                  className="w-full border-none bg-transparent text-sm text-slate-950 outline-none placeholder:text-slate-400"
                />
              </label>

              <label className="space-y-2 rounded-2xl border border-slate-200 px-4 py-3">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Huespedes
                </span>
                <select
                  value={guestCount}
                  onChange={(event) => setGuestCount(event.target.value)}
                  className="w-full bg-transparent text-sm text-slate-950 outline-none"
                >
                  <option value="1">1+</option>
                  <option value="2">2+</option>
                  <option value="4">4+</option>
                  <option value="6">6+</option>
                </select>
              </label>

              <label className="space-y-2 rounded-2xl border border-slate-200 px-4 py-3">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Ordenar
                </span>
                <select
                  value={sortOption}
                  onChange={(event) => setSortOption(event.target.value as SortOption)}
                  className="w-full bg-transparent text-sm text-slate-950 outline-none"
                >
                  <option value="recommended">Mas recomendados</option>
                  <option value="price-asc">Precio: menor a mayor</option>
                  <option value="price-desc">Precio: mayor a menor</option>
                  <option value="rating-desc">Mejor valorados</option>
                </select>
              </label>

              <button className="rounded-2xl bg-rose-500 px-6 py-4 text-sm font-semibold text-white transition hover:bg-rose-600">
                Buscar
              </button>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {categories.map((category) => {
                const isSelected = selectedCategory === category;

                return (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={[
                      "rounded-full px-4 py-2 text-sm font-medium transition",
                      isSelected
                        ? "bg-slate-950 text-white"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-950",
                    ].join(" ")}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-6 lg:px-10">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-6">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500">Catalogo principal</p>
              <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                Apartamentos destacados
              </h2>
            </div>
            <p className="text-sm text-slate-500">
              {selectedCategory === "Todos"
                ? "Mostrando todas las categorias"
                : `Filtrando por ${selectedCategory.toLowerCase()}`}
            </p>
          </div>

          {visibleApartments.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {visibleApartments.map((apartment) => (
                <ApartmentCard key={apartment.id} apartment={apartment} />
              ))}
            </div>
          ) : (
            <div className="rounded-[2rem] border border-dashed border-slate-300 bg-white p-10 text-center shadow-sm">
              <h3 className="text-xl font-semibold text-slate-950">
                No hay resultados con esos filtros
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Prueba con otra ciudad, reduce el numero de huespedes o vuelve a la categoria general.
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}