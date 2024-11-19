import { Button } from "antd";
import React from "react";
import { useTranslation } from "react-i18next";

const HeaderForm = ({
  name,
  Icon,
  ButtonIcon,
  isHaveButtonIcon = true,
  buttonName = "edit",
}: {
  name: string;
  Icon: any;
  ButtonIcon?: any;
  isHaveButtonIcon?: boolean;
  buttonName?: string;
}) => {
  const { t } = useTranslation();
  return (
    <>
      <div>
        <Icon />
        <h4>{t(`header.${name}`)}</h4>
      </div>
      <div>
        <Button className="edit_button">
          {isHaveButtonIcon ? <ButtonIcon /> : ""}
          {t(`header.${buttonName}`)}
        </Button>
      </div>
    </>
  );
};

export default HeaderForm;
