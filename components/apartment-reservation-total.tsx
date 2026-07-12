type ApartmentReservationTotalProps = {
  pricePerNight: number;
  nights: number;
};

// Resume el total estimado de la reserva en base al precio por noche y las noches elegidas.
export const ApartmentReservationTotal = ({
  pricePerNight,
  nights,
}: ApartmentReservationTotalProps) => {
  const totalPrice = nights > 0 ? nights * pricePerNight : 0;

  return (
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
  );
};
