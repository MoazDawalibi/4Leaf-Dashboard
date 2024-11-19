import { ReactElement } from "react";
import { useTranslation } from "react-i18next";

const TabHeader = ({
  name,
  description,
  children,
}: {
  name: string;
  description: string;
  children?: ReactElement;
}) => {
  const { t } = useTranslation();

  return (
    <div className="setting_tab_header">
      <div>
        <h5>{t(`table.${name}`)}</h5>
        <p>{t(`table.${description}`)}</p>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default TabHeader;
