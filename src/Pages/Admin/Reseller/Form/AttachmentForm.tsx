import React from "react";
import { useTranslation } from "react-i18next";
import { FaImage } from "react-icons/fa";
import ImageBoxField from "./ImageBoxField/ImageBoxField";
import ValidationField from "../../../../Components/ValidationField/ValidationField";
import MyMap from "../field/MyMap";

const AttachmentForm = () => {
  const [t] = useTranslation();

  return (
    <div className="AttachmentForm">
      <header className="header_form">
        <FaImage />
        <h4>{t("header.attachment")}</h4>
      </header>
      <div className="AttachmentFormBody ">
        <main className="main_form_body">
          <ImageBoxField name="personal_image" />
          <ImageBoxField name="id_image" />
        </main>
        <div className="MapField">
          <ValidationField name="lat" placeholder="lat" label="lat" />
          <ValidationField name="lng" placeholder="lng" label="lng" />
          <MyMap />
        </div>
      </div>
    </div>
  );
};

export default AttachmentForm;
