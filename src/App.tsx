import { useState, useEffect } from "react";
import "./App.css";
import { FilterableProductTable } from "./Components/FilterableProductTable";
import { Product } from "./models/models";

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("./products.json")
      .then((response) => response.json())
      .then((data) => setProducts(data.products));
  }, []);

  return (
    <div className="App">
      <FilterableProductTable products={products} />
    </div>
  );
}

export default App;
