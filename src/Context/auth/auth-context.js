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

  const getUserLogin = async (email, password) => {
    try {
      const response = await axios.post(`/api/auth/login`, {
        email: email,
        password: password,
      });

      localStorage.setItem("token", response.data.encodedToken);
      console.log("token", response);
      if (response.status === 200) {
        authDispatch({
          type: "ADD_TOKEN",
          payload: response.data.encodedToken,
        });
        authDispatch({
          type: "ADD_USER_DATA",
          payload: response.data.userFound,
        });
      } else {
        authDispatch({
          type: "ADD_ERROR",
          payload: response.error || "Something is Wrong",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider value={{ getUserLogin, authState, authDispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);
export { useAuth, AuthProvider };
