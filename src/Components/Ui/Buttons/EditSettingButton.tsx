import { Button } from "antd";
import { useTranslation } from "react-i18next";
import { CiEdit } from "react-icons/ci";

const EditSettingButton = ({
  buttonName,
  onClick,
}: {
  buttonName?: string;
  onClick?: () => void;
}) => {
  const { t } = useTranslation();

  return (
    <div>
      <Button className=" setting_edit_button" onClick={onClick}>
        <CiEdit />
        {t(`header.edit`) ?? `header.${buttonName}`}
      </Button>
    </div>
  );
};

export default EditSettingButton;
