import { Field } from "formik";
import React from "react";
import LaTeXInputMemo from "../../../../../../Components/LatextInput/LaTeXInputMemo";
import ImageBoxFieldMemo from "../../../../../../Components/CustomFields/ImageBoxField/ImageBoxFieldMemo";
import { useTranslation } from "react-i18next";

const MainInputs = () => {
  const [t] = useTranslation();
  return (
    <div className="exercise_form">
      <Field
        name="content"
        component={LaTeXInputMemo}
        label={t("input.answer_content")}
      />

      <Field component={ImageBoxFieldMemo} name="content_image" />

      <div></div>
    </div>
  );
};

export default MainInputs;
