import React from "react";
import { Tooltip, Space } from "antd";
import { MdOutlineEdit } from "react-icons/md";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { useTranslation } from "react-i18next";
import { BsEyeFill } from "react-icons/bs";
import { GoTrash } from "react-icons/go";
import { BsQrCode } from "react-icons/bs";

interface ActionButtonsProps {
  canEdit?: boolean;
  canDelete?: boolean;
  canShow?: boolean;
  editTooltipTitle?: string;
  deleteTooltipTitle?: string;
  onEdit?: () => void;
  onDelete?: () => void;
  onShow?: () => void;
  index?: number;
  className?: string;
  canShowQr?: boolean;
  onShoqQr?: () => void;
}

const ActionButtons: React.FC<ActionButtonsProps> = ({
  canShowQr,
  onShoqQr,
  canEdit,
  canDelete,
  editTooltipTitle = "practical.edit",
  className = "",
  onEdit = () => {},
  onDelete = () => {},
  index,
  canShow = false,
  onShow = () => {},
}) => {
  const [t] = useTranslation();
  const CustomClassName = index
    ? index % 2 === 0
      ? "even-row buttonAction"
      : "odd-row buttonAction"
    : "buttonAction";
  return (
    <Space size="middle" className={`${CustomClassName} ${className} `}>
      {canShowQr && (
        <BsQrCode onClick={onShoqQr} size={22} style={{ color: "#A098AE" }} />
      )}

      {canEdit && (
        <Tooltip placement="top" title={t(editTooltipTitle)} color="#E0E0E0">
          <span onClick={onEdit}>
            <MdOutlineEdit size={22} style={{ color: "#A098AE" }} />
          </span>
        </Tooltip>
      )}

      {canDelete && (
        // <Tooltip placement="top" title={t(deleteTooltipTitle)} color="#E0E0E0">
        <GoTrash onClick={onDelete} size={22} style={{ color: "#A098AE" }} />
        //  </Tooltip>
      )}
      {canShow && (
        <BsEyeFill onClick={onShow} size={22} style={{ color: "green" }} />
      )}
    </Space>
  );
};

export default ActionButtons;
