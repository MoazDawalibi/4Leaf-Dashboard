import React, { lazy, useState } from "react";
import type { TabsProps } from "antd";
import { Tabs } from "antd";
import { useTranslation } from "react-i18next";
import { useWindowResize } from "../../../../Hooks/useWindowResize";
import FileSetting from "./FileSetting";
import SecuritySetting from "./SecuritySetting";
import Notification from "./Notification";
type TabPosition = "left" | "right" | "top" | "bottom";

const SettingTabs: React.FC = () => {
  const { windowWidth } = useWindowResize();
  const { t } = useTranslation();
  const [tabPosition, setTabPosition] = useState<TabPosition>(
    windowWidth < 800 ? "top" : "left",
  );
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: t("table.file_setting"),
      children: <FileSetting />,
    },
    {
      key: "2",
      label: t("table.security_setting"),
      children: <SecuritySetting />,
    },
    {
      key: "3",
      label: t("table.notification"),
      children: <Notification />,
    },
  ];

  return (
    <>
      <Tabs
        tabPosition={tabPosition}
        addIcon
        items={items}
        className="setting_tabs"
        defaultActiveKey="1"
      />
    </>
  );
};

export default SettingTabs;
