import React from "react";
import { useTranslation } from "react-i18next";
import { FaStore } from "react-icons/fa";
import ValidationField from "../../../../Components/ValidationField/ValidationField";
import { convert_data_to_select } from "../../../../Layout/app/Const";
import { userTypeOptions } from "../../../../config/userTypeOptions";
import { statusType } from "../../../../config/statusType";
import { useGetRole } from "../../../../api/role";

const PersonalDetailsForm = ({ isEdit = false }: { isEdit?: boolean }) => {
  const [t] = useTranslation();
  const { data } = useGetRole();
  const RoleData = data?.data;

  const sex = [
    { name: "male", id: "male" },
    { name: "female", id: "female" },
  ];
  return (
    <div className="PersonalDetailsForm">
      <header className="header_form">
        <FaStore />
        <h4>{t("header.personal_information")}</h4>
      </header>
      <main className="main_form_body">
        <ValidationField
          name={"username"}
          placeholder={"_"}
          label={"username"}
        />
        <ValidationField name={"name"} placeholder={"_"} label={"name"} />
        <ValidationField
          name={"contact_number"}
          placeholder={"_"}
          label={"contact_number"}
          type="number"
        />
        {!isEdit && (
          <ValidationField
            name={"password"}
            placeholder={"_"}
            label={"password"}
          />
        )}
        <ValidationField
          name={"role"}
          placeholder={"_"}
          label={"role"}
          type="Select"
          option={RoleData}
        />
      </main>
    </div>
  );
};

export default PersonalDetailsForm;
