"use client";

import { useState } from "react";
import { DateRange } from "react-day-picker";
import { ApartmentGuestCounter } from "@/components/apartment-guest-counter";
import { ApartmentReservationTotal } from "@/components/apartment-reservation-total";
import { ApartmentStayPicker, getStayInfo } from "@/components/apartment-stay-picker";

type ApartmentReservationCardProps = {
  pricePerNight: number;
  minGuests: number;
  maxGuests: number;
};

// Tarjeta lateral de reserva con control de huéspedes y CTA principal.
export const ApartmentReservationCard = ({
  pricePerNight,
  minGuests,
  maxGuests,
}: ApartmentReservationCardProps) => {
  // Estado local del contador de huéspedes, inicializado en el mínimo permitido.
  const [guestsCount, setGuestsCount] = useState(minGuests);
  const [stayRange, setStayRange] = useState<DateRange | undefined>();
  const stayInfo = getStayInfo(stayRange);

  return (
    <aside className="sticky top-6 rounded-[1.6rem] border border-slate-200 bg-white p-5 shadow-[0_24px_60px_rgba(15,23,42,0.10)] sm:p-6">
      <p className="text-sm font-medium text-slate-500">Reserva</p>
      <p className="mt-1 text-3xl font-semibold tracking-tight text-slate-950">
        {pricePerNight}€
        <span className="text-base font-medium text-slate-500"> / noche</span>
      </p>

      <ApartmentGuestCounter
        guestsCount={guestsCount}
        minGuests={minGuests}
        maxGuests={maxGuests}
        onDecrease={() => setGuestsCount((current) => current - 1)}
        onIncrease={() => setGuestsCount((current) => current + 1)}
      />

      <ApartmentStayPicker stayRange={stayRange} onSelectRange={setStayRange} />

      <ApartmentReservationTotal pricePerNight={pricePerNight} nights={stayInfo.nights} />

      <button
        type="button"
        disabled={stayInfo.nights === 0}
        className="mt-5 w-full rounded-2xl bg-rose-500 px-5 py-3 text-sm font-semibold text-white transition enabled:hover:bg-rose-600 disabled:cursor-not-allowed disabled:bg-rose-300"
      >
        {/* CTA placeholder para flujo de reserva futuro. */}
        Reservar ahora
      </button>
    </aside>
  );
};
