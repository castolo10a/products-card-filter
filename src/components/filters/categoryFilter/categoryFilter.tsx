import { FC } from "react";
import { Checkbox, Label } from "../../ui";
import { CategoryFilterProps } from "./categoryFilter.types";

export const CategoryFilter: FC<CategoryFilterProps> = ({
  categories,
  selectedCategories,
  onFilterChange,
}) => {
  const handleCategoryChange = (category: string) => {
    if (selectedCategories.includes(category)) {
      onFilterChange(selectedCategories.filter((c) => c !== category));
    } else {
      onFilterChange([...selectedCategories, category]);
    }
  };

  return (
    <div>
      <h2 className="text-lg font-bold">Categoría</h2>
      {categories.map((category) => (
        <Label key={category} className="flex items-center gap-2 font-normal">
          <Checkbox
            checked={selectedCategories.includes(category)}
            onCheckedChange={() => handleCategoryChange(category)}
          />
          {category}
        </Label>
      ))}
    </div>
  );
};
