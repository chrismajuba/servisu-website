import { createContext } from "react";

const ExploreContext = createContext(null);

const ExploreContextProvider = (props) => {
  const contextValue = {};

  return (
    <ExploreContext.Provider value={contextValue}>
      {props.children}
    </ExploreContext.Provider>
  );
};

export default ExploreContextProvider;
