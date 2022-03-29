import "./App.css";
import Home from "./screens/Home";
import {
  Navbar,
  Login,
  Signup,
  PrivateRoute,
  Profile,
  Cart,
  Wishlist,
} from "./components";
import { Routes, Route } from "react-router-dom";
import Mockman from "mockman-js";

import { useEffect } from "react";
import { useData } from "./Context/stateManage/state-context";

import { ProductList } from "./screens/ProductList";
import { getDataFromServer } from "./services";

function App() {
  const { dispatch } = useData();
  useEffect(() => {
    getDataFromServer(
      "/api/products",
      "get",
      dispatch,
      "ADD_TO_PRODUCTS",
      "products"
    );
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path='/mockman'
          element={
            <div className='MockAPI'>
              <Mockman />
            </div>
          }
        />
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<ProductList />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route
          path='/profile'
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route
          path='/cart'
          element={
            <PrivateRoute>
              <Cart />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
