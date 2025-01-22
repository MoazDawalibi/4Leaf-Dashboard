


import { useColumns } from "./useTableColumns";
import React from "react";
import DataTable from "../../Layout/Dashboard/Table/DataTable";
import { useGetAllUsers } from "../../api/users";
import { useFilterState } from "../../Components/Utils/Filter/FilterState";
import { useFilterStateState } from "../../zustand/Filter";

const App: React.FC = () => {
  const { filterState } = useFilterState();
  const { Filter } = useFilterStateState();
  const name = Filter?.name;
  const sort_by = Filter?.sort_by;

  const response = useGetAllUsers({
    pagination: true,
    ...filterState,
    email: filterState.email || name,
    sort_by,
  });

  return <DataTable response={response} useColumns={useColumns} />;
};

export default App;

