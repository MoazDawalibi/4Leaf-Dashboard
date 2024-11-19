import EditSettingButton from "../../../../../Components/Ui/Buttons/EditSettingButton";
import { useTranslation } from "react-i18next";
import { FaCheck } from "react-icons/fa6";
import useModalHandler from "../../../../../utils/useModalHandler";
import { ModalEnum } from "../../../../../enums/Model";
import { canEditEmail } from "../../../../../utils/hasAbilityFn";
import EditEmailModel from "./Model/EditEmailModel";

const EmailAddress = () => {
  const { t } = useTranslation();
  const { handel_open_model } = useModalHandler();

  const handleOpenModel = () => {
    handel_open_model(ModalEnum?.Email_EDIT);
  };

  return (
    <div className="setting_email_address">
      {canEditEmail && <EditSettingButton onClick={handleOpenModel} />}
      <EditEmailModel />
      <span>
        {t("input.verify")} <FaCheck />
      </span>
      <p>{t("admin@example.com")}</p>
    </div>
  );
};

export default EmailAddress;
