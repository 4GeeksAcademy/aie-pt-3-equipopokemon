"use client";

import { useState } from "react";
import { Apartment } from "@/components/apartment-data";
import { ApartmentAmenitiesGrid } from "@/components/apartment-amenities-grid";
import { ApartmentDetailBreadcrumb } from "@/components/apartment-detail-breadcrumb";
import { ApartmentDetailHeader } from "@/components/apartment-detail-header";
import { ApartmentHostInfo } from "@/components/apartment-host-info";
import { ApartmentPhotoGallery } from "@/components/apartment-photo-gallery";
import { ApartmentReservationCard } from "@/components/apartment-reservation-card";

type ApartmentDetailProps = {
  apartment: Apartment;
};

// Componente de composición del detalle: galería, contenido y tarjeta de reserva.
export const ApartmentDetail = ({ apartment }: ApartmentDetailProps) => {
  // Índice de la foto visible en la galería superior.
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const photos = apartment.photos ?? [];
  const host = apartment.host ?? { name: "Anfitrion", yearsHosting: 0, avatarLabel: "?" };
  const amenities = apartment.amenities ?? [];
  const minGuests = apartment.minGuests ?? 1;
  const maxGuests = apartment.maxGuests ?? Math.max(minGuests, apartment.guests);

  // Avanza a la foto anterior en modo circular.
  const handlePreviousPhoto = () => {
    if (photos.length === 0) return;
    setCurrentPhotoIndex((current) =>
      current === 0 ? photos.length - 1 : current - 1
    );
  };

  // Avanza a la foto siguiente en modo circular.
  const handleNextPhoto = () => {
    if (photos.length === 0) return;
    setCurrentPhotoIndex((current) =>
      current === photos.length - 1 ? 0 : current + 1
    );
  };

  return (
    <main className="min-h-screen bg-[#fff8f6] px-4 py-6 text-slate-950 sm:px-6 lg:px-10">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 lg:gap-8">
        <ApartmentDetailBreadcrumb title={apartment.title} />

        <ApartmentPhotoGallery
          photos={photos}
          title={apartment.title}
          currentPhotoIndex={currentPhotoIndex}
          onPreviousPhoto={handlePreviousPhoto}
          onNextPhoto={handleNextPhoto}
        />

        <div className="grid gap-6 lg:grid-cols-[1.5fr_0.9fr] lg:gap-8">
          {/* Columna izquierda: información principal del apartamento. */}
          <section className="space-y-6 rounded-[1.8rem] border border-slate-200 bg-white p-5 shadow-[0_18px_50px_rgba(15,23,42,0.08)] sm:p-6 lg:p-7">
            <ApartmentDetailHeader apartment={apartment} />
            <ApartmentHostInfo host={host} />
            <ApartmentAmenitiesGrid amenities={amenities} />
          </section>

          {/* Columna derecha: tarjeta de reserva con precio y huéspedes. */}
          <ApartmentReservationCard
            pricePerNight={apartment.pricePerNight}
            minGuests={minGuests}
            maxGuests={maxGuests}
          />
        </div>
      </div>
    </main>
  );
};
