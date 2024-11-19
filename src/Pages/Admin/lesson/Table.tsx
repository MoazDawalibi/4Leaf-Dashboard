import { useColumns } from "./useTableColumns";
import React, { useEffect } from "react";
import DataTable from "../../../Layout/Dashboard/Table/DataTable";
import { useGetAllLesson } from "../../../api/lesson";
import { useParams } from "react-router-dom";
import { ParamsEnum } from "../../../enums/params";
import { useObjectToEdit } from "../../../zustand/ObjectToEditState";
import { useFilterState } from "../../../Components/Utils/Filter/FilterState";
import { useFilterStateState } from "../../../zustand/Filter";

const App: React.FC = () => {
  const { unit_id } = useParams<ParamsEnum>();

  const { Filter } = useFilterStateState();
  const name = Filter?.name;
  const sort_by = Filter?.sort_by;

  const response = useGetAllLesson({
    unit_id: unit_id,
    pagination: true,
    name,
    sort_by,
  });

  const { setOldObjectToEdit } = useObjectToEdit();
  // console.log(response?.data?.data, "response?.data");
  const data = response?.data?.data;
  const lastElement =
    response?.data?.data && response?.data?.data[data?.length - 1];
  // console.log(lastElement);

  useEffect(() => {
    if (lastElement) {
      setOldObjectToEdit(lastElement);
    }
  }, [lastElement]);

  return <DataTable response={response} useColumns={useColumns} />;
};

export default App;
