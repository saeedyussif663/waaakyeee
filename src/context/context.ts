import React, { createContext, useContext } from "react";

export interface Location {
  longitude: number | null;
  latitude: number | null;
  town: string;
}

interface AppContextType {
  location: Location;
  setLocation: React.Dispatch<React.SetStateAction<Location>>;
  showOverlay: boolean;
  setShowOverlay: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AppContext = createContext<AppContextType>({
  location: {
    longitude: null,
    latitude: null,
    town: "",
  },
  setLocation: () => {},
  showOverlay: false,
  setShowOverlay: () => {},
});

export function useGlobalContext() {
  return useContext(AppContext);
}
