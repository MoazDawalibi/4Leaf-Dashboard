import React from "react";
import { FaPlus } from "react-icons/fa";
import { useTranslation } from "react-i18next";

interface ActionAddButtonProps {
  canAdd: boolean;
  onClick: () => void;
  buttonText?: string;
  modelName: string;
}

const ActionAddButton: React.FC<ActionAddButtonProps> = ({
  canAdd,
  onClick,
  buttonText = "practical.add",
  modelName,
}) => {
  const { t } = useTranslation();

  if (!canAdd) {
    return null; // Render nothing if canAdd is false
  }

  return (
    <button onClick={onClick} className="add_button">
      {t(buttonText)} {t(`models.${modelName}`)} <FaPlus />
    </button>
  );
};

export default ActionAddButton;
