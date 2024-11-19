import { useTranslation } from "react-i18next";
import { FaStore } from "react-icons/fa";
import ImageBoxField from "./ImageBoxField/ImageBoxField";

const AttachmentForm = () => {
  const [t] = useTranslation();

  return (
    <div className="AttachmentForm">
      <header className="header_form">
        <FaStore />
        <h4>{t("header.attachments")}</h4>
      </header>
      <main className="main_form_body">
        <ImageBoxField name="personal_image" />
        <ImageBoxField name="id_image" />
      </main>
    </div>
  );
};

export default AttachmentForm;
