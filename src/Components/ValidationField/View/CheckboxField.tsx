import React from "react";
import useFormField from "../../../Hooks/useFormField";
import { Checkbox } from "antd";
import { ValidationFieldContainer } from "../components/ValidationFieldContainer";
const CheckboxField = ({
  name,
  label,
  isDisabled,
  onChange,
  Group,
  className,
  props,
}: any) => {
  const { t, formik, isError, errorMsg } = useFormField(name, props);
  const CheckboxhandleChange = (value: any) => {
    formik.setFieldValue(name, value?.target?.checked);
  };

  return (
    <div className={Group ? "d-inline mt-3 Checkbox" : ``}>
      <ValidationFieldContainer isError={isError} errorMsg={errorMsg}>
        <Checkbox
          onChange={onChange || CheckboxhandleChange}
          disabled={isDisabled}
          checked={formik.values?.[name] ?? false}
          className={className}
        >
          {t(`input.${label ? label : name}`)}
        </Checkbox>
      </ValidationFieldContainer>
    </div>
  );
};

export default CheckboxField;
