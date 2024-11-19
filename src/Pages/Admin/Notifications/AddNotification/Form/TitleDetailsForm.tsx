import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaRegAddressBook } from "react-icons/fa";
import ValidationField from "../../../../../Components/ValidationField/ValidationField";
import { useGetAllArea } from "../../../../../api/Area";
import { useGetAllCity } from "../../../../../api/City";
import { IoIosNotifications } from "react-icons/io";

const TitleDetailsForm = () => {
  const [t] = useTranslation();
  const { data: city } = useGetAllCity();
  const [CityId, setCityId] = useState();

  const { data } = useGetAllArea({
    city_id: CityId,
  });

  return (
    <div className="TitleDetailsForm">
      <header className="header_form">
        <IoIosNotifications />
        <h4>{t("header.notification_details")}</h4>
      </header>
      <main className="main_form_body notification_details">
        <ValidationField
          name={"title"}
          placeholder={"_"}
          label={"title"}
          type="TextArea"
          width={500}
        />
        <ValidationField
          name={"body"}
          placeholder={"_"}
          label={"body"}
          type="TextArea"
        />
      </main>
    </div>
  );
};

export default TitleDetailsForm;
