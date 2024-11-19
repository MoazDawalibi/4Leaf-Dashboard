import React from "react";
import { useTabsState } from "../../../zustand/TabsState";
import Page from "../../../Components/Chart/AreaChart";
import { Spin } from "antd";
import ColumnChart from "../../../Components/Chart/ColumnChart";
import PercentageCard from "../../../Tables/PercentageCard";
import PieChart from "../../../Components/Chart/PieChart";
import LineChart from "../../../Components/Chart/LineChart";

const components = [
  { component: <Page /> },
  { component: <ColumnChart /> },
  { component: <PercentageCard /> },
  { component: <PieChart /> },
  { component: <LineChart /> },
];

const ActiveTabs = () => {
  const { ActiveTab } = useTabsState((state) => state);

  const renderComponent = () => {
    const selectedComponent = components[Number(ActiveTab) - 1]; // Adjust index to start from 0
    return selectedComponent ? selectedComponent.component : <Spin />;
  };

  return <div>{renderComponent()}</div>;
};

export default ActiveTabs;
