import type { TabsProps } from "antd";
import { Tabs } from "antd";
import React, { useEffect, useState } from "react";
import { useTabsState } from "../../../zustand/TabsState";

const TableTabs = () => {
  const { setActiveTab, ActiveTab } = useTabsState((state) => state);
  interface TableTabsProps {
    items: string[]; // Array of strings
  }

  const items = [
    "للعلامات",
    "للعلامات",
    "للعلامات",
    "للعلامات",
    "للعلامات",
    "للعلامات",
    "للعلامات",
  ];
  const onChange = (key: string) => {
    setActiveTab(key);
  };

  const tabsItems = items.map((item, index) => ({
    key: `${index + 1}`,
    label: item,
  }));

  return (
    <div className="table_tabs">
      <span>ماالتقرير الذي تريده ؟</span>
      <Tabs
        className="table_tabs"
        defaultActiveKey="1"
        items={tabsItems}
        onChange={onChange}
      />
    </div>
  );
};

export default TableTabs;
