import { ApartmentHost } from "@/components/apartment-data";

type ApartmentHostInfoProps = {
  host: ApartmentHost;
};

export const ApartmentHostInfo = ({ host }: ApartmentHostInfoProps) => {
  return (
    <section className="flex items-center gap-4 border-b border-slate-100 pb-6">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white">
        {host.avatarLabel}
      </div>
      <div>
        <p className="font-semibold text-slate-900">Anfitrion: {host.name}</p>
        <p className="text-sm text-slate-600">{host.yearsHosting} anos como anfitrion</p>
      </div>
    </section>
  );
};
