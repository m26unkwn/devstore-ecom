import { createContext, useReducer, useContext } from "react";
import { useData } from "../stateManage/state-context";
import axios from "axios";
import authReducer from "./auth-reducer";
import { useEffect } from "react";

const AuthContext = createContext();

let initialAuthData = {
  token: "",
  userDetails: "",
  authError: "",
};

const AuthProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(authReducer, initialAuthData);
  const { dispatch } = useData();

  useEffect(() => {
    let userData = JSON.parse(localStorage.getItem("userAuthData"));
    if (userData) {
      authDispatch({
        type: "ADD_TOKEN",
        payload: userData.token,
      });
      authDispatch({
        type: "ADD_USER_DATA",
        payload: userData.foundUser,
      });
      dispatch({
        type: "ADD_PRODUCT_INTO_CART",
        payload: userData.foundUser.cart,
      });
      dispatch({
        type: "ADD_PRODUCT_INTO_WISHLIST",
        payload: userData.foundUser.wishlist,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getUserAuth = async (
    api,
    email,
    password,
    cartData = null,
    firstName = null,
    lastName = null
  ) => {
    console.log("cartData aa rha hai kya", cartData);
    try {
      const {
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

      if (status === 200) {
        localStorage.setItem(
          "userAuthData",
          JSON.stringify({
            token: encodedToken,
            foundUser: foundUser,
          })
        );
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

        try {
          let cartResponse = await axios({
            method: "POST",
            url: "/api/user/cart",
            data: { product: cartData },
            headers: { authorization: encodedToken },
          });
          if (status === 200) {
            dispatch({
              type: "ADD_PRODUCT_INTO_CART",
              payload: cartResponse.data.cart,
            });
          }
        } catch (error) {
          console.log("error aa rha hai", error);
        }
      } else if (status === 201 && createdUser) {
        localStorage.setItem(
          "userAuthData",
          JSON.stringify({
            token: encodedToken,
            foundUser: createdUser,
          })
        );
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

  const logoutUser = (e, navigate) => {
    e.preventDefault();
    authDispatch({ type: "LOGOUT_USER" });
    dispatch({ type: "CLEAR_ALL_DATA_FROM_STATE" });
    localStorage.removeItem("userAuthData");
    navigate("/");
  };

  return (
    <AuthContext.Provider
      value={{ logoutUser, getUserAuth, authState, authDispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);
export { useAuth, AuthProvider };
