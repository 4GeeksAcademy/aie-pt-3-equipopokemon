"use client";

import { useState } from "react";

type ApartmentReservationCardProps = {
  pricePerNight: number;
  minGuests: number;
  maxGuests: number;
};

// Tarjeta lateral de reserva con control de huéspedes y CTA principal.
export function ApartmentReservationCard({
  pricePerNight,
  minGuests,
  maxGuests,
}: ApartmentReservationCardProps) {
  // Estado local del contador de huéspedes, inicializado en el mínimo permitido.
  const [guestsCount, setGuestsCount] = useState(minGuests);

  // Flags para habilitar/deshabilitar los botones según límites.
  const canDecrease = guestsCount > minGuests;
  const canIncrease = guestsCount < maxGuests;

  return (
    <aside className="sticky top-6 rounded-[1.6rem] border border-slate-200 bg-white p-5 shadow-[0_24px_60px_rgba(15,23,42,0.10)] sm:p-6">
      <p className="text-sm font-medium text-slate-500">Reserva</p>
      <p className="mt-1 text-3xl font-semibold tracking-tight text-slate-950">
        {pricePerNight}€
        <span className="text-base font-medium text-slate-500"> / noche</span>
      </p>

      <div className="mt-5 space-y-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
          Huespedes
        </p>

        <div className="flex items-center justify-between gap-3">
          {/* Disminuye huéspedes sin bajar del mínimo. */}
          <button
            type="button"
            aria-label="Reducir huespedes"
            onClick={() => setGuestsCount((current) => current - 1)}
            disabled={!canDecrease}
            className="h-10 w-10 rounded-xl border border-slate-300 text-lg font-semibold text-slate-700 transition enabled:hover:border-slate-400 enabled:hover:bg-white disabled:cursor-not-allowed disabled:opacity-40"
          >
            -
          </button>

          <p className="text-lg font-semibold text-slate-950">{guestsCount}</p>

          {/* Aumenta huéspedes sin superar el máximo. */}
          <button
            type="button"
            aria-label="Aumentar huespedes"
            onClick={() => setGuestsCount((current) => current + 1)}
            disabled={!canIncrease}
            className="h-10 w-10 rounded-xl border border-slate-300 text-lg font-semibold text-slate-700 transition enabled:hover:border-slate-400 enabled:hover:bg-white disabled:cursor-not-allowed disabled:opacity-40"
          >
            +
          </button>
        </div>

        <p className="text-xs text-slate-500">
          Rango permitido: {minGuests} a {maxGuests} huespedes.
        </p>
      </div>

      <button
        type="button"
        className="mt-5 w-full rounded-2xl bg-rose-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-rose-600"
      >
        {/* CTA placeholder para flujo de reserva futuro. */}
        Reservar ahora
      </button>
    </aside>
  );
}
