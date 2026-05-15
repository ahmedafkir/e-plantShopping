import { useDispatch, useSelector } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeItem,
} from "../redux/CartSlice";

function CartItem({ item }) {
  const dispatch = useDispatch();

  // total cost per item
  const itemTotal = item.price * item.quantity;

  // total cart amount (all items)
  const cartItems = useSelector((state) => state.cart.items);

  const calculateTotalAmount = () => {
    return cartItems.reduce(
      (total, currentItem) =>
        total + currentItem.price * currentItem.quantity,
      0
    );
  };

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} />

      <div className="cart-details">
        <h3>{item.name}</h3>

        <p>Unit Price: ${item.price}</p>

        {/* item total */}
        <p>
          Total: <strong>${itemTotal.toFixed(2)}</strong>
        </p>

        <div className="controls">
          <button onClick={() => dispatch(increaseQuantity(item.id))}>
            +
          </button>

          <span>{item.quantity}</span>

          <button onClick={() => dispatch(decreaseQuantity(item.id))}>
            -
          </button>

          <button
            className="delete-btn"
            onClick={() => dispatch(removeItem(item.id))}
          >
            Delete
          </button>
        </div>

        {/* cart total (required in feedback) */}
        <p className="cart-total">
          Cart Total: <strong>${calculateTotalAmount().toFixed(2)}</strong>
        </p>
      </div>
    </div>
  );
}

export default CartItem;
