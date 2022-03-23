import "./App.css";
import Home from "./screens/Home";
import { Navbar } from "./components";
import { Routes, Route } from "react-router-dom";
import Mockman from "mockman-js";

import { useEffect } from "react";
import { useData } from "./Context/state-context";

import { ProductList } from "./screens/ProductList";
import { getDataFromServer } from "./services/get-data-server";

function App() {
  const { dispatch } = useData();
  useEffect(() => {
    getDataFromServer("/api/products", "get", dispatch, "ADD_TO_PRODUCTS");
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
      </Routes>
    </>
  );
}

export default App;
