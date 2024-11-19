import { useColumns } from "./useTableColumns";
import React from "react";
import DataTable from "../../../Layout/Dashboard/Table/DataTable";
import { useGetAllQuestion } from "../../../api/Question";
import { useFilterState } from "../../../Components/Utils/Filter/FilterState";
import { useObjectToEdit } from "../../../zustand/ObjectToEditState";
import { useFilterStateState } from "../../../zustand/Filter";
import { ConvertArrayToArrayOfIds } from "../../../utils/ConvertArrayToArrayOfIds";

const App: React.FC = () => {
  const { filterState } = useFilterState();
  const { setFilter, Filter } = useFilterStateState();
  const sort_by = Filter?.sort_by;

  console.log(filterState, "filterState");

  const response = useGetAllQuestion({
    nullable_parent: "null",
    pagination: true,
    ...filterState,
    tagsIds: ConvertArrayToArrayOfIds(filterState?.tagsIds),
    grade_id: filterState?.grade_id?.id,
    subject_id: filterState?.subject_id?.id,
    unit_id: filterState?.unit_id?.id,
    lessonsIds: ConvertArrayToArrayOfIds(filterState?.lessonsIds),
    content: Filter?.content,
    sort_by,
  });

  return <DataTable response={response} useColumns={useColumns} />;
};

export default App;
