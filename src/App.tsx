import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/homepage'
import { CartProvider } from "./context/CartContext";
import ProductPage from './pages/productpage'
import Nav from './components/nav'
import Footer from './components/footer'
import ProductDetail from "./pages/productdetail";
import Products from "./pages/products";
import Cart from "./pages/cart";
import TestSanity from "./pages/testSanity";
import ScrollToTop from "./utils/scrollToTop";
import './App.css'
import "./index.css"
import Checkout from "./pages/checkout";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <ScrollToTop />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<TestSanity />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/product/:id" element={
            <>
              <ScrollToTop behave="smooth" />
              <ProductDetail />
              <Products />
            </>
          } />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/test" element={<TestSanity />} />
        </Routes>
        <Footer />
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;