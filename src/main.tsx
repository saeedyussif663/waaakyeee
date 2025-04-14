import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./components/layout";
import "./index.css";
import AddWaakye from "./pages/add-waakye";
import Homepage from "./pages/homepage";
import Waakyedetail from "./pages/waakye-detail";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <Homepage /> },
      { path: "submit", element: <AddWaakye /> },
      { path: ":id", element: <Waakyedetail /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>,
);
