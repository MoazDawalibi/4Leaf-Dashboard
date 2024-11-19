import { useTranslation } from "react-i18next";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import FilterLayout from "../../../../Layout/Dashboard/FilterLayout";
import FilterForm from "./Model/FilterForm";
import { lazy } from "react";
import { BsQuestionSquare } from "react-icons/bs";
import { IoStatsChartOutline } from "react-icons/io5";
import { useGetAllUser } from "../../../../api/user";
import useSearchQuery from "../../../../api/utils/useSearchQuery";
import { useFilterState } from "../../../../Components/Utils/Filter/FilterState";

const Table = lazy(() => import("./Table"));

const StudentTabs = () => {
  const { t } = useTranslation();

  const [searchQuery] = useSearchQuery("name");
  const { filterState } = useFilterState();
  const response = useGetAllUser({
    name: searchQuery,
    pagination: true,
    ...filterState,
  });

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: t("practical.quiz"),
      icon: <BsQuestionSquare className="tab_icon" />,
      children: (
        <>
          <FilterLayout
            sub_children={<FilterForm />}
            filterTitle="sidebar.quiz"
          />
          <Table response={response} />
        </>
      ),
    },
    {
      key: "2",
      label: t("practical.hightes_quiz"),
      icon: <IoStatsChartOutline className="tab_icon" />,
      children: (
        <>
          <FilterLayout
            sub_children={<FilterForm />}
            filterTitle="practical.hightes_quiz"
          />
          <Table response={response} />
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

export default StudentTabs;
