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
  SingleProduct,
  CategoryProducts,
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
        <Route path='/products/:productId' element={<SingleProduct />} />
        <Route
          path='/products/category/:categoryParam'
          element={<CategoryProducts />}
        />
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
        <Route
          path='/wishlist'
          element={
            <PrivateRoute>
              <Wishlist />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
