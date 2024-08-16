export interface PriceFilterProps {
    priceRange: number[];
    onFilterChange: (priceRange: number[]) => void;
  }