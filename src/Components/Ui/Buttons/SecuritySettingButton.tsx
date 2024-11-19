import { Button } from "antd";
import { useTranslation } from "react-i18next";

const SecuritySettingButton = ({
  name,
  danger = false,
}: {
  name: string;
  danger?: boolean;
}) => {
  const { t } = useTranslation();
  return (
    <div>
      <Button
        className={`security_setting_button ${danger ? "security_setting_button_danger" : ""}`}
      >
        {t(name)}
      </Button>
    </div>
  );
};

export default SecuritySettingButton;
