import { Form, Input } from "antd";
import React from "react";
import useFormField from "../../../Hooks/useFormField";
import { MdOutlineEdit } from "react-icons/md";
import { Field } from "formik";
import { ValidationFieldLabel } from "../components/ValidationFieldLabel";
import { ValidationFieldContainer } from "../components/ValidationFieldContainer";
const { TextArea } = Input;

const TextField = ({
  name,
  label,
  label2,
  placeholder,
  isDisabled,
  onChange,
  no_label,
  label_icon,
  className,
  ...props
}: any) => {
  const { formik, isError, errorMsg, t } = useFormField(name, props);
  const TextFilehandleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    formik.setFieldValue(name, e.target.value);
  };

  return (
    <div className={`ValidationField w-100 ${className ?? ""} `}>
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
          as={TextArea}
          placeholder={t(`input.${placeholder ? placeholder : name}`)}
          name={name}
          disabled={isDisabled}
          size="large"
          showCount
          maxLength={1000}
          autoSize={{ minRows: 4, maxRows: 10 }}
          onChange={onChange || TextFilehandleChange}
          id={name}
          {...props}
        />
      </ValidationFieldContainer>
    </div>
  );
};

export default React.memo(TextField);
