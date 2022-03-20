import "./App.css";
import Home from "./screens/Home";
import { Navbar } from "./components";
import { Routes, Route } from "react-router-dom";
import Mockman from "mockman-js";

import { useEffect } from "react";
import { useData } from "./Context/state-context";

import useAxios from "./hooks/use-axios";
function App() {
  const { dispatch } = useData();
  const [products] = useAxios("/api/products", "get");

  useEffect(() => {
    dispatch({ type: "ADD_TO_PRODUCTS", payload: products });
  }, [dispatch, products]);

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
      </Routes>
    </>
  );
}

export default App;
