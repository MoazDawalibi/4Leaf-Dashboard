import { useGetAllSubject } from "../../../../api/subject";
import { useParams } from "react-router-dom";
import DataTable from "../../../../Layout/Dashboard/Table/DataTable";
import { useColumns } from "./useTableColumns";
import { ParamsEnum } from "../../../../enums/params";
import { useFilterState } from "../../../../Components/Utils/Filter/FilterState";
import { useFilterStateState } from "../../../../zustand/Filter";

const TablePage: React.FC = () => {
  const { grade_id } = useParams<ParamsEnum>();
  const { filterState } = useFilterState();
  const { Filter } = useFilterStateState();
  const name = Filter?.name;
  const sort_by = Filter?.sort_by;
  const response = useGetAllSubject({
    grade_id: grade_id,
    pagination: true,
    ...filterState,
    name,
    sort_by,
  });

  return <DataTable response={response} useColumns={useColumns} />;
};

export default TablePage;
