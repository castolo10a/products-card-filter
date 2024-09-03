import { useState, useMemo } from "react";
import productsData from "../data/products.json";
import { Product } from "../components/products";
import { FilterState, ProductPageProps } from "../pages/productsPage.types";

const useProducts = () => {
  const [selectedFilters, setSelectedFilters] = useState<FilterState>({
    categories: [],
    inStock: null,
    priceRange: [0, 100],
  });

  const [sortBy, setSortBy] = useState<ProductPageProps["sortBy"]>({
    key: "name",
    order: "asc",
  });

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const products: Product[] = productsData as Product[];

  const filteredProducts = useMemo(() => {
    return products
      .filter((product) => {
        if (selectedFilters.categories.length > 0) {
          return selectedFilters.categories.includes(product.category);
        }
        return true;
      })
      .filter((product) => {
        if (selectedFilters.inStock !== null) {
          return product.inStock === selectedFilters.inStock;
        }
        return true;
      })
      .filter((product) => {
        return (
          product.price >= selectedFilters.priceRange[0] &&
          product.price <= selectedFilters.priceRange[1]
        );
      })
      .sort((a, b) => {
        if (sortBy.key === "name") {
          return sortBy.order === "asc"
            ? a.name.localeCompare(b.name)
            : b.name.localeCompare(a.name);
        } else if (sortBy.key === "price") {
          return sortBy.order === "asc" ? a.price - b.price : b.price - a.price;
        }
        return 0;
      });
  }, [selectedFilters, sortBy, products]);

  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return filteredProducts.slice(start, end);
  }, [filteredProducts, currentPage, itemsPerPage]);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleAddToCart = (product: Product) => {
    alert(`Added to cart: ${product.name}`);
  };

  const handleFilterChange = (filters: FilterState) => {
    setSelectedFilters(filters);
  };

  const handleSortChange = (key: string) => {
    setSortBy((prev) => ({
      key,
      order: prev.key === key && prev.order === "asc" ? "desc" : "asc",
    }));
    handlePageChange(1);
  };

  return {
    selectedFilters,
    sortBy,
    currentPage,
    totalPages,
    paginatedProducts,
    handlePageChange,
    handleAddToCart,
    handleFilterChange,
    handleSortChange,
  };
};

export default useProducts;
