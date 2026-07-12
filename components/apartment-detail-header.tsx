import { Apartment } from "@/components/apartment-data";

type ApartmentDetailHeaderProps = {
  apartment: Apartment;
};

// Renderiza el bloque principal del alojamiento con titulo, rating, resenas y ubicacion.
export const ApartmentDetailHeader = ({ apartment }: ApartmentDetailHeaderProps) => {
  return (
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
  );
};
