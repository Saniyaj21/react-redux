
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import Header from "./components/Header";
const App = () => {


  return (
    <Router>
      <Header />
      <Routes>
        <Route element={<HomePage />} path="/" />
        <Route element={<CartPage />} path="/cart" />
      </Routes>
    </Router>
  )
}

export default App
