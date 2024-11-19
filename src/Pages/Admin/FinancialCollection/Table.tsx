import React from "react";
import DataTable from "../../../Layout/Dashboard/Table/DataTable";
import { useColumns } from "./useTableColumns";
import { useFilterState } from "../../../Components/Utils/Filter/FilterState";
import { useFilterStateState } from "../../../zustand/Filter";
import { useGetAllFinancialCollection } from "../../../api/financial_collection";
const App: React.FC = () => {
  const { filterState } = useFilterState();
  const { Filter } = useFilterStateState();
  const name = Filter?.name;
  const sort_by = Filter?.sort_by;

  const response = useGetAllFinancialCollection({
    pagination: true,
    name,
    sort_by,
    ...filterState,
  });

  return <DataTable response={response} useColumns={useColumns} />;
};

export default App;
