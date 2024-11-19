import { Input } from "antd";
import React from "react";
import useFormField from "../../../Hooks/useFormField";
import { ValidationFieldLabel } from "../components/ValidationFieldLabel";
import { ValidationFieldContainer } from "../components/ValidationFieldContainer";
import LatexPreview from "../../CustomFields/MathComponent";
const { TextArea } = Input;

const TextFieldMML = ({
  name,
  label,
  placeholder,
  isDisabled,
  onChange,
  no_label,
  label_icon,
  className,
  mathContent, // Add mathContent prop
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
        <TextArea
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

export default React.memo(TextFieldMML);
