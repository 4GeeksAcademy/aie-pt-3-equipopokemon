"use client";

import { useState } from "react";
import { differenceInCalendarDays, format, startOfToday } from "date-fns";
import { DateRange, DayPicker } from "react-day-picker";

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
  const [stayRange, setStayRange] = useState<DateRange | undefined>();

  // Flags para habilitar/deshabilitar los botones según límites.
  const canDecrease = guestsCount > minGuests;
  const canIncrease = guestsCount < maxGuests;

  const checkIn = stayRange?.from;
  const checkOut = stayRange?.to;
  const nights = checkIn && checkOut ? differenceInCalendarDays(checkOut, checkIn) : 0;
  const totalPrice = nights > 0 ? nights * pricePerNight : 0;

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

      <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
          Fechas de estancia
        </p>

        <DayPicker
          mode="range"
          selected={stayRange}
          onSelect={setStayRange}
          disabled={{ before: startOfToday() }}
          className="mt-3"
          classNames={{
            months: "flex justify-center",
            month: "space-y-3",
            month_caption: "flex items-center justify-center gap-2",
            caption_label: "text-sm font-semibold text-slate-900",
            nav: "flex items-center gap-1",
            button_previous:
              "h-8 w-8 rounded-lg border border-slate-200 text-slate-700 transition hover:bg-white",
            button_next:
              "h-8 w-8 rounded-lg border border-slate-200 text-slate-700 transition hover:bg-white",
            weekdays: "grid grid-cols-7 gap-1",
            weekday:
              "text-center text-[0.7rem] font-semibold uppercase tracking-[0.1em] text-slate-500",
            week: "grid grid-cols-7 gap-1",
            day: "h-9 w-9 p-0",
            day_button:
              "h-9 w-9 rounded-lg text-sm font-medium text-slate-700 transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400",
            selected: "bg-rose-500 text-white hover:bg-rose-500",
            range_middle: "bg-rose-100 text-rose-700",
            today: "font-semibold text-slate-900",
            disabled: "text-slate-300 line-through",
          }}
        />

        <div className="mt-3 space-y-1 rounded-xl border border-slate-200 bg-white p-3">
          <p className="text-xs text-slate-600">
            Entrada: {checkIn ? format(checkIn, "dd/MM/yyyy") : "Selecciona una fecha"}
          </p>
          <p className="text-xs text-slate-600">
            Salida: {checkOut ? format(checkOut, "dd/MM/yyyy") : "Selecciona una fecha"}
          </p>
          <p className="text-sm font-semibold text-slate-900">
            {nights > 0 ? `${nights} noches` : "Elige un rango para calcular noches"}
          </p>
        </div>
      </div>

      <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-4">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Total</p>
        <p className="mt-1 text-lg font-semibold text-slate-950">
          {totalPrice > 0 ? `${totalPrice}€` : "Selecciona fechas"}
        </p>
        {totalPrice > 0 ? (
          <p className="text-xs text-slate-500">
            {pricePerNight}€ x {nights} noches
          </p>
        ) : (
          <p className="text-xs text-slate-500">El total se calcula segun el rango seleccionado.</p>
        )}
      </div>

      <button
        type="button"
        disabled={nights === 0}
        className="mt-5 w-full rounded-2xl bg-rose-500 px-5 py-3 text-sm font-semibold text-white transition enabled:hover:bg-rose-600 disabled:cursor-not-allowed disabled:bg-rose-300"
      >
        {/* CTA placeholder para flujo de reserva futuro. */}
        Reservar ahora
      </button>
    </aside>
  );
}
