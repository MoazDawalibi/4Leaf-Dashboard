import { useTranslation } from "react-i18next";
import { FaStore } from "react-icons/fa";
import ValidationField from "../../../../../Components/ValidationField/ValidationField";
import { statusType } from "../../../../../config/statusType";

const PersonalDetailsForm = () => {
  const [t] = useTranslation();
  return (
    <div className="PersonalDetailsForm">
      <header className="header_form">
        <FaStore />
        <h4>{t("header.personal_information")}</h4>
      </header>
      <main className="main_form_body">
        <ValidationField
          name={"first_name"}
          placeholder={"_"}
          label={"first_name"}
        />
        <ValidationField
          name={"last_name"}
          placeholder={"_"}
          type="Date"
          label={"last_name"}
        />

        <ValidationField
          name={"email_address"}
          placeholder={"_"}
          label={"email_address"}
          type="Select"
          option={statusType}
        />
        <ValidationField
          name={"username"}
          placeholder={"_"}
          label={"username"}
        />

        <ValidationField
          name={"full_name"}
          placeholder={"_"}
          label={"Phone Number"}
        />
      </main>
    </div>
  );
};

export default PersonalDetailsForm;
