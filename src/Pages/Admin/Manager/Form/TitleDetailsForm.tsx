import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaRegAddressBook } from "react-icons/fa";
import ValidationField from "../../../../Components/ValidationField/ValidationField";
import { nationalities } from "../../../../types/App";
import { useGetAllArea } from "../../../../api/Area";
import { useGetAllCity } from "../../../../api/City";

const TitleDetailsForm = () => {
  const [t] = useTranslation();
  const { data: city } = useGetAllCity();
  const [CityId, setCityId] = useState();
  console.log(city);

  const { data } = useGetAllArea({
    city_id: CityId,
  });

  return (
    <div className="TitleDetailsForm">
      <header className="header_form">
        <FaRegAddressBook />
        <h4>{t("header.address")}</h4>
      </header>
      <main className="main_form_body">
        <ValidationField
          name={"city"}
          placeholder={"_"}
          label={"city"}
          type="Select"
          option={city?.data}
          onChange={(e) => setCityId(e)}
        />
        <ValidationField
          name={"area_id"}
          placeholder={"_"}
          label={"city"}
          type="Select"
          disabled={!CityId}
          option={data?.data}
        />
        {/* <ValidationField name={"address"} placeholder={"_"} label={"address"} /> */}
      </main>
    </div>
  );
};

export default TitleDetailsForm;
