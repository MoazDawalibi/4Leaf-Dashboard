import { Divider } from "antd";
import { useTranslation } from "react-i18next";
import { RxHome } from "react-icons/rx";

const AddressCard = ({ data }: { data: any }) => {
  const { t } = useTranslation();
  return (
    <div className="address_card">
      <h5>{t("practical.address")}</h5>
      <Divider />
      <div className="address_card_body">
        {data?.map((address: any) => (
          <div>
            <RxHome />
            <span>
              <h6>{t(`practical.${address?.key}`)}</h6>
              <p>{address?.value}</p>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddressCard;
