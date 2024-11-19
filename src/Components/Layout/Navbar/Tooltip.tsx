import React from "react";
import { Tooltip } from "antd";
import { ModalEnum } from "../../../enums/Model";
import { useTranslation } from "react-i18next";
import { CiCirclePlus } from "react-icons/ci";
import useModalHandler from "../../../utils/useModalHandler";

const TooltipComp = ({
  note,
  color,
  icon,
  className = "",
  onClick,
}: {
  note: string;
  color: string;
  icon: any;
  className?: string;
  onClick?: () => void;
}) => {
  const [t] = useTranslation();
  const { handel_open_model } = useModalHandler();

  const handleEdit = () => {
    // handel_open_model(ModalEnum.CHANGE_PASSWORD);
  };
  return (
    <div className={className} onClick={onClick}>
      <Tooltip
        placement="top"
        title={<div onClick={handleEdit}>{t(`header.${note}`)}</div>}
        color={color}
      >
        <div className={`gear `}>{icon}</div>
      </Tooltip>
    </div>
  );
};

export default TooltipComp;
