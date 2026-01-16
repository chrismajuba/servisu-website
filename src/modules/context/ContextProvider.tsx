import { createContext, useEffect, useState, ReactNode } from "react";

/**
 * Context value interface
 */
export interface APIContextValue {
  isLoading: boolean;
  setIsloading: (loading: boolean) => void;
}

export const APIContext = createContext<APIContextValue | null>(null);

interface ContextProviderProps {
  children: ReactNode;
}

export const ContextProvider = (props: ContextProviderProps) => {
  const [isLoading, setIsloading] = useState<boolean>(false);

  const contextValue: APIContextValue = {
    isLoading,
    setIsloading
  };

  return (
    <APIContext.Provider value={contextValue}>
      {props.children}
    </APIContext.Provider>
  );
};

