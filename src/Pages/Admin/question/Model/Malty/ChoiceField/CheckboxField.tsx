import React from "react";
import { Checkbox } from "antd";
import { useFormikContext } from "formik";
import { useTranslation } from "react-i18next";
const CheckboxField = ({
  name,
  label,
  isDisabled,
  onChange,
  Group,
  className,
  parent_index,
  props,
}: any) => {
  const formik = useFormikContext<any>();
  const [t] = useTranslation();
  const CheckboxhandleChange = (value: any) => {
    const allAreZero = formik?.values?.Questions?.[parent_index]?.answers?.some(
      (item: any) => item.isCorrect === 1 || item.isCorrect === true,
    );
    if (allAreZero) {
      formik?.values?.Questions?.[parent_index]?.answers.forEach(
        (item: any, index: number) => {
          formik.setFieldValue(
            `Questions[${parent_index}].answers[${index}].isCorrect`,
            0,
          );
        },
      );
    }

    formik.setFieldValue(
      `Questions[${parent_index}].answers[${name}].isCorrect`,
      value?.target?.checked ? 1 : 0,
    );
  };
  return (
    <div className={Group ? "d-inline mt-5 Checkbox" : ``}>
      <Checkbox
        onChange={onChange || CheckboxhandleChange}
        disabled={isDisabled}
        checked={
          formik.values?.Questions?.[parent_index]?.answers?.[name]
            ?.isCorrect === 1 ||
          formik.values?.Questions?.[parent_index]?.answers?.[name]
            ?.isCorrect === true
        }
        className={className}
      >
        {t(`input.${label ? label : name}`)}
      </Checkbox>
    </div>
  );
};

export default CheckboxField;
