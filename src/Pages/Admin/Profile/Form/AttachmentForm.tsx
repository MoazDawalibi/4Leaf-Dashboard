import React from "react";
import { useTranslation } from "react-i18next";
import { FaImage } from "react-icons/fa";
import ImageBoxField from "./ImageBoxField/ImageBoxField";

const AttachmentForm = () => {
  const [t] = useTranslation();

  return (
    <div className="AttachmentForm">
      <header className="header_form">
        <div>
          <FaImage />
          <h4>{t("header.attachments")}</h4>
        </div>
      </header>
      <main className="main_form_body">
        <ImageBoxField name="personal_image" />
        <ImageBoxField name="id_image" />
      </main>
    </div>
  );
};

export default AttachmentForm;
