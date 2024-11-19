import { useColumns } from "./useTableColumns";
import React from "react";
import DataTable from "../../../Layout/Dashboard/Table/DataTable";
import { useGetAllCurriculum } from "../../../api/curriculum";
import { useParams } from "react-router-dom";
import { ParamsEnum } from "../../../enums/params";
import { useFilterState } from "../../../Components/Utils/Filter/FilterState";

const App: React.FC = () => {
  const { subject_id } = useParams<ParamsEnum>();
  const { filterState } = useFilterState();

  const response = useGetAllCurriculum({
    subject_id: subject_id,
    pagination: true,
    ...filterState,
  });
  console.log(response?.data?.data, "response?.data");

  return <DataTable response={response} useColumns={useColumns} />;
};

export default App;
