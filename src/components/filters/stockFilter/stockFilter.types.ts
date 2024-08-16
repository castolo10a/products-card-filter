export interface StockFilterProps {
    inStock: boolean | null;
    onFilterChange: (inStock: boolean | null) => void;
  }