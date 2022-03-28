import { createContext, useReducer, useContext } from "react";
import { useData } from "../stateManage/state-context";

import axios from "axios";

import authReducer from "./auth-reducer";

const AuthContext = createContext();

let initialAuthData = {
  token: "",
  userDetails: "",
  authError: "",
};

const AuthProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(authReducer, initialAuthData);

  const { dispatch } = useData();

  const getUserAuth = async (
    api,
    email,
    password,
    firstName = null,
    lastName = null
  ) => {
    console.log(api);
    try {
      const {
        data: { encodedToken, foundUser, createdUser },
        status,
        error,
      } = await axios({
        method: "post",
        url: api,
        data: {
          email: email,
          password: password,
          firstName: firstName,
          lastName: lastName,
        },
      });

      localStorage.setItem("token", encodedToken);
      console.log(encodedToken);
      if (status === 200) {
        authDispatch({
          type: "ADD_TOKEN",
          payload: encodedToken,
        });
        authDispatch({
          type: "ADD_USER_DATA",
          payload: foundUser,
        });
        dispatch({
          type: "ADD_PRODUCT_INTO_CART",
          payload: foundUser.cart,
        });
        dispatch({
          type: "ADD_PRODUCT_INTO_WISHLIST",
          payload: foundUser.wishlist,
        });
      } else if (status === 201) {
        authDispatch({
          type: "ADD_TOKEN",
          payload: encodedToken,
        });
        authDispatch({
          type: "ADD_USER_DATA",
          payload: createdUser,
        });
        dispatch({
          type: "ADD_PRODUCT_INTO_CART",
          payload: createdUser.cart,
        });
        dispatch({
          type: "ADD_PRODUCT_INTO_WISHLIST",
          payload: createdUser.wishlist,
        });
      } else {
        authDispatch({
          type: "ADD_AUTH_ERROR",
          payload: error || "Email or password is incorrect!",
        });
      }
    } catch (error) {
      authDispatch({
        type: "ADD_AUTH_ERROR",
        payload: "Email or password is incorrect!",
      });
      console.error(error);
    }
  };

  return (
    <AuthContext.Provider value={{ getUserAuth, authState, authDispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);
export { useAuth, AuthProvider };
