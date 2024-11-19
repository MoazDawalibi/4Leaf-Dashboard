import React from "react";
import useFormField from "../../../../../Hooks/useFormField";
import { Checkbox, Form } from "antd";
import { useFormik, useFormikContext } from "formik";
import { useTranslation } from "react-i18next";
const CheckboxField = ({
  name,
  label,
  isDisabled,
  onChange,
  Group,
  className,
  props,
}: any) => {
  const formik = useFormikContext<any>();
  const [t] = useTranslation();
  const CheckboxhandleChange = (value: any, index: number) => {
    const allAreZero = formik?.values?.answers?.some(
      (item: any) => item.isCorrect === 1 || item.isCorrect === true,
    );

    if (allAreZero) {
      formik?.values.answers.forEach((item: any, index: number) => {
        formik.setFieldValue(`answers[${index}].isCorrect`, 0);
      });
    }

    formik.setFieldValue(
      `answers[${name}].isCorrect`,
      value?.target?.checked ? 1 : 0,
    );
  };
  return (
    <div className={Group ? "d-inline mt-5 Checkbox" : ``}>
      <Checkbox
        onChange={onChange || CheckboxhandleChange}
        disabled={isDisabled}
        checked={
          formik.values?.answers?.[name]?.isCorrect === 1 ||
          formik.values?.answers?.[name]?.isCorrect === true
        }
        className={className}
      >
        {t(`input.${label ? label : name}`)}
      </Checkbox>
    </div>
  );
};

export default CheckboxField;
