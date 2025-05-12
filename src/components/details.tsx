import { Vendor } from "@/lib/utils";
import { CalendarDays, MapPin, Phone } from "lucide-react";

export default function Details({
  name,
  is_verified,
  location,
  operating_hours,
  phone_number,
  image_url,
}: Vendor) {
  return (
    <section className="flex flex-col gap-10 md:flex-row md:items-center">
      <img
        src={`${import.meta.env.VITE_BASE_URL}${image_url}`}
        alt="waakye name"
        className="h-[313px] w-[564px] rounded-2xl object-cover"
      />

      <article className="flex-1 space-y-4">
        <div>
          <span
            className={`rounded-[4px] ${is_verified ? "bg-[#D2FFCE] text-[#097100]" : "bg-[#FFCECE] text-[#710000]/80"} px-2 py-1 font-semibold`}
          >
            {is_verified ? "verified" : "not verified"}
          </span>
          <h1 className="mt-2 text-2xl font-semibold text-[#2C2C2C]">{name}</h1>
        </div>

        <article className="flex items-center justify-between">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center justify-between rounded-[8px] border-[0.5px] border-[#C0C0C0] p-3">
              <MapPin color="#6D6D6D" />
            </div>
            <div className="space-y-[5px] text-[#414141]">
              <h5 className="font-semibold">{location.city}</h5>
              <p className="text-xs">{location.street_address}</p>
            </div>
          </div>
        </article>

        <div className="flex items-center gap-2">
          <div className="flex items-center justify-between rounded-[8px] border-[0.5px] border-[#C0C0C0] p-3">
            <CalendarDays size={16} color="#6D6D6D" />
          </div>
          <div className="space-y-[5px] text-[#414141]">
            <h5 className="font-semibold">{operating_hours}</h5>
            {/* <p className="text-xs">{operating_hours}</p> */}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center justify-between rounded-[8px] border-[0.5px] border-[#C0C0C0] p-3">
            <Phone size={16} color="#6D6D6D" />
          </div>

          <p className="font-semibold text-[#414141]">{phone_number}</p>
        </div>
      </article>
    </section>
  );
}
