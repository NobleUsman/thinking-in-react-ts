import { Product } from "../models/models";

type AppProps = {
  product: Product;
};

export const ProductRow: React.FC<AppProps> = ({ product }) => {
  let name = !product.stocked ? (
    <span className="not-in-stock">{product.name}</span>
  ) : (
    <span>{product.name}</span>
  );

  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
};
