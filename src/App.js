import "./App.css";
import Home from "./screens/Home";
import { Navbar } from "./components";
import { Routes, Route } from "react-router-dom";
import Mockman from "mockman-js";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path='/mockman'
          element={
            <div className='MockAPI'>
              {" "}
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
