type AppProps = {
  filterTextValue: string;
  inStockOnlyValue: boolean;
  onFilterTextChange: (val: string) => void;
  onInStockOnlyChange: (val: boolean) => void;
};

export const SearchBox: React.FC<AppProps> = ({
  onFilterTextChange,
  onInStockOnlyChange,
  filterTextValue,
  inStockOnlyValue,
}) => {
  return (
    <form>
      <div>
        <input
          type="text"
          placeholder="Search..."
          value={filterTextValue}
          onChange={(e) => onFilterTextChange(e.target.value)}
        />
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={inStockOnlyValue}
            onChange={(e) => onInStockOnlyChange(e.target.checked)}
          />{" "}
          Only show products in stock
        </label>
      </div>
    </form>
  );
};
