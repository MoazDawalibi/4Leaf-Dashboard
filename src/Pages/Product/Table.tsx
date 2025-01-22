


import { useColumns } from "./useTableColumns";
import React from "react";
import DataTable from "../../Layout/Dashboard/Table/DataTable";
import { useGetAllProduct } from "../../api/Product";
import { useFilterState } from "../../Components/Utils/Filter/FilterState";
import { useFilterStateState } from "../../zustand/Filter";
import { ParamsEnum } from "../../enums/params";
import { useParams } from "react-router-dom";

const App: React.FC = () => {
  const { filterState } = useFilterState();
  const { Filter } = useFilterStateState();
  const name = Filter?.name;
  const sort_by = Filter?.sort_by;
  const { order_id } = useParams<ParamsEnum>();

  const response = useGetAllProduct({
    pagination: true,
    order_id:order_id,
    ...filterState,
    name: filterState.name || name,
    sort_by,
  });

  return <DataTable response={response} useColumns={useColumns} />;
};

export default App;

