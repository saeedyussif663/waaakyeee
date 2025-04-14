import { MapPin, SlidersHorizontal } from "lucide-react";

export default function Header() {
  return (
    <section className="mt-10 flex items-center justify-between border-b border-[#DBDBDB] px-4 py-5 md:px-6">
      {/* search */}
      <div>hello</div>

      {/* location */}
      <article className="flex items-center gap-4">
        <div className="flex items-center justify-center gap-2 rounded-[8px] border border-[#BEBEBE] px-4 py-3 text-[#3D3D3D]">
          <SlidersHorizontal size={16} className="rotate-90" />
          <p>Filter</p>
        </div>

        <div className="size-1 rounded-full bg-[#A8A8A8]"></div>

        <div className="flex items-center gap-2 text-[#3D3D3D]">
          <MapPin size={20} />
          <p>Allow location</p>
        </div>
      </article>
    </section>
  );
}
