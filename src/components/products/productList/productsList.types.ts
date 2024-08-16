import { Product } from "../productCard/productCard.types";

export interface ProductListProps {
    products: Product[];
    onAddToCart: (product: Product) => void;
  }