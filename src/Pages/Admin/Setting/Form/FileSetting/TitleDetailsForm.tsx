import { useTranslation } from "react-i18next";
import { FaStore } from "react-icons/fa";
import ValidationField from "../../../../../Components/ValidationField/ValidationField";
import { nationalities } from "../../../../../types/App";

const TitleDetailsForm = () => {
  const [t] = useTranslation();

  return (
    <div className="TitleDetailsForm">
      <header className="header_form">
        <FaStore />
        <h4>{t("header.address")}</h4>
      </header>
      <main className="main_form_body">
        <ValidationField
          name={"city_id"}
          placeholder={"_"}
          label={"city"}
          type="Select"
          option={nationalities}
        />
        <ValidationField name={"address"} placeholder={"_"} label={"address"} />
      </main>
    </div>
  );
};

export default TitleDetailsForm;
