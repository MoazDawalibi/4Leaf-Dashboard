import { Form, DatePicker } from "antd";
import React from "react";
import useFormField from "../../../Hooks/useFormField";
import { MdOutlineEdit } from "react-icons/md";
import dayjs from "dayjs";
import { DateEnum } from "../../../enums/Date";
import { ValidationFieldLabel } from "../components/ValidationFieldLabel";
import { ValidationFieldContainer } from "../components/ValidationFieldContainer";

const Date = ({
  name,
  label,
  picker = "date",
  isDisabled,
  onChange,
  placeholder,
  className,
  no_label,
  label_icon,
  ...props
}: any) => {
  const { errorMsg, isError, t, formik } = useFormField(name, props);

  const FormikValue = formik.values[name];
  const onCalendarChange = (value: any) => {
    formik.setFieldValue(name, value);
  };
  const Formatter = [DateEnum?.FORMATE];
  return (
    <div className="ValidationField w-100 ">
      <ValidationFieldLabel
        name={name}
        label={label}
        label_icon={label_icon}
        no_label={no_label}
        placeholder={placeholder}
        t={t}
      />

      <ValidationFieldContainer isError={isError} errorMsg={errorMsg}>
        <DatePicker
          picker={picker}
          placeholder={t(`input.${placeholder}`)}
          allowClear
          className={`${className} w-100`}
          value={FormikValue ? FormikValue : null}
          size="large"
          onChange={onChange || onCalendarChange}
          disabled={isDisabled}
          format={props?.Format ?? Formatter}
          id={name}
          needConfirm={false}
          {...props}
        />
        {/* <DatePicker onChange={onChange} /> */}
      </ValidationFieldContainer>
    </div>
  );
};

export default Date;
