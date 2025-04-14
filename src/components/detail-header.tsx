import { ChevronLeft, MapPin } from "lucide-react";
import { useNavigate } from "react-router";

export default function WaakyeDetailHeader() {
  const navigate = useNavigate();
  return (
    <article className="fixed top-20 z-10 min-w-screen bg-white">
      <div className="flex items-center justify-between gap-4 border-b border-[#DBDBDB] px-2 py-5 md:px-6">
        <div
          className="flex cursor-pointer items-center gap-1"
          onClick={() => navigate(-1)}
        >
          <ChevronLeft size={20} />
          <p className="text-sm font-medium text-[#667185]">Back</p>
        </div>

        <div className="flex items-center justify-center gap-2 text-sm text-[#3D3D3D] sm:text-base">
          <MapPin size={20} />
          <p>Kasoa</p>
        </div>
      </div>
    </article>
  );
}
