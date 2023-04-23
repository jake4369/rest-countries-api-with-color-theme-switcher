import { createContext, useState } from "react";

export const LoadedContext = createContext();

export const LoadedProvider = ({ children }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <LoadedContext.Provider value={{ isLoaded, setIsLoaded }}>
      {children}
    </LoadedContext.Provider>
  );
};
