import React, { useCallback } from "react";
import { Choice } from "../../../../../../types/Item";
import QuestionFIeld from "../QuestionFIeld/QuestionFIeld";
import Choices from "../ChoiceField/Choices";
import { FaCirclePlus } from "react-icons/fa6";
import ValidationField from "../../../../../../Components/ValidationField/ValidationField";
import MaltySelectTag from "../Tags/MaltySelectTag";
import { toast } from "react-toastify";
import SelectTagV2 from "../../../../../../Components/CustomFields/SelectTagV2";

export const Question: React.FC<any> = React.memo(({ index, data }) => {
  const { values, setFieldValue, ShowHint, t } = data;

  const handleAddChoice = useCallback(
    (parent_index: number, fromKeyCombination: boolean = false) => {
      setFieldValue(`Questions.[${parent_index}].answers`, [
        ...(values?.Questions?.[parent_index]?.answers as Choice[]),
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
    },
    [setFieldValue, values, t],
  );

  return (
    <div>
      <div className="exercise_form QuestionFIeld">
        <QuestionFIeld
          setFieldValue={setFieldValue}
          values={values}
          key={index}
          index={index}
        />
      </div>

      <Choices
        setFieldValue={setFieldValue}
        values={values}
        parent_index={index}
      />

      {values?.Questions?.[index]?.answers?.length < 5 && (
        <p className="add_new_button">
          <FaCirclePlus onClick={() => handleAddChoice(index)} size={23} />{" "}
          {t("header.add_new_choice")}
        </p>
      )}

      <div className="exercise_form_width">
        {ShowHint && (
          <ValidationField
            className=" "
            placeholder="_"
            name={`Questions.${index}.hint`}
            label="hint_question"
            type="TextArea"
            style={{ width: "100%", height: 60, resize: "none" }}
            autoSize={{ minRows: 2, maxRows: 10 }}
            showCount={false}
          />
        )}
        <MaltySelectTag parent_index={index} />
      </div>
    </div>
  );
});
