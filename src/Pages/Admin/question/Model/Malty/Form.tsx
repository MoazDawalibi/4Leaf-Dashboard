import { Row } from "reactstrap";
import { useEffect } from "react";
import { useFormikContext } from "formik";
import { FaCirclePlus } from "react-icons/fa6";
import { Choice } from "../../../../../types/Item";
import { useTranslation } from "react-i18next";
import { useObjectToEdit } from "../../../../../zustand/ObjectToEditState";
import useKeyCombination from "../../../../../Hooks/useKeyCombination";
import { CombinationKeyEnum } from "../../../../../enums/CombinationKeyEnum";
import { toast } from "react-toastify";
import MainInputs from "./components/MainInputs";
import Questions from "./components/Questions";
import useUnsavedChangesWarning from "../../../../../Hooks/useUnsavedChangesWarning";

const Form = () => {
  const formik = useFormikContext<any>();
  const { setSuccess, Success, ShowHint } = useObjectToEdit();

  const handleAddChoice = (
    parent_index: number,
    fromKeyCombination: boolean = false,
  ) => {
    formik.setFieldValue(`Questions.[${parent_index}].answers`, [
      ...((formik?.values as any)?.Questions?.[parent_index]
        ?.answers as Choice[]),

      {
        answer: null,
        content_image: null,
        content: null,
        isCorrect: 0,
      },
    ]);

    if (fromKeyCombination) {
      toast.success(t("header.new_choice_have_been_added"));
    }
  };

  const handleAddQuestion = (fromKeyCombination: boolean = false) => {
    formik.setFieldValue("Questions", [
      ...((formik?.values as any)?.Questions as Choice[]),

      {
        content: "",
        image: "",
        parent: "",
        isBase: 0,
        // max_mark: 1,
        // min_mark_to_pass: 1,
        answers: [{ answer: null, answer_image: null, isCorrect: 0 }],
        tags: [],
      },
    ]);

    const max_mark = formik?.values?.max_mark + 1;

    formik.setFieldValue("max_mark", max_mark);
    if (fromKeyCombination) {
      toast.success(t("header.new_question_have_been_added"));
    }
  };
  const [t] = useTranslation();

  const lastQuestions = formik?.values?.Questions?.length - 1;

  ////////////// hooks
  useKeyCombination(
    { ctrlKey: true, shiftKey: true, code: CombinationKeyEnum.CHOICE },
    () => {
      handleAddChoice(lastQuestions, true);
    },
  );

  useKeyCombination(
    { ctrlKey: true, shiftKey: true, code: CombinationKeyEnum.QUESTION },
    () => {
      handleAddQuestion(true);
    },
  );
  useUnsavedChangesWarning(formik.dirty);

  //////////////
  useEffect(() => {
    if (Success) {
      formik.resetForm();
      setSuccess(false);
    }
  }, [Success]);

  return (
    <Row className="w-100 exercise_form_container">
      <MainInputs />
      <div className="flex"></div>
      <Questions setFieldValue={formik.setFieldValue} values={formik.values} />
      <p className="add_new_button">
        <FaCirclePlus onClick={() => handleAddQuestion()} size={23} />{" "}
        {t("header.add_new_question")}
      </p>
    </Row>
  );
};

export default Form;
