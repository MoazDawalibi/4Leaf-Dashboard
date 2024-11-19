import React from "react";
import { useTranslation } from "react-i18next";
import { FaStore } from "react-icons/fa";
import ValidationField from "../../../../../Components/ValidationField/ValidationField";
import { convert_data_to_select } from "../../../../../Layout/app/Const";
import { userTypeOptions } from "../../../../../config/userTypeOptions";
import { statusType } from "../../../../../config/statusType";
import { FaUsers } from "react-icons/fa6";

const PersonalDetailsForm = ({ isEdit }: { isEdit?: boolean }) => {
  const [t] = useTranslation();
  return (
    <div className="PersonalDetailsForm">
      <header className="header_form">
        <FaUsers />
        <h4>{t("header.users")}</h4>
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
          label={"last_name"}
        />
        <ValidationField
          name={"contact_number1"}
          placeholder={"_"}
          label={"contact_number1"}
        />

        <ValidationField
          name={"contact_number2"}
          placeholder={"_"}
          label={"contact_number2"}
        />
        <ValidationField
          name={"username"}
          placeholder={"_"}
          label={"username"}
          type="text"
        />
        {isEdit ? (
          ""
        ) : (
          <ValidationField
            name={"password"}
            placeholder={"_"}
            label={"password"}
          />
        )}
        <ValidationField
          name={"card_number"}
          placeholder={"_"}
          label={"ID Number"}
        />
      </main>
    </div>
  );
};

export default PersonalDetailsForm;
