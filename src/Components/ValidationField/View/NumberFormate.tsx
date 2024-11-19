import { InputNumber } from "antd";
import React from "react";
import useFormField from "../../../Hooks/useFormField";
import { Field } from "formik";
import { ValidationFieldLabel } from "../components/ValidationFieldLabel";
import { ValidationFieldContainer } from "../components/ValidationFieldContainer";

const NumberFormate = ({
  name,
  label,
  placeholder,
  isDisabled,
  type,
  no_label,
  label_icon,
  ...props
}: any) => {
  const { errorMsg, isError, t, formik } = useFormField(name, props);
  const SelectableChange = (value: {
    value: string;
    label: React.ReactNode;
  }) => {
    formik.setFieldValue(name, value);
  };
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
          as={InputNumber}
          formatter={(value: any) =>
            `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
          }
          parser={(value: any) =>
            value?.replace(/\$\s?|(,*)/g, "") as unknown as number
          }
          min="0"
          type={type ?? "text"}
          value={formik.values[name]}
          onChange={SelectableChange}
          placeholder={t(`input.${placeholder || label || name}`)}
          name={name}
          disabled={isDisabled}
          size="large"
          id={name}
          {...props}

          //  onChange={onChange ? onChange : handleChange}
        />
      </ValidationFieldContainer>
    </div>
  );
};

export default React.memo(NumberFormate);
