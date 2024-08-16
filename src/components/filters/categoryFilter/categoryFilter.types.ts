export interface CategoryFilterProps {
    categories: string[];
    selectedCategories: string[];
    onFilterChange: (categories: string[]) => void;
  }