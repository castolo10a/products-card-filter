import { FC } from "react";
import { Checkbox, Label } from "../../ui";
import { StockFilterProps } from "./stockFilter.types";

export const StockFilter: FC<StockFilterProps> = ({
  inStock,
  onFilterChange,
}) => {
  return (
    <div>
      <h2 className="text-lg font-bold">Stock</h2>
      <Label className="flex items-center gap-2 font-normal">
        <Checkbox
          checked={inStock === true}
          onCheckedChange={() => onFilterChange(inStock === true ? null : true)}
        />
        En stock
      </Label>
      <Label className="flex items-center gap-2 font-normal">
        <Checkbox
          checked={inStock === false}
          onCheckedChange={() =>
            onFilterChange(inStock === false ? null : false)
          }
        />
        Fuera de stock
      </Label>
    </div>
  );
};
