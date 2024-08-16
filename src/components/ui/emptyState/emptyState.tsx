import { FC } from "react";
import { EmptyStateProps } from "./emptyState.types";

export const EmptyState: FC<EmptyStateProps> = ({
  message = "No se han encontrado productos.",
  imageUrl = "https://cdn-icons-png.flaticon.com/512/17569/17569021.png",
}) => {
  return (
    <div className="flex flex-col items-center justify-center h-full p-4 text-center">
      <img
        src={imageUrl}
        alt="No products found"
        className="w-1/2 max-w-md mb-4"
      />
      <p className="text-lg text-gray-600">{message}</p>
    </div>
  );
};
