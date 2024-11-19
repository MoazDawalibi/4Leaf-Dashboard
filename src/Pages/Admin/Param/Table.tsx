import React from "react";
import DataTable from "../../../Layout/Dashboard/Table/DataTable";
import { useColumns } from "./useTableColumns";
import { useGetAllParam } from "../../../api/param";
import { useFilterState } from "../../../Components/Utils/Filter/FilterState";
import { useTranslation } from "react-i18next";
import { useFilterStateState } from "../../../zustand/Filter";

const App: React.FC = () => {
  const { filterState } = useFilterState();
  const { Filter } = useFilterStateState();

  const name = Filter?.name;
  const sort_by = Filter?.sort_by;

  const response = useGetAllParam({
    name,
    sort_by,
    pagination: true,
    ...filterState,
  });
  const [t] = useTranslation();
  const transformedData =
    response?.data?.data && typeof response.data.data === "object"
      ? Object.entries(response.data.data).map(([key, value]) => ({
          key: key,
          value: value,
        }))
      : [];

  return (
    <DataTable
      response={response}
      useColumns={useColumns}
      dataSource={transformedData}
      pagination={{
        nextIcon: <>{t("practical.next")}</>,
        prevIcon: <> {t("practical.prev")} </>,
        className: "pagination_antd",
      }}
    />
  );
};

export default App;
