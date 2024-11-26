import { useState, useEffect } from "react";
import { PaginationAntd, PaginationMeta } from "../../types/Table";
import { useFilterStateState } from "../../zustand/Filter";

interface Data {
  pagination: PaginationMeta;
}

const usePagination = (data: Data) => {
  const { Filter, setFilter } = useFilterStateState();

  const [pagination, setPagination] = useState<PaginationAntd>({
    current: data?.pagination?.current_page || 1,
    pageSize: data?.pagination?.per_page || 2,
    total: data?.pagination?.total || 0,
  });

  useEffect(() => {
    setPagination({
      current: data?.pagination?.current_page || 1,
      pageSize: data?.pagination?.per_page || 2,
      total: data?.pagination?.total || 0,
    });
  }, [data]);

  const handlePageChange = (page: number) => {
    setFilter({
      ...Filter,
      page: page,
    });
  };

  return { pagination, handlePageChange };
};

export default usePagination;
