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

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} />

      <div className="cart-details">
        <h3>{item.name}</h3>

        <p>Unit Price: ${item.price}</p>

        {/* Required: total per item */}
        <p>
          Total: <strong>${itemTotal.toFixed(2)}</strong>
        </p>

        <div className="controls">
          <button
            onClick={() =>
              dispatch(increaseQuantity(item.id))
            }
          >
            +
          </button>

          <span>{item.quantity}</span>

          <button
            onClick={() =>
              dispatch(decreaseQuantity(item.id))
            }
          >
            -
          </button>

          <button
            className="delete-btn"
            onClick={() =>
              dispatch(removeItem(item.id))
            }
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
