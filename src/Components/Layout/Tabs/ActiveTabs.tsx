import React from "react";
import { Spin } from "antd";
import { useModalTabsState } from "../../../zustand/ModalTabsState";

const ActiveTabs = ({ steps }: any) => {
  const { ActiveTab } = useModalTabsState((state) => state);

  const renderComponent = () => {
    const selectedComponent = steps[Number(ActiveTab)];
    // console.log(Number(ActiveTab),"Number(ActiveTab)");

    return selectedComponent ? selectedComponent?.component : <Spin />;
  };

  return renderComponent();
};

export default ActiveTabs;
