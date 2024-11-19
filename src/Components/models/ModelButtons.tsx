import React from "react";
import { useObjectToEdit } from "../../zustand/ObjectToEditState";
import { useModalState } from "../../zustand/Modal";
import { useTranslation } from "react-i18next";
import { Spin } from "antd";

interface ButtonsProps {
  isLoading: boolean;
}

const ModelButtons: React.FC<ButtonsProps> = ({ isLoading }) => {
  const { setIsOpen } = useModalState((state) => state);
  const { t } = useTranslation();

  const handleCancel = () => {
    setIsOpen("");
  };

  return (
    <div className="buttons">
      <div onClick={handleCancel}>{t("practical.back")}</div>
      <button disabled={isLoading} type="submit">
        {t("practical.submit")}
        {isLoading && (
          <span className="Spinier_Div">
            <Spin />
          </span>
        )}
      </button>
    </div>
  );
};

export default ModelButtons;
