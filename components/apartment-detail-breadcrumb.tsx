import Link from "next/link";

type ApartmentDetailBreadcrumbProps = {
  title: string;
};

// Muestra una ruta de navegacion simple para volver al catalogo desde el detalle.
export const ApartmentDetailBreadcrumb = ({ title }: ApartmentDetailBreadcrumbProps) => {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-slate-600">
      <Link
        href="/"
        className="rounded-lg px-2 py-1 transition hover:bg-white hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400"
      >
        Catalogo
      </Link>
      <span aria-hidden>›</span>
      <span className="truncate font-medium text-slate-900">{title}</span>
    </nav>
  );
};
