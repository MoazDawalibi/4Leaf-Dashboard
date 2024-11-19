import { Input } from "antd";
import React from "react";
import useFormField from "../../../Hooks/useFormField";
import { Field } from "formik";
import { ValidationFieldLabel } from "../components/ValidationFieldLabel";
import { ValidationFieldContainer } from "../components/ValidationFieldContainer";

const Default = ({
  name,
  label,
  placeholder,
  isDisabled,
  onChange,
  type,
  no_label,
  label_icon,
  ...props
}: any) => {
  const { errorMsg, isError, t, formik } = useFormField(name, props);

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
        <Field
          as={Input}
          type={type ?? "text"}
          placeholder={t(`input.${placeholder || label || name}`)}
          name={name}
          id={name}
          disabled={isDisabled}
          value={formik?.values?.[name]}
          size="large"
          {...(type === "number" && { min: 0 })}
          {...props}
        />
      </ValidationFieldContainer>
    </div>
  );
};

export default React.memo(Default);
