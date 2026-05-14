import { useDispatch } from "react-redux";

import {
  increaseQuantity,
  decreaseQuantity,
  removeItem,
} from "../redux/CartSlice";

function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} />

      <div>
        <h3>{item.name}</h3>

        <p>Unit Price: ${item.price}</p>

        <p>Total: ${item.price * item.quantity}</p>

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