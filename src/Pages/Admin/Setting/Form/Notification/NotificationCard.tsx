import { useTranslation } from "react-i18next";
import ValidationField from "../../../../../Components/ValidationField/ValidationField";

const NotificationCard = ({
  name,
  description,
}: {
  name: string;
  description: string;
}) => {
  const { t } = useTranslation();

  return (
    <div className="notification_card_setting">
      <div>
        <h5>{t(`${name}`)}</h5>
        <p>{t(`${description}`)}</p>
      </div>
      <div>
        <ValidationField type="Checkbox" name="name" label="empty" />
      </div>
    </div>
  );
};

export default NotificationCard;
