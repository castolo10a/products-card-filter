import { useState, FC } from "react";
import {
  SortControls,
  StockFilter,
  PriceFilter,
  CategoryFilter,
} from "../components/filters";
import { Button, EmptyState, Pagination } from "../components/ui";
import { ProductList } from "../components/products";
import { ProductPageProps } from "./productsPage.types";

export const ProductPage: FC<ProductPageProps> = ({
  selectedFilters,
  sortBy,
  currentPage,
  totalPages,
  paginatedProducts,
  onSortChange,
  onFilterChange,
  onPageChange,
  onAddToCart,
}) => {
  const [localFilters, setLocalFilters] = useState(selectedFilters);

  const handleApplyFilters = () => {
    onFilterChange(localFilters);
    onPageChange(1)
  };

  return (
    <div className="p-4">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-1/4 border border-solid rounded-l-lg p-4 lg:mb-0 mb-4 h-full">
          <CategoryFilter
            categories={["Electrónica", "Ropa", "Calzado", "Accesorios"]}
            selectedCategories={localFilters.categories}
            onFilterChange={(categories) =>
              setLocalFilters((prev) => ({ ...prev, categories }))
            }
          />
          <StockFilter
            inStock={localFilters.inStock}
            onFilterChange={(inStock) =>
              setLocalFilters((prev) => ({ ...prev, inStock }))
            }
          />
          <PriceFilter
            priceRange={localFilters.priceRange}
            onFilterChange={(priceRange) =>
              setLocalFilters((prev) => ({ ...prev, priceRange }))
            }
          />
          <Button
            onClick={handleApplyFilters}
            className="mt-4 text-white hover:bg-zinc-600 p-2 rounded"
          >
            Aplicar Filtros
          </Button>
        </div>
        <div className="flex-grow flex flex-col gap-8">
          <div className="flex flex-col lg:flex-row justify-between items-center mb-4">
            <div className="flex flex-col gap-4 lg:gap-8 lg:items-start items-center">
              <h1 className="text-3xl lg:text-5xl font-bold">
                Catálogo de Productos
              </h1>
              <span className="text-gray-600 text-sm lg:text-base text-center lg:text-left">
                Aquí encontrarás una variedad de productos de alta calidad.
              </span>
            </div>
            <SortControls
              sortBy={sortBy}
              onSortChange={onSortChange}
            />
          </div>
          <div className="flex-grow flex flex-col gap-8">
            {paginatedProducts.length > 0 ? (
              <>
                <ProductList
                  products={paginatedProducts}
                  onAddToCart={onAddToCart}
                />
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  handlePageChange={onPageChange}
                />
              </>
            ) : (
              <>
                <EmptyState />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
