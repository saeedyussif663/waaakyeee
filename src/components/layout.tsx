import MyApp from "@/context/app-context";
import { Outlet } from "react-router";
import Footer from "./footer";
import Navbar from "./nav";

export default function Layout() {
  return (
    <MyApp>
      <section className="mx-auto flex min-h-screen max-w-[1500px] flex-col">
        <Navbar />
        <Outlet />
        <Footer />
      </section>
    </MyApp>
  );
}
