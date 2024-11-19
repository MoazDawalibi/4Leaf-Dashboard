import React from "react";
import ValidationField from "../../../../../../Components/ValidationField/ValidationField";
import { Field } from "formik";
import { useTranslation } from "react-i18next";
import CheckboxField from "./CheckboxField";
import { GoTrash } from "react-icons/go";
import { Popconfirm } from "antd";
import { useObjectToEdit } from "../../../../../../zustand/ObjectToEditState";
import LaTeXInputMemo from "../../../../../../Components/LatextInput/LaTeXInputMemo";
import ImageBoxFieldMemo from "../../../../../../Components/CustomFields/ImageBoxField/ImageBoxFieldMemo";

const ChoiceFields = React.memo(
  ({
    index,
    parent_index,
    setFieldValue,
    values,
  }: {
    index: number;
    parent_index: number;
    setFieldValue: any;
    values: any;
  }) => {
    const [t] = useTranslation();
    const { ShowHint } = useObjectToEdit();
    const handleDeleteChoice = () => {
      document
        .getElementById(`ChoiceField_${parent_index}_${index}`)
        ?.classList.add("exit");

      const updatedAnswers = values.Questions?.[parent_index].answers.filter(
        (_: any, i: any) => i !== index,
      );
      setTimeout(() => {
        setFieldValue(`Questions[${parent_index}].answers`, updatedAnswers);
        document
          .getElementById(`ChoiceField_${parent_index}_${index}`)
          ?.classList.remove("exit");
      }, 500);
    };

    const value = values.Questions?.[parent_index]?.answers?.[index];

    const handelCanDeleteAnswers = () => {
      const content = value?.content;
      const content_image = value?.content_image;
      if (!content && !content_image) {
        return true;
      }
      return false;
    };

    return (
      <>
        <div
          id={`ChoiceField_${parent_index}_${index}`}
          className="ChoiceFields"
        >
          <Field
            component={LaTeXInputMemo}
            name={`Questions[${parent_index}].answers[${index}].content`}
            label={t(`input.choice`) + ` ` + `( ${index + 1} )`}
          />

          <Field
            component={ImageBoxFieldMemo}
            name={`Questions.${parent_index}.answers.${index}.content_image`}
          />

          <div className="answer_status">
            <CheckboxField
              className=""
              label="The_correct_answer"
              name={index}
              type="Checkbox"
              parent_index={parent_index}
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
      </>
    );
  },
  (prevProps, nextProps) => {
    console.log(
      prevProps.values?.Questions?.[prevProps?.parent_index]?.answers?.[
        prevProps?.index
      ] ===
        nextProps.values?.Questions?.[nextProps?.parent_index]?.answers?.[
          prevProps?.index
        ],
    );

    return (
      prevProps.values?.Questions?.[prevProps?.parent_index]?.answers?.[
        prevProps?.index
      ] ===
      nextProps.values?.Questions?.[nextProps?.parent_index]?.answers?.[
        prevProps?.index
      ]
    );
  },
);

export default ChoiceFields;
