import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/homepage'
import ProductPage from './pages/product'
import Nav from './components/nav'
import Footer from './components/footer'
import ProductCard from "./pages/productcard";
import './App.css'
import "./index.css"

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/product/card" element={<ProductCard />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;