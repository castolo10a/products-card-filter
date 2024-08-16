import { FC } from "react";
import { Button } from "../../ui";
import { ProductCardProps } from "./productCard.types";

export const ProductCard: FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <li className="relative group border border-solid rounded-lg p-4">
      <img
        src={product.imageURL}
        alt={product.name}
        width={400}
        height={300}
        className="rounded-lg object-contain w-full aspect-[4/3] group-hover:opacity-50 transition-opacity"
      />
      <div className="flex-1 py-4">
        <h3 className="font-semibold tracking-tight">{product.name}</h3>
        <small className="text-sm leading-none text-muted-foreground">
          {product.description}
        </small>
        <div className="flex items-center justify-between">
          <h4 className="font-semibold">${product.price.toFixed(2)}</h4>
        </div>
      </div>
      <div className="mt-4">
        <Button
          onClick={() => onAddToCart(product)}
          isDisabled={!product.inStock}
          className="text-white"
          variant="solid"
        >
          Agregar al carrito
        </Button>
      </div>
    </li>
  );
};
