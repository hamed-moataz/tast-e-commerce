import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./compoents/Navbar";
import ProductList from "./compoents/ProductList";
import About from "./compoents/About";
import ProductDetils from "./compoents/ProductDetils";

function App() {
  return (
    <>
      <div className="app">
          <Navbar />
          <Routes >
            <Route path="/" element={<ProductList />} />
            <Route path="/about" element={<About />} />
            <Route path="/product/:productId" element={<ProductDetils />} />

          </Routes>
      </div>
    </>
  );
}

export default App;
