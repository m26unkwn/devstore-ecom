import "./App.css";

import { Routes, Route } from "react-router-dom";

import { useEffect } from "react";
import { useData } from "./Context";

import { getDataFromServer } from "./services";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Home, RouteError, ProductList, Footer } from "./screens";
import {
  Cart,
  CategoryProducts,
  FilterProducts,
  Login,
  Navbar,
  PrivateRoute,
  Profile,
  Signup,
  SingleProduct,
  Wishlist,
} from "./components";

function App() {
  const { dispatch } = useData();
  useEffect(() => {
    getDataFromServer(
      "/api/products",
      "get",
      dispatch,
      "ADD_TO_PRODUCTS",
      "products",
    );
  }, [dispatch]);

  return (
    <>
      <div className='app'>
        <ToastContainer theme='colored' autoClose={2000} position='top-right' />
        <Navbar />

        <Routes>
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
