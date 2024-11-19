import { useColumns } from "./useTableColumns";
import React from "react";
import DataTable from "../../../Layout/Dashboard/Table/DataTable";
import { useFilterState } from "../../../Components/Utils/Filter/FilterState";
import { useFilterStateState } from "../../../zustand/Filter";
import { useGetAllManager } from "../../../api/manager";

const App: React.FC = () => {
  const { filterState } = useFilterState();

  const { Filter } = useFilterStateState();

  const name = Filter?.name;
  const sort_by = Filter?.sort_by;

  const response = useGetAllManager({
    name,
    sort_by,
    pagination: true,
    ...filterState,
  });

  return <DataTable response={response} useColumns={useColumns} />;
};

export default App;
