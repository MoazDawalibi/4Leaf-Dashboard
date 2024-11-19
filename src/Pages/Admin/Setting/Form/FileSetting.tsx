import TabHeader from "./TabHeader";
import { Form, Formik } from "formik";
import { getInitialValues, getValidationSchema } from "./FileSetting/formUtils";
import PersonalDetailsForm from "./FileSetting/PersonalDetailsForm";
import TitleDetailsForm from "./FileSetting/TitleDetailsForm";
import AttachmentForm from "./FileSetting/AttachmentForm";
import { useTranslation } from "react-i18next";

const FileSetting = () => {
  const { t } = useTranslation();
  const handelSubmit = (values: any) => {
    console.log(values, "values");
  };
  return (
    <div className="file_setting">
      <TabHeader
        name="file_setting"
        description="upload_your_photo_and_personal_data_here"
      >
        <div className="file_setting_buttons">
          <button type="button">{t("practical.cancel")}</button>
          <button type="submit">{t("practical.save")}</button>
        </div>
      </TabHeader>
      <Formik
        initialValues={getInitialValues({})}
        validationSchema={getValidationSchema}
        onSubmit={handelSubmit}
      >
        <Form className="Form_details_container">
          <PersonalDetailsForm />
          <TitleDetailsForm />
          <AttachmentForm />
        </Form>
      </Formik>
    </div>
  );
};

export default FileSetting;
