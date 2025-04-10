import { Outlet } from "react-router";
import Navbar from "./nav";

export default function Layout() {
  return (
    <section className="mx-auto max-w-[1500px]">
      <Navbar />
      <Outlet />
    </section>
  );
}
