import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/CartSlice";

function ProductCard({ plant }) {
  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.cart.items
  );

  const added = cartItems.find(
    (item) => item.id === plant.id
  );

  return (
    <div className="card">
      <img src={plant.image} alt={plant.name} />

      <h3>{plant.name}</h3>

      <p>${plant.price}</p>

      <button
        disabled={added}
        onClick={() => dispatch(addToCart(plant))}
      >
        {added ? "Added" : "Add to Cart"}
      </button>
    </div>
  );
}

export default ProductCard;