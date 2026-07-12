type ApartmentGuestCounterProps = {
  guestsCount: number;
  minGuests: number;
  maxGuests: number;
  onDecrease: () => void;
  onIncrease: () => void;
};

// Controla el numero de huespedes respetando limites minimos y maximos del alojamiento.
export const ApartmentGuestCounter = ({
  guestsCount,
  minGuests,
  maxGuests,
  onDecrease,
  onIncrease,
}: ApartmentGuestCounterProps) => {
  const canDecrease = guestsCount > minGuests;
  const canIncrease = guestsCount < maxGuests;

  return (
    <div className="mt-5 space-y-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Huespedes</p>

      <div className="flex items-center justify-between gap-3">
        <button
          type="button"
          aria-label="Reducir huespedes"
          onClick={onDecrease}
          disabled={!canDecrease}
          className="h-10 w-10 rounded-xl border border-slate-300 text-lg font-semibold text-slate-700 transition enabled:hover:border-slate-400 enabled:hover:bg-white disabled:cursor-not-allowed disabled:opacity-40"
        >
          -
        </button>

        <p className="text-lg font-semibold text-slate-950">{guestsCount}</p>

        <button
          type="button"
          aria-label="Aumentar huespedes"
          onClick={onIncrease}
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
  );
};
