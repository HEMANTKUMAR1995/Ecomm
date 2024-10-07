import Navbar from "./Components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Cart from "./Pages/Cart/Cart";
import Orders from "./Pages/Orders/Orders";
import Footer from "./Components/Footer/Footer";
import { useState } from "react";
import LoginModal from "./Components/LoginModal/LoginModal";

function App() {
  const [login, setlogin] = useState(false);
  return (
    <>
      {login ? <LoginModal setlogin={setlogin} /> : <></>}
      <div className="app">
        <Navbar setlogin={setlogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<Orders />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
