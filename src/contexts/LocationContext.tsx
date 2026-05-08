import { createContext } from "react";
import { type LocationResponse } from "../hooks/useLocationQuery";

export const LocationContext = createContext<LocationResponse | null>(null);
