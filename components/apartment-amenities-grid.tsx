import { ApartmentAmenity } from "@/components/apartment-data";

type ApartmentAmenitiesGridProps = {
  amenities: ApartmentAmenity[];
};

// Presenta los servicios disponibles en formato de grilla y maneja estado vacio.
export const ApartmentAmenitiesGrid = ({ amenities }: ApartmentAmenitiesGridProps) => {
  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold text-slate-900">Servicios</h2>
      {amenities.length > 0 ? (
        <div className="grid gap-3 sm:grid-cols-2">
          {amenities.map((amenity) => (
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
  );
};
