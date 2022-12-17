import { Product } from "../models/models";
import { ProductCategoryRow } from "./ProductCategoryRow";
import { ProductRow } from "./ProductRow";

type AppProp = {
  products: Product[];
  inStockOnlyValue: boolean;
  filterTextValue: string;
};

export const ProductTable: React.FC<AppProp> = ({
  products,
  inStockOnlyValue,
  filterTextValue,
}) => {
  let rows: JSX.Element[] = [];
  let prevCategory: string | null = null;

  // this loop only works if product items come categorized already, or else, different approach should be followed...
  products.forEach((product) => {

    // dont include product which doesnt match the search string
    if (!product.name.toLowerCase().includes(filterTextValue.toLowerCase())) return;

    // dont include product which isnt in stock
    if (inStockOnlyValue && !product.stocked) return;

    // create product category row
    if (product.category !== prevCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category}
        />
      );
    }

    // create product row
    rows.push(<ProductRow product={product} key={product.name} />);

    prevCategory = product.category;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>

      <tbody>{rows}</tbody>
    </table>
  );
};
