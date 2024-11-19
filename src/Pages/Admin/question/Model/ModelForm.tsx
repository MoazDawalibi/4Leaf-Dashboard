import { Row } from "reactstrap";
import ValidationField from "../../../../Components/ValidationField/ValidationField";
import { Field, useFormikContext } from "formik";
import { FaCirclePlus } from "react-icons/fa6";
import { useTranslation } from "react-i18next";
import { useObjectToEdit } from "../../../../zustand/ObjectToEditState";
import { useEffect } from "react";
import Choices from "./Field/Choices";
import SelectTag from "../../../../Components/CustomFields/SelectTag";
import useKeyCombination from "../../../../Hooks/useKeyCombination";
import { CombinationKeyEnum } from "../../../../enums/CombinationKeyEnum";
import { toast } from "react-toastify";
import LaTeXInputMemo from "../../../../Components/LatextInput/LaTeXInputMemo";
import ImageBoxFieldMemo from "../../../../Components/CustomFields/ImageBoxField/ImageBoxFieldMemo";
import useUnsavedChangesWarning from "../../../../Hooks/useUnsavedChangesWarning";

const Form = () => {
  const [t] = useTranslation();
  const formik = useFormikContext<any>();
  const { setSuccess, Success, ShowHint } = useObjectToEdit();

  const handleAddChoice = (fromKeyCombination: boolean = false) => {
    formik.setFieldValue("answers", [
      ...(formik?.values?.answers ?? []),
      {
        content: null,
        content_image: null,
        isCorrect: 0,
      },
    ]);

    if (fromKeyCombination) {
      toast.success(t("header.new_choice_have_been_added"));
    }
  };

  ////////////// hooks

  useKeyCombination(
    { ctrlKey: true, shiftKey: true, code: CombinationKeyEnum.CHOICE },
    () => {
      handleAddChoice(true);
    },
  );

  useUnsavedChangesWarning(formik.dirty);

  useEffect(() => {
    if (Success) {
      formik.resetForm();
      setSuccess(false);
    }
  }, [Success]);

  return (
    <Row className="w-100 exercise_form_container">
      <div className="exercise_form">
        <Field
          name="content"
          component={LaTeXInputMemo}
          label={t("input.answer_content")}
        />
        <Field component={ImageBoxFieldMemo} name="content_image" />
      </div>

      <Choices />
      {(formik?.values?.answers === null ||
        formik?.values?.answers === undefined ||
        formik?.values?.answers?.length < 5) && (
        <p className="add_new_button">
          <FaCirclePlus onClick={() => handleAddChoice()} size={23} />{" "}
          {t("header.add_new_choice")}
        </p>
      )}

      <div className="exercise_form_width">
        {ShowHint && (
          <ValidationField
            className=" "
            placeholder="_"
            name="hint"
            label="hint_question"
            type="TextArea"
            style={{ width: "100%", height: 60, resize: "none" }}
            showCount={false}
            autoSize={{ minRows: 2, maxRows: 10 }}
          />
        )}
        <SelectTag />
      </div>
    </Row>
  );
};

export default Form;
