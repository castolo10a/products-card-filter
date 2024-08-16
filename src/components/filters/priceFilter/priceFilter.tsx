import { FC, useState } from "react";
import { Button } from "../../ui";
import { PriceFilterProps } from "./priceFilter.types";

export const PriceFilter: FC<PriceFilterProps> = ({
  priceRange,
  onFilterChange,
}) => {
  const minRange = 0;
  const maxRange = 1000;

  const [minPrice, setMinPrice] = useState(priceRange[0]);
  const [maxPrice, setMaxPrice] = useState(priceRange[1]);

  const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (value <= maxPrice) {
      setMinPrice(value);
    }
  };

  const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (value >= minPrice) {
      setMaxPrice(value);
    }
  };

  const handleApply = () => {
    onFilterChange([minPrice, maxPrice]);
  };

  return (
    <div>
      <h2 className="text-lg font-bold mb-2">Precio</h2>
      <div className="flex gap-4 items-center">
        <input
          type="number"
          min={minRange}
          max={maxRange}
          value={minPrice}
          onChange={handleMinPriceChange}
          className="form-input border border-solid rounded px-2"
          placeholder="Min"
        />
        <span>-</span>
        <input
          type="number"
          min={minPrice}
          max={maxRange}
          value={maxPrice}
          onChange={handleMaxPriceChange}
          className="form-input border border-solid rounded px-2"
          placeholder="Max"
        />
      </div>
      <Button
        onClick={handleApply}
        className="mt-4 text-white hover:bg-blue-600 p-2 rounded"
      >
        Aplicar
      </Button>
    </div>
  );
};
