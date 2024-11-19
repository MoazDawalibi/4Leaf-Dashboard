import { useTranslation } from "react-i18next";
import { lazy, Suspense } from "react";
import { Spin } from "antd";
import useSetPageTitle from "../../../../Hooks/useSetPageTitle";
import PageHeader from "../../../../Layout/Dashboard/PageHeader";
const Table = lazy(() => import("./Table"));

const TableHeader = () => {
  const [t] = useTranslation();

  useSetPageTitle([
    { name: `${t(`page_header.home`)}`, path: "/" },
    { name: `${t(`page_header.role`)}`, path: "role" },
    { name: `${t(`page_header.permissions`)}`, path: "permissions" },
  ]);

  return (
    <div className="TableWithHeader">
      <Suspense fallback={<Spin />}>
        <PageHeader pageTitle="role" addModal={false} />
        <Table />
      </Suspense>
    </div>
  );
};

export default TableHeader;
