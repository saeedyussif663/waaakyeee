import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./components/layout";
import "./index.css";
import Waakyedetail from "./pages/waakye-detail";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
  },
  {
    path: "/about",
    element: <Waakyedetail />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>,
);
