import { useState } from "react";
import { Product } from "../models/models";
import { ProductTable } from "./ProductTable";
import { SearchBox } from "./SearchBox";

type AppProp = {
  products: Product[];
};

export const FilterableProductTable: React.FC<AppProp> = ({ products }) => {
  const [filterText, setFilterText] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);

  return (
    <div>
      <SearchBox
        inStockOnlyValue={inStockOnly}
        filterTextValue={filterText}
        onInStockOnlyChange={setInStockOnly}
        onFilterTextChange={setFilterText}
      />

      <ProductTable products={products} inStockOnlyValue={inStockOnly} filterTextValue={filterText} />
    </div>
  );
};
