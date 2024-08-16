import { FC } from "react";
import { Button } from "../button";
import { PaginationProps } from "./pagination.types";

export const Pagination: FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <div className="flex justify-center gap-2">
      <Button
        className="text-white"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Anterior
      </Button>
      <span className="px-4 py-2">{`Página ${currentPage} de ${totalPages}`}</span>
      <Button
        className="text-white"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Siguiente
      </Button>
    </div>
  );
};
