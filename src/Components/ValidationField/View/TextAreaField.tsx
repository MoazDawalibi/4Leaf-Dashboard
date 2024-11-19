import { Input } from "antd";
import React from "react";
import useFormField from "../../../Hooks/useFormField";
import { Field } from "formik";
import { ValidationFieldContainer } from "../components/ValidationFieldContainer";
const { TextArea } = Input;

const TextAreaField = ({
  name,
  label,
  placeholder,
  isDisabled,
  onChange,
  props,
}: any) => {
  const { formik, isError, errorMsg, t } = useFormField(name, props);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    formik.setFieldValue(name, e.target.value);
  };

  return (
    <div className="ValidationField w-100">
      <label htmlFor={name} className="text">
        {t(`input.${label ? label : name}`)}
      </label>
      <ValidationFieldContainer isError={isError} errorMsg={errorMsg}>
        <Field
          as={TextArea}
          placeholder={t(`input.${placeholder ? placeholder : name}`)}
          name={name}
          disabled={isDisabled}
          size="large"
          onChange={onChange || handleChange}
          id={name}
          //  onChange={onChange ? onChange : handleChange}
        />
      </ValidationFieldContainer>
    </div>
  );
};

export default React.memo(TextAreaField);
