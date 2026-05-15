import Header from "../components/Header";
import ProductList from "../components/ProductList";

function ProductsPage() {
  return (
    <div className="products-page">
      <Header />

      <main className="products-container">
        <h1>Our Indoor Plants Collection</h1>
        <p>
          Explore a variety of beautiful indoor plants organized by categories.
          Add your favorite plants to your cart easily.
        </p>

        <ProductList />
      </main>
    </div>
  );
}

export default ProductsPage;
