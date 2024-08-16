export interface SortControlsProps {
    sortBy: { key: string; order: 'asc' | 'desc' };
    onSortChange?: (key: string) => void;
  }