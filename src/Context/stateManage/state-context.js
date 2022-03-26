import { createContext, useReducer, useContext } from "react";
import { stateReducer } from "./state-reducer";

const StateContext = createContext();

let initialSatate = {
  products: [],
  cartItems: [],
  wishlistItems: [],
  selectedFilters: {},
};

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(stateReducer, initialSatate);

  return (
    <>
      <StateContext.Provider value={{ state, dispatch }}>
        {children}
      </StateContext.Provider>
    </>
  );
};

const useData = () => useContext(StateContext);

export { StateProvider, useData };
