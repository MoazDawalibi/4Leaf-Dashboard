import { useColumns } from "./useTableColumns";
import React from "react";
import DataTable from "../../../Layout/Dashboard/Table/DataTable";
import { useGetAllQuestion } from "../../../api/Question";
import { useParams } from "react-router-dom";
import { ParamsEnum } from "../../../enums/params";
import { useFilterState } from "../../../Components/Utils/Filter/FilterState";
import { useFilterStateState } from "../../../zustand/Filter";

const App: React.FC = () => {
  const { lesson_id } = useParams<ParamsEnum>();
  const { filterState } = useFilterState();
  const { Filter } = useFilterStateState();
  const sort_by = Filter?.sort_by;
  const content = Filter?.content;

  const response = useGetAllQuestion({
    nullable_parent: "null",
    lessonsIds: [lesson_id],
    pagination: true,
    ...filterState,
    content,
    sort_by,
  });
  return <DataTable response={response} useColumns={useColumns} />;
};

export default App;
