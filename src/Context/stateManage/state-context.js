import { createContext, useReducer, useContext } from "react";
import { reducer } from "./state-reducer";

const StateContext = createContext();

let initialSatate = {
  products: [],
  cartItems: [],
  wishlistItems: [],
  selectedFilters: {
    rating: 1,
  },
  allAddress: [],
  orders: [],
};

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialSatate);

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
