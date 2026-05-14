import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const items = useSelector((state) => state.cart.items);

  const totalItems = items.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <header className="header">
      <h2>Paradise Nursery</h2>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Plants</Link>
        <Link to="/cart">🛒 {totalItems}</Link>
      </nav>
    </header>
  );
}

export default Header;