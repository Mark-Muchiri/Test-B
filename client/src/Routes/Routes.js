import { BrowserRouter, Routes, Route } from "react-router-dom";

// ROUTE ELEMENT DIRECTORY
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register"
import Login from "../pages/Login/Login"

function routes() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />}/>
          <Route path="/login" element={<Login />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default routes;
