import { useTranslation } from "react-i18next";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import FilterLayout from "../../../../Layout/Dashboard/FilterLayout";
import FilterForm from "./Model/FilterForm";
import { lazy } from "react";
import { FaMoneyBills } from "react-icons/fa6";
import useSearchQuery from "../../../../api/utils/useSearchQuery";
import { useFilterState } from "../../../../Components/Utils/Filter/FilterState";
import {
  useGetAllReseller,
  useGetAllResellerCollection,
  useGetAllResellerSales,
} from "../../../../api/reseller";
import { useParams } from "react-router-dom";
import { ParamsEnum } from "../../../../enums/params";
import FilterFormCollection from "./Model/FilterFormCollection";

const Table = lazy(() => import("./Table"));

const ReSellerTabs = () => {
  const { t } = useTranslation();

  const [searchQuery] = useSearchQuery("name");
  const { filterState } = useFilterState();
  const { reseller_id } = useParams<ParamsEnum>();

  const response = useGetAllResellerSales({
    name: searchQuery,
    pagination: true,
    ...filterState,
    reseller_id: reseller_id,
  });

  const responseCollection = useGetAllResellerCollection({
    name: searchQuery,
    pagination: true,
    ...filterState,
    reseller_id: reseller_id,
  });

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: t("practical.sales"),
      icon: <FaMoneyBills className="tab_icon" />,
      children: (
        <>
          <FilterLayout
            sub_children={<FilterForm />}
            filterTitle="practical.sales"
          />
          <Table response={response} salesTable={true} />
        </>
      ),
    },
    {
      key: "2",
      label: t("practical.collections"),
      icon: <FaMoneyBills className="tab_icon" />,
      children: (
        <>
          <FilterLayout
            sub_children={<FilterFormCollection />}
            filterTitle="practical.collections"
          />
          <Table response={responseCollection} />
        </>
      ),
    },
  ];
  return (
    <>
      <Tabs defaultActiveKey="1" items={items} />
    </>
  );
};

export default ReSellerTabs;
