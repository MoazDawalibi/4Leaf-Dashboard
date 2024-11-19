import { useTranslation } from "react-i18next";
import { FaStore } from "react-icons/fa";
import ValidationField from "../../../../Components/ValidationField/ValidationField";

const PasswordDetailsForm = () => {
  const [t] = useTranslation();

  return (
    <div className="PasswordDetailsForm">
      <header className="header_form">
        <FaStore />
        <h4>{t("header.password")}</h4>
      </header>
      <main className="main_form_body">
        <ValidationField
          name={"password"}
          placeholder={"_"}
          label={"new_password"}
        />
        <ValidationField
          name={"password"}
          placeholder={"_"}
          label={"submit_password"}
        />
      </main>
    </div>
  );
};

export default PasswordDetailsForm;
