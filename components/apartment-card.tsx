import Image from "next/image";

type Apartment = {
  id: number;
  title: string;
  location: string;
  description: string;
  image: string;
  imageAlt: string;
  nights: number;
  pricePerNight: number;
  rating: number;
  reviews: number;
  guests: number;
  type: "Playa" | "Centro" | "Montana" | "Diseno";
  badge?: string;
};

type ApartmentCardProps = {
  apartment: Apartment;
};

export function ApartmentCard({ apartment }: ApartmentCardProps) {
  const totalPrice = apartment.pricePerNight * apartment.nights;

  return (
    <article className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-[0_18px_50px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(15,23,42,0.14)]">
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
        <Image
          src={apartment.image}
          alt={apartment.imageAlt}
          fill
          sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover"
        />
        {apartment.badge ? (
          <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-900 backdrop-blur">
            {apartment.badge}
          </span>
        ) : null}
      </div>

      <div className="space-y-4 p-5 sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-1">
            <p className="text-sm font-medium text-rose-600">{apartment.location}</p>
            <h2 className="text-lg font-semibold tracking-tight text-slate-950">
              {apartment.title}
            </h2>
          </div>
          <p className="whitespace-nowrap text-sm font-medium text-slate-700">
            {apartment.rating.toFixed(2)} · {apartment.reviews} resenas
          </p>
        </div>

        <p className="text-sm leading-6 text-slate-600">{apartment.description}</p>

        <div className="flex flex-wrap gap-2 text-xs font-medium text-slate-600">
          <span className="rounded-full bg-slate-100 px-3 py-1">{apartment.type}</span>
          <span className="rounded-full bg-slate-100 px-3 py-1">
            Hasta {apartment.guests} huespedes
          </span>
          <span className="rounded-full bg-slate-100 px-3 py-1">
            {apartment.nights} noches
          </span>
        </div>

        <div className="flex items-end justify-between gap-4 border-t border-slate-100 pt-4">
          <div>
            <p className="text-lg font-semibold text-slate-950">{apartment.pricePerNight}€ / noche</p>
            <p className="text-sm text-slate-500">Total estimado {totalPrice}€</p>
          </div>
          <button className="rounded-full bg-slate-950 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800">
            Ver detalle
          </button>
        </div>
      </div>
    </article>
  );
}