import { createContext, useContext } from "react";

export const LocationContext = createContext<string | undefined>(undefined);

/**
 * This should be used instead of directly using useContext(LocationContext).
 * It ensures that it is used inside of a provider, and handles the undefined default
 * case.
 */
export function useLocationContext() {
  const context = useContext(LocationContext);

  if (context === undefined) {
    throw new Error("useLocationContext must be used inside a provider.");
  }

  return context;
}
