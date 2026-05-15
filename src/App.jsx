import { Routes, Route, Link } from "react-router-dom";

import ProductsPage from "./pages/ProductsPage";
import CartPage from "./pages/CartPage";

function LandingPage() {
  return (
    <div className="landing-page">
      <div className="overlay">
        <h1>Welcome to Paradise Nursery</h1>

        <p>
          Paradise Nursery offers a beautiful collection of indoor plants
          that bring freshness, peace, and natural beauty into your home.
          Discover high-quality plants carefully selected for every space.
        </p>

        <Link to="/products">
          <button className="get-started-btn">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />

      <Route
        path="/products"
        element={<ProductsPage />}
      />

      <Route
        path="/cart"
        element={<CartPage />}
      />
    </Routes>
  );
}

export default App;
