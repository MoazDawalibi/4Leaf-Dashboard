import EditSettingButton from "../../../../../Components/Ui/Buttons/EditSettingButton";
import { t } from "i18next";
import { FaCheck } from "react-icons/fa6";
import useModalHandler from "../../../../../utils/useModalHandler";
import { ModalEnum } from "../../../../../enums/Model";
import { canEditPhone } from "../../../../../utils/hasAbilityFn";
import EditPhoneModel from "./Model/EditPhoneModel";

const VerifyPhone = () => {
  const { handel_open_model } = useModalHandler();

  const handleOpenModel = () => {
    handel_open_model(ModalEnum?.PHONE_EDIT);
  };

  return (
    <div className="setting_verify_phone">
      {canEditPhone && <EditSettingButton onClick={handleOpenModel} />}
      <EditPhoneModel />
      <span>
        {t("input.verify")} <FaCheck />
      </span>
      <p>{t("0965289543")}</p>
    </div>
  );
};

export default VerifyPhone;
