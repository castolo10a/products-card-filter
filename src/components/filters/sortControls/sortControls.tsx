import { FC } from "react";
import { Button } from "../../ui";
import { LuArrowDownUp } from "react-icons/lu";
import { SortControlsProps } from "./sortControls.types";

export const SortControls: FC<SortControlsProps> = ({
  sortBy,
  onSortChange,
}) => {
  return (
    <div className="flex items-center gap-4">
      <Button
        variant={`${sortBy.key === "name" ? "solid" : "outline"}`}
        onClick={() => onSortChange?.("name")}
        className="flex flex-row items-center"
      >
        <LuArrowDownUp className="w-4 h-4 mr-2" />
        Nombre
      </Button>
      <Button
        variant={`${sortBy.key === "price" ? "solid" : "outline"}`}
        onClick={() => onSortChange?.("price")}
        className="flex flex-row items-center"
      >
        <LuArrowDownUp className="w-4 h-4 mr-2" />
        Precio
      </Button>
    </div>
  );
};
