import React from "react";
import { FaPlus } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { ModalEnum } from "../../enums/Model";
import { useModalState } from "../../zustand/Modal";

interface TableAddButtonProps {
  canAdd: boolean;
  ModalEnumValue: ModalEnum;
  buttonText?: string;
  modelName: string;
}

const TableAddButton: React.FC<TableAddButtonProps> = ({
  canAdd,
  ModalEnumValue,
  buttonText = "practical.add",
  modelName,
}) => {
  const { t } = useTranslation();
  const { setIsOpen } = useModalState((state) => state);

  if (!canAdd) {
    return null; // Render nothing if canAdd is false
  }

  return (
    <button
      // onClick={() => setIsOpen(ModalEnum?.[ModalEnumValue])}
      className="add_button"
    >
      {t(buttonText)} {t(`models.${modelName}`)} <FaPlus />
    </button>
  );
};

export default TableAddButton;
