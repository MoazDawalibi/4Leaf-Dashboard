import { useTranslation } from "react-i18next";
import { Suspense } from "react";
import { Spin } from "antd";
import useSetPageTitle from "../../../Hooks/useSetPageTitle";
import PageHeader from "../../../Layout/Dashboard/PageHeader";
import SettingTabs from "./Form/SettingTabs";

const TableHeader = () => {
  const [t] = useTranslation();

  useSetPageTitle([
    { name: `${t(`page_header.home`)}`, path: "/" },
    { name: `${t(`page_header.setting`)}`, path: "setting" },
  ]);

  return (
    <div className="TableWithHeader">
      <Suspense fallback={<Spin />}>
        <PageHeader pageTitle="setting" />
        <SettingTabs />
      </Suspense>
    </div>
  );
};

export default TableHeader;
