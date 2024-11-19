import { useTranslation } from "react-i18next";
import { SettingType } from "../../../../../types/Setting";

const SecurityCard = ({ name, description, children }: SettingType) => {
  const { t } = useTranslation();

  return (
    <div className="security_card">
      <div>
        <h5>{t(`practical.${name}`)}</h5>
        <p>{t(`practical.${description}`)}</p>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default SecurityCard;
