import { useState } from "react";
import { useDispatch } from "react-redux";
import plants from "../data/plants";
import ProductCard from "./ProductCard";
import { addItem } from "../redux/CartSlice";

function ProductList() {
  const dispatch = useDispatch();
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

  return (
    <div className="products-container">
      {categories.map((category) => (
        <div key={category}>
          <h2 className="category-title">{category}</h2>

          <div className="products-grid">
            {plants
              .filter((plant) => plant.category === category)
              .map((plant) => (
                <div key={plant.id}>
                  <ProductCard plant={plant} />

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
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
