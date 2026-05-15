import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import plants from "../data/plants";
import ProductCard from "./ProductCard";
import { addItem } from "../redux/CartSlice";

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const [addedItems, setAddedItems] = useState({});

  const categories = [
    "Indoor Plants",
    "Flowering Plants",
    "Succulents",
  ];

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));

    setAddedItems((prev) => ({
      ...prev,
      [plant.id]: true,
    }));
  };

  // total items in cart (for navbar badge if needed)
  const totalItems = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <div className="products-container">
      {/* Optional cart counter display */}
      <div className="cart-summary">
        🛒 Cart Items: {totalItems}
      </div>

      {categories.map((category) => {
        const categoryPlants = plants.filter(
          (plant) => plant.category === category
        );

        return (
          <div key={category}>
            <h2 className="category-title">{category}</h2>

            <div className="products-grid">
              {categoryPlants.map((plant) => (
                <div key={plant.id} className="product-card-wrapper">
                  <ProductCard plant={plant} />

                  <div className="product-info">
                    <p>{plant.name}</p>
                    <p>${plant.price}</p>

                    <button
                      className="add-to-cart-btn"
                      onClick={() => handleAddToCart(plant)}
                      disabled={addedItems[plant.id]}
                    >
                      {addedItems[plant.id]
                        ? "Added"
                        : "Add to Cart"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ProductList;
