"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Apartment, getRoomById } from "@/components/apartment-data";
import { ApartmentDetail } from "@/components/apartment-detail";

// Entrada de la ruta /rooms/[id].
// Se delega a un componente interno con key para reiniciar estados al cambiar el id.
export default function RoomDetailsPage() {
  const params = useParams<{ id: string }>();

  return <RoomDetailsContent key={params.id} roomId={params.id} />;
}

type RoomDetailsContentProps = {
  roomId: string;
};

// Orquesta la carga simulada por id y decide qué estado visual renderizar.
function RoomDetailsContent({ roomId }: RoomDetailsContentProps) {
  const [apartment, setApartment] = useState<Apartment | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Convierte el parámetro dinámico a número para buscar en los datos mock.
    const parsedId = Number(roomId);

    // Simula latencia de red antes de resolver la habitación.
    const timeoutId = setTimeout(() => {
      const foundApartment = Number.isNaN(parsedId) ? undefined : getRoomById(parsedId);
      setApartment(foundApartment ?? null);
      setIsLoading(false);
    }, 900);

    // Limpia el timeout si el componente se desmonta o cambia el id.
    return () => clearTimeout(timeoutId);
  }, [roomId]);

  // Estado de carga mientras no se resuelve la habitación.
  if (isLoading) {
    return (
      <main className="min-h-screen bg-[#fff8f6] px-4 py-8 sm:px-6 lg:px-10">
        <div className="mx-auto w-full max-w-5xl rounded-[1.8rem] border border-slate-200 bg-white p-8 text-center shadow-[0_18px_50px_rgba(15,23,42,0.08)]">
          <p className="text-sm font-medium text-slate-500">Cargando habitacion...</p>
          <h1 className="mt-3 text-2xl font-semibold text-slate-900">
            Estamos preparando todos los detalles
          </h1>
        </div>
      </main>
    );
  }

  // Estado de error amigable cuando el id no existe.
  if (!apartment) {
    return (
      <main className="min-h-screen bg-[#fff8f6] px-4 py-8 sm:px-6 lg:px-10">
        <div className="mx-auto w-full max-w-3xl rounded-[1.8rem] border border-slate-200 bg-white p-8 text-center shadow-[0_18px_50px_rgba(15,23,42,0.08)]">
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-slate-500">
            Habitacion no encontrada
          </p>
          <h1 className="mt-3 text-2xl font-semibold text-slate-900">
            No encontramos una habitacion con ese identificador
          </h1>
          <p className="mt-3 text-sm text-slate-600">
            Vuelve al listado para seleccionar una opcion disponible.
          </p>
          <Link
            href="/"
            className="mt-6 inline-flex rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Volver al catalogo
          </Link>
        </div>
      </main>
    );
  }

  // Estado exitoso: renderiza la vista completa del detalle.
  return <ApartmentDetail apartment={apartment} />;
}
