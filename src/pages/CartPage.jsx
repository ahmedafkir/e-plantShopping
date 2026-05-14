import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Header from "../components/Header";
import CartItem from "../components/CartItem";

function CartPage() {
  const items = useSelector((state) => state.cart.items);

  const totalItems = items.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalCost = items.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  return (
    <>
      <Header />

      <div className="cart-page">
        <h1>Shopping Cart</h1>

        <h2>Total Plants: {totalItems}</h2>

        <h2>Total Cost: ${totalCost}</h2>

        <div className="cart-buttons">
          <Link to="/products">
            <button>Continue Shopping</button>
          </Link>

          <button
            onClick={() => alert("Coming Soon")}
          >
            Checkout
          </button>
        </div>

        {items.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
    </>
  );
}

export default CartPage;