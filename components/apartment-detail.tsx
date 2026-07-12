"use client";

import { useState } from "react";
import { Apartment } from "@/components/apartment-data";
import { ApartmentPhotoGallery } from "@/components/apartment-photo-gallery";
import { ApartmentReservationCard } from "@/components/apartment-reservation-card";

type ApartmentDetailProps = {
  apartment: Apartment;
};

// Componente de composición del detalle: galería, contenido y tarjeta de reserva.
export function ApartmentDetail({ apartment }: ApartmentDetailProps) {
  // Índice de la foto visible en la galería superior.
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  // Avanza a la foto anterior en modo circular.
  const handlePreviousPhoto = () => {
    setCurrentPhotoIndex((current) =>
      current === 0 ? apartment.photos.length - 1 : current - 1
    );
  };

  // Avanza a la foto siguiente en modo circular.
  const handleNextPhoto = () => {
    setCurrentPhotoIndex((current) =>
      current === apartment.photos.length - 1 ? 0 : current + 1
    );
  };

  return (
    <main className="min-h-screen bg-[#fff8f6] px-4 py-6 text-slate-950 sm:px-6 lg:px-10">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 lg:gap-8">
        <ApartmentPhotoGallery
          photos={apartment.photos}
          title={apartment.title}
          currentPhotoIndex={currentPhotoIndex}
          onPreviousPhoto={handlePreviousPhoto}
          onNextPhoto={handleNextPhoto}
        />

        <div className="grid gap-6 lg:grid-cols-[1.5fr_0.9fr] lg:gap-8">
          {/* Columna izquierda: información principal del apartamento. */}
          <section className="space-y-6 rounded-[1.8rem] border border-slate-200 bg-white p-5 shadow-[0_18px_50px_rgba(15,23,42,0.08)] sm:p-6 lg:p-7">
            <header className="space-y-3 border-b border-slate-100 pb-6">
              <h1 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                {apartment.title}
              </h1>

              <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-slate-600">
                <p className="font-semibold text-slate-900">★★★★★</p>
                <p className="font-medium text-slate-900">{apartment.rating.toFixed(2)}</p>
                <p>{apartment.reviews} resenas</p>
                <span aria-hidden>•</span>
                <p>{apartment.location}</p>
              </div>
            </header>

            <section className="flex items-center gap-4 border-b border-slate-100 pb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white">
                {apartment.host.avatarLabel}
              </div>
              <div>
                <p className="font-semibold text-slate-900">Anfitrion: {apartment.host.name}</p>
                <p className="text-sm text-slate-600">
                  {apartment.host.yearsHosting} anos como anfitrion
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-lg font-semibold text-slate-900">Servicios</h2>
              {/* Grilla de amenities con icono y etiqueta. */}
              {apartment.amenities.length > 0 ? (
                <div className="grid gap-3 sm:grid-cols-2">
                  {apartment.amenities.map((amenity) => (
                    <div
                      key={amenity.label}
                      className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3"
                    >
                      <span className="text-lg" aria-hidden>
                        {amenity.icon}
                      </span>
                      <p className="text-sm font-medium text-slate-700">{amenity.label}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-600">
                  Este apartamento no tiene servicios cargados todavia.
                </p>
              )}
            </section>
          </section>

          {/* Columna derecha: tarjeta de reserva con precio y huéspedes. */}
          <ApartmentReservationCard
            pricePerNight={apartment.pricePerNight}
            minGuests={apartment.minGuests}
            maxGuests={apartment.maxGuests}
          />
        </div>
      </div>
    </main>
  );
}
