import { Button } from "antd";
import { useTranslation } from "react-i18next";
import { HiOutlineTrash } from "react-icons/hi2";

const TrashButton = ({
  name,
  onClick,
  icon = true,
}: {
  name: string;
  onClick?: () => void;
  icon?: boolean;
}) => {
  const { t } = useTranslation();
  return (
    <Button className="trash_button" onClick={onClick}>
      {icon ? <HiOutlineTrash /> : ""}
      {t(`header.${name}`)}
    </Button>
  );
};

export default TrashButton;
