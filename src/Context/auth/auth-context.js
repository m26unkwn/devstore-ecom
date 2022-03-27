import { createContext, useReducer, useContext } from "react";

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

  const getUserAuth = async (
    email,
    password,
    firstName = null,
    lastName = null
  ) => {
    try {
      const {
        data: { encodedToken, foundUser },
        status,
        error,
      } = await axios({
        method: "post",
        url: `/api/auth/login`,
        data: {
          email: email,
          password: password,
          firstName: firstName,
          lastName: lastName,
        },
      });

      localStorage.setItem("token", encodedToken);

      if (status === 200) {
        authDispatch({
          type: "ADD_TOKEN",
          payload: encodedToken,
        });
        authDispatch({
          type: "ADD_USER_DATA",
          payload: foundUser,
        });
        authDispatch({
          type: "ADD_CART_DATA",
          cartData: foundUser.cart,
        });
        authDispatch({
          type: "ADD_CART_DATA",
          wishlistData: foundUser.wishlist,
        });
      } else if (status !== 200) {
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
