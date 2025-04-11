import { Copyright } from "lucide-react";
import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="mx-auto mt-auto flex h-12 w-full max-w-6xl items-center justify-between border-t border-[#CDCDCD] pt-6 text-lg text-[#1A1A1A]">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <Copyright />
          <p>2025</p>
        </div>
        <p className="hover:text-[#1A1A1A]/50">waakye</p>
      </div>
      <div className="flex items-center gap-2 md:gap-6">
        <Link to={"#"} className="hover:text-[#1A1A1A]/50">
          Terms of Use
        </Link>
        <Link to={"#"} className="hover:text-[#1A1A1A]/50">
          Privacy Policy
        </Link>
      </div>
    </footer>
  );
}
