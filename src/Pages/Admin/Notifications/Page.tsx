import { Divider } from "antd";
import { useTranslation } from "react-i18next";
import { notifications } from "../../../types/Notifications";
import Card from "./Card";
import { useGetAllNotificationMine } from "../../../api/notification";

const Page = () => {
  const { t } = useTranslation();
  const { data } = useGetAllNotificationMine();
  console.log(data);

  return (
    <div className="notification_container">
      <div className="notification_header">
        <h3>{t("header.notifications")}</h3>
      </div>
      <Divider />
      {!!data?.data ? (
        <div className="notification_body">
          {data?.data?.map((not: notifications) => (
            <Card
              id={not?.id}
              name={not?.name}
              date={not?.date}
              image={not?.image}
            />
          ))}
        </div>
      ) : (
        <div className="notification_body_empty">
          {t("practical.does_not_exist_notification")}
        </div>
      )}
    </div>
  );
};

export default Page;
