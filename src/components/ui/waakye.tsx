import { Star } from "lucide-react";
import { Link } from "react-router";

export default function WaakyeCard() {
  return (
    <Link to={"/1"} className="flex w-[272px] flex-col gap-2">
      <img
        src="https://s3-alpha-sig.figma.com/img/a78d/aa17/7fbd6df8b378bccbe6c4608b43e2bd60?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=IWynSAE4ubCGBb3dudWkJXEccb3Ke~U8fjPP4D5xm-4BWLiu7GJhA3m3t54UqwzrF1I92XazLzJ-NzmyphIf4vUlFjm2~B5COFTIluhhZgy-Z23drGJM4QOzJ7fFNliLlmlrcSrbmyn4eDwbO6~MlEh0h4y0RaFLzVkMcScXtCd2VofXmqXBT7YwzZnzgSZyBDwMoJxBccxwQ8eIzhGi9Nk0LHlbChYrxc7r0g5WT4TMWmKQ26SDDDMdDjhX9mZkNgyxwsY7ph8FYtdeZSbceBCi245y65iRlYxB35RJdjdH9QYz7jlCGDBQG2KLZ3k9UKQKGWhm~db-eo0E-AAFkA__"
        className="h-[269px] w-full rounded-[16px] object-cover"
      />
      <div className="space-y-2 text-[#3D3D3D]">
        <p className="font-medium">Hajia Sadia Waakye Special</p>
        <p className="font-medium">Ablekuma</p>
        <div className="flex items-center gap-2 font-semibold">
          <Star size={20} fill="#FFB627" strokeWidth={0} />
          <p>2.4</p>
        </div>
      </div>
    </Link>
  );
}
