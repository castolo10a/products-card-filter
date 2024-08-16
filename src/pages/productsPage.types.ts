import { Product, SortControlsProps } from "../components";

export interface FilterState {
    categories: string[];
    inStock: boolean | null;
    priceRange: number[];
}

export interface ProductPageProps {
  selectedFilters: FilterState;
  sortBy: SortControlsProps['sortBy'];
  currentPage: number;
  totalPages: number;
  paginatedProducts: Product[];
  onSortChange: (key: string) => void;
  onFilterChange: (filters: FilterState) => void;
  onPageChange: (page: number) => void;
  onAddToCart: (product: Product) => void;
}