type AppProps = {
  category: string;
};

export const ProductCategoryRow: React.FC<AppProps> = ({ category }) => {
  return (
    <tr>
      <th colSpan={2}>{category}</th>
    </tr>
  );
};
