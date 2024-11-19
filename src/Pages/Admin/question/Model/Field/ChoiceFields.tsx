import React from "react";
import { Choice } from "../../../../../types/Item";
import ValidationField from "../../../../../Components/ValidationField/ValidationField";
import { Field, useFormikContext } from "formik";
import { useTranslation } from "react-i18next";
import CheckboxField from "./CheckboxField";
import { GoTrash } from "react-icons/go";
import { Popconfirm } from "antd";
import { useObjectToEdit } from "../../../../../zustand/ObjectToEditState";
import LaTeXInputMemo from "../../../../../Components/LatextInput/LaTeXInputMemo";
import ImageBoxFieldMemo from "../../../../../Components/CustomFields/ImageBoxField/ImageBoxFieldMemo";

const ChoiceFields = ({ index }: { index: number; data: Choice }) => {
  const formik = useFormikContext<any>();

  const [t] = useTranslation();
  const { ShowHint } = useObjectToEdit();

  const handleDeleteChoice = () => {
    document.getElementById(`ChoiceField_${index}`)?.classList.add("exit");
    const updatedAnswers = formik.values.answers.filter(
      (_: any, i: any) => i !== index,
    );
    setTimeout(() => {
      formik.setFieldValue("answers", updatedAnswers);
      document.getElementById(`ChoiceField_${index}`)?.classList.remove("exit");
    }, 500);
  };

  const values = formik?.values?.answers?.[index];
  const handelCanDeleteAnswers = () => {
    const content = values?.content;
    const content_image = values?.content_image;
    if (!content && !content_image) {
      return true;
    }
    return false;
  };

  return (
    <>
      <div id={`ChoiceField_${index}`} className="ChoiceFields">
        <Field
          component={LaTeXInputMemo}
          id={`choice_${index + 1}`}
          name={`answers.${index}.content`}
          label={t(`input.choice`) + ` ` + `( ${index + 1} )`}
        />
        <Field
          component={ImageBoxFieldMemo}
          name={`answers.${index}.content_image`}
        />

        <div className="answer_status">
          <CheckboxField
            className=""
            label="The_correct_answer"
            name={index}
            type="Checkbox"
          />
          {handelCanDeleteAnswers() ? (
            <p
              className="delete_question_options"
              onClick={() => {
                handleDeleteChoice();
              }}
            >
              {t("header.delete_choice")}
              <GoTrash className="trash_icon" size={17} />
            </p>
          ) : (
            <Popconfirm
              title={t("header.this_will_un_do_all_your_changes")}
              okText={t("practical.yes")}
              cancelText={t("practical.no")}
              onConfirm={() => {
                handleDeleteChoice();
              }}
              defaultOpen={false}
            >
              <p className="delete_question_options">
                {t("header.delete_choice")}
                <GoTrash className="trash_icon" size={17} />
              </p>
            </Popconfirm>
          )}
        </div>
      </div>
      <div className="exercise_form_width">
        {ShowHint && (
          <ValidationField
            className="hint"
            placeholder="_"
            name={`answers.${index}.hint`}
            label="hint"
            type="TextArea"
            style={{ width: "100%", height: 60, resize: "none" }}
            showCount={false}
            autoSize={{ minRows: 2, maxRows: 10 }}
          />
        )}
      </div>
    </>
  );
};

export default ChoiceFields;
