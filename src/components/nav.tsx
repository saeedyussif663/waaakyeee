export default function Navbar() {
  return (
    <nav className="flex h-20 items-center justify-between border-b border-[#DBDBDB] px-4 md:px-6">
      <img src="/logo.png" alt="" />

      <button className="rounded-[8px] border-[0.5px] border-[#BEBEBE] px-4 py-3 text-[#3D3D3D]">
        Submit a waakye joint
      </button>
    </nav>
  );
}
