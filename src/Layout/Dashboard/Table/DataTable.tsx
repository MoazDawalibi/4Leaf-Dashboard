import React, { lazy, Suspense, useEffect } from "react";
import { useAddKeyToData, Table, useTranslation, usePagination } from ".";
import { DataTableProps } from "../../../types/Table";
import { useDataTableState } from "../../../zustand/TabState";
const NotFoundLottie = React.lazy(
  () => import("../../../Components/Lottie/NotFound/NotFoundLottie"),
);
const LoadingLottie = React.lazy(
  () => import("../../../Components/Lottie/Loading/LoadingLottie"),
);

const DataTable: React.FC<DataTableProps> = ({
  response,
  useColumns,
  ...props
}) => {
  const data: any[] = response?.data?.data || [];

  const columns = useColumns();
  const { pagination, handlePageChange } = usePagination(response?.data);
  const [t] = useTranslation();
  const getRowClassName = (_record: any, index: number): string => {
    return index % 2 === 0 ? "even-row" : "odd-row";
  };
  const isRefetching = response?.isRefetching;
  const isLoading = response?.isLoading;
  const dataLength = data?.length;
  const { setDataTableLength } = useDataTableState();
  useEffect(() => {
    setDataTableLength(dataLength);
  }, [dataLength]);

  return (
    <Table
      style={{ minHeight: "300px" }}
      columns={columns}
      dataSource={data}
      rowKey={"id"}
      rowClassName={(record, index) => getRowClassName(record, index)}
      className="DataTable"
      loading={{
        spinning: isLoading || isRefetching,
        indicator: (
          <Suspense fallback={<></>}>
            <LoadingLottie />
          </Suspense>
        ),
        size: "large",
      }}
      locale={{
        emptyText:
          isLoading || isRefetching ? (
            <></>
          ) : (
            <Suspense fallback={<></>}>
              <NotFoundLottie />
            </Suspense>
          ),
      }}
      pagination={{
        ...pagination,
        onChange: handlePageChange,
        nextIcon: <>{t("practical.next")}</>,
        prevIcon: <> {t("practical.prev")} </>,
        className: "pagination_antd",
        showSizeChanger: false,
      }}
      {...props}
    />
  );
};

export default DataTable;
