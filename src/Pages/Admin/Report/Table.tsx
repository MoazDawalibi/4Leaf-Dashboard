import React from "react";
import DataTable from "../../../Layout/Dashboard/Table/DataTable";
import { useColumns } from "./useTableColumns";
import { useGetAllReport } from "../../../api/report";
import { useFilterState } from "../../../Components/Utils/Filter/FilterState";
import { useFilterStateState } from "../../../zustand/Filter";
import { useParams } from "react-router-dom";
import { ParamsEnum } from "../../../enums/params";
const App: React.FC = () => {
  const { filterState } = useFilterState();

  const { Filter } = useFilterStateState();
  const name = Filter?.name;
  const sort_by = Filter?.sort_by;
  const { question_id } = useParams<ParamsEnum>();

  const response = useGetAllReport({
    name,
    sort_by,
    pagination: true,
    ...filterState,
    question_id: question_id,
  });

  return <DataTable response={response} useColumns={useColumns} />;
};

export default App;
