import "./App.css";

import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import ProductSingle from "./pages/ProductSingle";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productList" element={<ProductList />} />
          <Route path="/productSingle" element={<ProductSingle />} />

          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
