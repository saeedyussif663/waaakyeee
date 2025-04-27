import { useState } from "react";
import { AppContext, Location } from "./context";

export default function MyApp({ children }: { children: React.ReactNode }) {
  const [location, setLocation] = useState<Location>({
    latitude: null,
    longitude: null,
    town: "",
  });
  const [showOverlay, setShowOverlay] = useState(false);
  return (
    <AppContext.Provider
      value={{ location, setLocation, showOverlay, setShowOverlay }}
    >
      {children}
    </AppContext.Provider>
  );
}
