import { useColumns } from "./useTableColumns";
import React from "react";
import DataTable from "../../../Layout/Dashboard/Table/DataTable";
import { useGetAllArea } from "../../../api/Area";
import { useFilterState } from "../../../Components/Utils/Filter/FilterState";
import { useFilterStateState } from "../../../zustand/Filter";
import { useParams } from "react-router-dom";
import { ParamsEnum } from "../../../enums/params";

const App: React.FC = () => {
  const { filterState } = useFilterState();
  const { Filter } = useFilterStateState();
  const { city_id } = useParams<ParamsEnum>();
  const name = Filter?.name;
  const sort_by = Filter?.sort_by;
  const response = useGetAllArea({
    pagination: true,
    ...filterState,
    city_id,
    name,
    sort_by,
  });

  return <DataTable response={response} useColumns={useColumns} />;
};

export default App;
