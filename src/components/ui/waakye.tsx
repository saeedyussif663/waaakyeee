import { Vendor } from "@/lib/utils";
import { Star } from "lucide-react";
import { Link } from "react-router";

export default function WaakyeCard({
  id,
  image_url,
  name,
  location,
  average_rating,
}: Vendor) {
  const baseUrl = import.meta.env.VITE_BASE_URL;

  return (
    <Link to={`/${id}`} className="flex w-[272px] flex-col gap-2">
      <img
        src={`${baseUrl}${image_url}`}
        className="h-[269px] w-full rounded-[16px] object-cover"
      />
      <div className="space-y-2 text-[#3D3D3D]">
        <p className="font-medium">{name}</p>
        <p className="font-medium">{location?.city}</p>
        <div className="flex items-center gap-2 font-semibold">
          <Star size={20} fill="#FFB627" strokeWidth={0} />
          <p>{average_rating}</p>
        </div>
      </div>
    </Link>
  );
}
