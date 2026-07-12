import { differenceInCalendarDays, format, startOfToday } from "date-fns";
import { DateRange, DayPicker } from "react-day-picker";

type ApartmentStayPickerProps = {
  stayRange: DateRange | undefined;
  onSelectRange: (range: DateRange | undefined) => void;
};

type StayInfo = {
  nights: number;
  checkIn: Date | undefined;
  checkOut: Date | undefined;
};

export const getStayInfo = (stayRange: DateRange | undefined): StayInfo => {
  const checkIn = stayRange?.from;
  const checkOut = stayRange?.to;
  const nights = checkIn && checkOut ? differenceInCalendarDays(checkOut, checkIn) : 0;

  return { nights, checkIn, checkOut };
};

export const ApartmentStayPicker = ({
  stayRange,
  onSelectRange,
}: ApartmentStayPickerProps) => {
  const stayInfo = getStayInfo(stayRange);

  return (
    <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
        Fechas de estancia
      </p>

      <DayPicker
        mode="range"
        selected={stayRange}
        onSelect={onSelectRange}
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
          Entrada: {stayInfo.checkIn ? format(stayInfo.checkIn, "dd/MM/yyyy") : "Selecciona una fecha"}
        </p>
        <p className="text-xs text-slate-600">
          Salida: {stayInfo.checkOut ? format(stayInfo.checkOut, "dd/MM/yyyy") : "Selecciona una fecha"}
        </p>
        <p className="text-sm font-semibold text-slate-900">
          {stayInfo.nights > 0 ? `${stayInfo.nights} noches` : "Elige un rango para calcular noches"}
        </p>
      </div>
    </div>
  );
};
