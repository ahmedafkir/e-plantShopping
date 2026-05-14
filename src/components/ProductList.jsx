import plants from "../data/plants";
import ProductCard from "./ProductCard";

function ProductList() {
  const categories = [
    "Indoor Plants",
    "Flowering Plants",
    "Succulents",
  ];

  return (
    <div className="products-container">
      {categories.map((category) => (
        <div key={category}>
          <h2 className="category-title">
            {category}
          </h2>

          <div className="products-grid">
            {plants
              .filter((plant) => plant.category === category)
              .map((plant) => (
                <ProductCard
                  key={plant.id}
                  plant={plant}
                />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;