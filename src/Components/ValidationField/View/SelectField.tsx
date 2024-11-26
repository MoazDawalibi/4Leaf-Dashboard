import { Select } from "antd";
import React from "react";
import useFormField from "../../../Hooks/useFormField";
import { translateOptions } from "../utils/translatedOptions";
import { ValidationFieldLabel } from "../components/ValidationFieldLabel";
import { ValidationFieldContainer } from "../components/ValidationFieldContainer";
import { SelectFieldProps } from "../utils/types";

const SelectField = ({
  name,
  label,
  placeholder,
  isDisabled,
  option,
  isMulti,
  onChange,
  className,
  no_label,
  label_icon,
  isLoading,
  ...props
}: SelectFieldProps) => {
  const { errorMsg, isError, t, formik } = useFormField(name, props);
  const SelectableChange = (value: {
    value: string;
    label: React.ReactNode;
  }) => {
    formik.setFieldValue(name, value);
  };
  const options = translateOptions(option, t);

  return (
    <div className="ValidationField w-100">
      <ValidationFieldLabel
        name={name}
        label={label}
        label_icon={label_icon}
        no_label={no_label}
        placeholder={placeholder}
        t={t}
      />

      <ValidationFieldContainer isError={isError} errorMsg={errorMsg}>
        <Select
          placeholder={t(`input.${placeholder || label || name}`)}
          disabled={isDisabled}
          options={options}
          {...(isLoading && { loading: isLoading })}
          size="large"
          className={`${className} ${isError ? "SelectError" : ""} w-100`}
          value={formik?.values[name]}
          allowClear
          {...(isMulti && { mode: "multiple" })}
          onChange={onChange || SelectableChange}
          showSearch={false}
          id={name}
          fieldNames={{ label: "name", value: "id" }}
          {...props}
        />
      </ValidationFieldContainer>
    </div>
  );
};

export default React.memo(SelectField);
