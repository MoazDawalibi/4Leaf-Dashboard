import { Button, Divider } from "antd";
import { useTranslation } from "react-i18next";
import { canAddReSeller } from "../../utils/hasAbilityFn";

const InfoCard = ({
  data,
  name,
  status,
  withButton = false,
  handleClick,
}: {
  data: any;
  name: any;
  status: any;
  withButton?: boolean;
  handleClick?: () => void;
}) => {
  const { t } = useTranslation();

  return (
    <div className="info_card">
      <div className="info_card_header">
        <img src="/Image/faker_user.png " alt="" />
        <div className="student_name_and_sub">
          <span>{status}</span>
          <h2>{name}</h2>
        </div>
      </div>
      <Divider />
      <div className="info_card_body">
        {data?.map((student: any) => (
          <span>
            <h4>{student?.key}</h4>
            <p>{student?.value}</p>
          </span>
        ))}
        {withButton
          ? canAddReSeller && (
              <Button onClick={handleClick} className="info_card_button">
                {t("practical.collecting_an_amount")}
              </Button>
            )
          : ""}
      </div>
    </div>
  );
};

export default InfoCard;
