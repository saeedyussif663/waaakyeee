import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
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

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={routes} />
    </QueryClientProvider>
  </StrictMode>,
);
