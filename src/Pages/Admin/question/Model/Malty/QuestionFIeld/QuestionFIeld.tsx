import React, { useEffect } from "react";
import { Field, useFormikContext } from "formik";
import { useTranslation } from "react-i18next";
import { useObjectToEdit } from "../../../../../../zustand/ObjectToEditState";
import { GoTrash } from "react-icons/go";
import { Popconfirm } from "antd";
import LaTeXInputMemo from "../../../../../../Components/LatextInput/LaTeXInputMemo";
import ImageBoxFieldMemo from "../../../../../../Components/CustomFields/ImageBoxField/ImageBoxFieldMemo";

const QuestionFIeld = ({
  index,
  setFieldValue,
  values,
}: {
  index: number;
  setFieldValue: any;
  values: any;
}) => {
  const formik = useFormikContext<any>();
  const { setDeletedQuestions, DeletedQuestions } = useObjectToEdit();

  const [t] = useTranslation();
  useEffect(() => {
    setDeletedQuestions([]);
  }, [window?.location.pathname]);

  const handleDeleteQuestion = () => {
    const DeleteQuestionId = formik.values.Questions?.[index];
    if (DeleteQuestionId?.id) {
      setDeletedQuestions([...DeletedQuestions, DeleteQuestionId]);
    }
    const updatedAnswers = formik.values.Questions.filter(
      (_: any, i: any) => i !== index,
    );
    formik.setFieldValue(`Questions`, updatedAnswers);
  };

  const value = formik.values.Questions?.[index];

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
      <div className="exercise_forms">
        <div className="ChoiceFields">
          <Field
            component={LaTeXInputMemo}
            id={`question_${index + 1}`}
            name={`Questions[${index}].content`}
            label={t(`input.question`) + ` ` + `( ${index + 1} )`}
          />
          <Field
            component={ImageBoxFieldMemo}
            name={`Questions.${index}.content_image`}
          />
          {handelCanDeleteAnswers() ? (
            <div className="answer_status">
              <p
                className="delete_question_options"
                onClick={() => {
                  handleDeleteQuestion();
                }}
              >
                {t("header.delete_question")}
                <GoTrash className="trash_icon" size={17} />
              </p>
            </div>
          ) : (
            <div className="answer_status">
              <Popconfirm
                title={t("header.this_will_un_do_all_your_changes")}
                okText={t("practical.yes")}
                cancelText={t("practical.no")}
                onConfirm={() => {
                  handleDeleteQuestion();
                }}
                defaultOpen={false}
              >
                <p className="delete_question_options">
                  {t("header.delete_question")}
                  <GoTrash className="trash_icon" size={17} />
                </p>
              </Popconfirm>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default QuestionFIeld;
