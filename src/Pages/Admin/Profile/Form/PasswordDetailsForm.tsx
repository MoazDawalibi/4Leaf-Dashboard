import { useTranslation } from "react-i18next";
import { FaStore } from "react-icons/fa";
import ValidationField from "../../../../Components/ValidationField/ValidationField";
import HeaderForm from "./HeaderForm";

const PasswordDetailsForm = () => {
  const [t] = useTranslation();

  return (
    <div className="PasswordDetailsForm">
      <header className="header_form">
        <HeaderForm
          name="password"
          Icon={FaStore}
          isHaveButtonIcon={false}
          buttonName="change"
        />
      </header>
      <main className="main_form_body">
        <ValidationField
          name={"password"}
          placeholder={"_"}
          label={"current_password"}
        />
      </main>
    </div>
  );
};

export default PasswordDetailsForm;
