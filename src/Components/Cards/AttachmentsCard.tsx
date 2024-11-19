import { Divider } from "antd";
import { useTranslation } from "react-i18next";
import ImageBoxField from "../CustomFields/ImageBoxField/ImageBoxField";

const AttachmentsCard = ({ data }: { data?: any }) => {
  const { t } = useTranslation();

  return (
    <div className="attachments_card">
      <h5>{t("practical.address")}</h5>
      <Divider />
      <div className="attachments_body">
        <h5>{t("practical.id_photo")}</h5>
        {/* {data?.map((address:any)=>( */}
        <span>
          <ImageBoxField name="image" />
        </span>
        {/* ))} */}
      </div>
    </div>
  );
};

export default AttachmentsCard;
