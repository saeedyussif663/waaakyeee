import { Link } from "react-router";

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-20 min-w-screen bg-white">
      <div className="flex h-20 w-full items-center justify-between border-b border-[#DBDBDB] px-4 md:px-6">
        <img src="/logo.png" alt="" />

        <Link
          to={"/submit"}
          className="cursor-pointer rounded-[8px] border-[0.5px] border-[#BEBEBE] px-4 py-3 text-[#3D3D3D]"
        >
          Submit a waakye joint
        </Link>
      </div>
    </nav>
  );
}
