import React from "react";
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
  const newName = `Questions[${name}].canAnswersBeShuffled`;

  const CheckboxhandleChange = (value: any, index: number) => {
    formik.setFieldValue(newName, value?.target?.checked ? 1 : 0);
  };
  return (
    <div className={Group ? "d-inline mt-5 Checkbox" : ``}>
      <Checkbox
        onChange={onChange || CheckboxhandleChange}
        disabled={isDisabled}
        checked={formik.values?.Questions?.[name]?.canAnswersBeShuffled === 1}
        className={className}
      >
        {t(`input.${label ? label : name}`)}
      </Checkbox>
    </div>
  );
};

export default CheckboxField;
