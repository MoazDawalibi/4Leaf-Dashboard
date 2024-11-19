import { Tooltip } from "antd";
import React from "react";
import { useTranslation } from "react-i18next";
import { FaPaperclip } from "react-icons/fa";

interface ReportButtonsProps {
  editTooltipTitle?: any;
  onClick?: () => void;
}

const ReportTableIcon = ({ editTooltipTitle, onClick }: ReportButtonsProps) => {
  const { t } = useTranslation();
  return (
    <Tooltip placement="top" title={t(editTooltipTitle)} color="#E0E0E0">
      <span onClick={onClick}>
        <FaPaperclip size={22} style={{ color: "#A098AE" }} />
      </span>
    </Tooltip>
  );
};

export default ReportTableIcon;
