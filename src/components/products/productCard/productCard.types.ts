export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    category: string;
    inStock: boolean;
    imageURL: string;
  }
  
export interface ProductCardProps {
    product: Product;
    onAddToCart: (product: Product) => void;
  }