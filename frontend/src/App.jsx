import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Contact from "./components/Contact";
import Pricing from "./components/Pricing";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import LandingPage from "./pages/LandingPage";
import Footer from "./components/Footer";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import Products from "./pages/Productlist";
import Product from "./components/Product";
import Checkout from "./pages/Checkout";
import Order from "./pages/Order";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
function App() {
  return (
    <Router>
      <NavBar />
      <main>
        <Routes>
          <Route path="/home" element={<LandingPage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/" element={<Products />} />
          <Route path="/product" element={<Product />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/order" element={<Order />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
