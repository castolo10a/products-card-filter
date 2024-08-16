import { FC } from "react";
import { ProductCard } from "../../products";
import { ProductListProps } from "./productsList.types";

export const ProductList: FC<ProductListProps> = ({
  products,
  onAddToCart,
}) => {
  return (
    <ul className="grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-3 gap-8">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
        />
      ))}
    </ul>
  );
};
