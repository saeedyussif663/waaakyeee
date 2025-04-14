import { CalendarDays, MapPin, MoveUpRight, Phone } from "lucide-react";

export default function Details() {
  return (
    <section className="flex flex-col gap-10 md:flex-row md:items-center">
      <img
        src="https://s3-alpha-sig.figma.com/img/a78d/aa17/7fbd6df8b378bccbe6c4608b43e2bd60?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=IWynSAE4ubCGBb3dudWkJXEccb3Ke~U8fjPP4D5xm-4BWLiu7GJhA3m3t54UqwzrF1I92XazLzJ-NzmyphIf4vUlFjm2~B5COFTIluhhZgy-Z23drGJM4QOzJ7fFNliLlmlrcSrbmyn4eDwbO6~MlEh0h4y0RaFLzVkMcScXtCd2VofXmqXBT7YwzZnzgSZyBDwMoJxBccxwQ8eIzhGi9Nk0LHlbChYrxc7r0g5WT4TMWmKQ26SDDDMdDjhX9mZkNgyxwsY7ph8FYtdeZSbceBCi245y65iRlYxB35RJdjdH9QYz7jlCGDBQG2KLZ3k9UKQKGWhm~db-eo0E-AAFkA__"
        alt="waakye name"
        className="h-[313px] w-[564px] rounded-2xl object-cover"
      />

      <article className="flex-1 space-y-4">
        <div>
          <span className="rounded-[4px] bg-[#D2FFCE] px-2 py-1 font-semibold text-[#097100]">
            verified
          </span>
          <h1 className="mt-2 text-2xl font-semibold text-[#2C2C2C]">
            Hajia Ibrahima Waakye
          </h1>
        </div>

        <article className="flex items-center justify-between">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center justify-between rounded-[8px] border-[0.5px] border-[#C0C0C0] p-3">
              <MapPin color="#6D6D6D" />
            </div>
            <div className="space-y-[5px] text-[#414141]">
              <h5 className="font-semibold">Ablekuma west, market</h5>
              <p className="text-xs">Opposite Trinity Methodist Church</p>
            </div>
          </div>
          <div className="flex items-center justify-between gap-2 rounded-[5px] border-[0.5px] border-[#DBDBDB] bg-[#FAFAFA] px-2 py-1">
            View on map
            <MoveUpRight size={16} />
          </div>
        </article>

        <div className="flex items-center gap-2">
          <div className="flex items-center justify-between rounded-[8px] border-[0.5px] border-[#C0C0C0] p-3">
            <CalendarDays size={16} color="#6D6D6D" />
          </div>
          <div className="space-y-[5px] text-[#414141]">
            <h5 className="font-semibold">Monday - Saturday</h5>
            <p className="text-xs"> 6:00 am - 3:00 pm</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center justify-between rounded-[8px] border-[0.5px] border-[#C0C0C0] p-3">
            <Phone size={16} color="#6D6D6D" />
          </div>

          <p className="font-semibold text-[#414141]">055 012 3220</p>
        </div>
      </article>
    </section>
  );
}
