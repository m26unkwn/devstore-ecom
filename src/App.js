import "./App.css";
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
  FilterProducts,
} from "./components";
import { Routes, Route } from "react-router-dom";
import Mockman from "mockman-js";

import { useEffect } from "react";
import { useData } from "./Context";

import { getDataFromServer } from "./services";

import { Home, RouteError, ProductList, Footer } from "./screens";

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
      <div className='app'>
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
          <Route path='/products/search' element={<FilterProducts />} />

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
          <Route path='*' element={<RouteError />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
