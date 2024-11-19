import { useColumns } from "./useTableColumns";
import React, { useEffect } from "react";
import DataTable from "../../../Layout/Dashboard/Table/DataTable";
import { useGetAllUnit } from "../../../api/unit";
import { useParams } from "react-router-dom";
import { ParamsEnum } from "../../../enums/params";
import { useObjectToEdit } from "../../../zustand/ObjectToEditState";
import { useFilterState } from "../../../Components/Utils/Filter/FilterState";
import { useFilterStateState } from "../../../zustand/Filter";

const App: React.FC = () => {
  const { subject_id } = useParams<ParamsEnum>();
  const { Filter } = useFilterStateState();
  const name = Filter?.name;
  const sort_by = Filter?.sort_by;
  const response = useGetAllUnit({
    subject_id: subject_id,
    pagination: true,
    name,
    sort_by,
  });

  const { setOldObjectToEdit } = useObjectToEdit();
  const data = response?.data?.data;
  const lastElement =
    response?.data?.data && response?.data?.data[data?.length - 1];

  useEffect(() => {
    if (lastElement) {
      setOldObjectToEdit(lastElement);
    }
  }, [lastElement]);

  return <DataTable response={response} useColumns={useColumns} />;
};

export default App;
