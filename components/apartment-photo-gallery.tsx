import Image from "next/image";

type ApartmentPhotoGalleryProps = {
  photos: string[];
  title: string;
  currentPhotoIndex: number;
  onPreviousPhoto: () => void;
  onNextPhoto: () => void;
};

// Galería controlada por props: recibe índice actual y handlers de navegación.
export const ApartmentPhotoGallery = ({
  photos,
  title,
  currentPhotoIndex,
  onPreviousPhoto,
  onNextPhoto,
}: ApartmentPhotoGalleryProps) => {
  const hasPhotos = photos.length > 0;
  const safeIndex = hasPhotos
    ? Math.min(Math.max(currentPhotoIndex, 0), photos.length - 1)
    : 0;

  return (
    <section className="space-y-4">
      {/* Imagen principal del apartamento según el índice activo. */}
      <div className="relative aspect-[4/3] overflow-hidden rounded-[1.8rem] border border-slate-200 bg-slate-100 shadow-[0_24px_70px_rgba(15,23,42,0.12)]">
        {hasPhotos ? (
          <Image
            src={photos[safeIndex]}
            alt={`${title} - foto ${safeIndex + 1}`}
            fill
            sizes="(min-width: 1024px) 70vw, 100vw"
            className="object-cover"
            priority
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-slate-100 p-6 text-center text-sm font-medium text-slate-500">
            Este apartamento aun no tiene fotos disponibles.
          </div>
        )}
      </div>

      {/* Controles de navegación manual y contador de posición. */}
      <div className="flex items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-white p-3 sm:p-4">
        <button
          type="button"
          onClick={onPreviousPhoto}
          aria-label="Foto anterior"
          disabled={!hasPhotos}
          className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
        >
          Anterior
        </button>

        <p className="text-sm font-medium text-slate-600">
          {hasPhotos ? `Foto ${safeIndex + 1} de ${photos.length}` : "Sin fotos"}
        </p>

        <button
          type="button"
          onClick={onNextPhoto}
          aria-label="Foto siguiente"
          disabled={!hasPhotos}
          className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
        >
          Siguiente
        </button>
      </div>
    </section>
  );
};
