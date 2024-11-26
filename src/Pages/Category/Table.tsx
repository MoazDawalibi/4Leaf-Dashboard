


import { useColumns } from "./useTableColumns";
import React from "react";
import DataTable from "../../Layout/Dashboard/Table/DataTable";
import { useGetAllCategory } from "../../api/Category";
import { useFilterState } from "../../Components/Utils/Filter/FilterState";
import { useFilterStateState } from "../../zustand/Filter";

const App: React.FC = () => {
  const { filterState } = useFilterState();
  const { Filter } = useFilterStateState();
  const name = Filter?.name;
  const sort_by = Filter?.sort_by;

  const response = useGetAllCategory({
    pagination: true,
    ...filterState,
    name: filterState.name || name,
    sort_by,
  });

  return <DataTable response={response} useColumns={useColumns} />;
};

export default App;

