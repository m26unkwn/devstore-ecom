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
    try {
      const {
        data,
        data: { encodedToken, foundUser, createdUser },
        status,
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
      console.log(data);
      localStorage.setItem("token", data);
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
      } else if (status === 201 && createdUser) {
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
          payload: "Email or password is incorrect!",
        });
      }
    } catch ({
      response: {
        data: { errors },
        status,
      },
    }) {
      if (status === 404) {
        authDispatch({
          type: "ADD_AUTH_ERROR",
          payload: "email is not present",
        });
      } else if (status === 401) {
        authDispatch({
          type: "ADD_AUTH_ERROR",
          payload: "email or  Password is not present",
        });
      } else if (status === 422) {
        authDispatch({
          type: "ADD_AUTH_ERROR",
          payload: "Email is already exist",
        });
      }

      console.error(errors[0]);
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
