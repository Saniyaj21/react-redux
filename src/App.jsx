
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import Header from "./components/Header";
import { useState } from "react";
import React from "react";
const App = () => {

  const [cartItems, setCartItems] = useState([]);


  return (
    <Router>
      <Header />
      <Routes>
        <Route element={<HomePage cartItems={cartItems} setCartItems={setCartItems} />} path="/" />
        <Route element={<CartPage cartItems={cartItems} setCartItems={setCartItems}/>} path="/cart" />
      </Routes>
    </Router>
  )
}

export default App
