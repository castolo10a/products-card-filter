import { ProductPage } from "./pages/productsPage";
import useProducts from "./hooks/useProducts";

const App: React.FC = () => {
  const {
    selectedFilters,
    sortBy,
    currentPage,
    totalPages,
    paginatedProducts,
    handlePageChange,
    handleAddToCart,
    handleFilterChange,
    handleSortChange,
  } = useProducts();

  return (
    <div className="App p-4 h-full">
      <ProductPage
        selectedFilters={selectedFilters}
        sortBy={sortBy}
        currentPage={currentPage}
        totalPages={totalPages}
        paginatedProducts={paginatedProducts}
        onSortChange={handleSortChange}
        onFilterChange={handleFilterChange}
        onPageChange={handlePageChange}
        onAddToCart={handleAddToCart}
      />
    </div>
  );
};

export default App;
