import React from "react";
import DataTable from "../../../Layout/Dashboard/Table/DataTable";
import { useColumns } from "./useTableColumns";
import useSearchQuery from "../../../api/utils/useSearchQuery";
import { useGetAllReseller } from "../../../api/reseller";
import { useFilterState } from "../../../Components/Utils/Filter/FilterState";
import { useFilterStateState } from "../../../zustand/Filter";
const App: React.FC = () => {
  const { filterState } = useFilterState();
  const { Filter } = useFilterStateState();

  const name = Filter?.name;
  const sort_by = Filter?.sort_by;

  const response = useGetAllReseller({
    name,
    sort_by,
    pagination: true,
    ...filterState,
  });

  return <DataTable response={response} useColumns={useColumns} />;
};

export default App;
