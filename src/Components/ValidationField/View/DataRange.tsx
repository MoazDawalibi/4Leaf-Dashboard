import { Form, DatePicker } from "antd";

import React from "react";
import useFormField from "../../../Hooks/useFormField";
import { MdOutlineEdit } from "react-icons/md";
import { ValidationFieldLabel } from "../components/ValidationFieldLabel";
import { ValidationFieldContainer } from "../components/ValidationFieldContainer";

const { RangePicker } = DatePicker;

const DataRange = ({
  name,
  label,
  Format,
  props,
  onChange,
  isDisabled,
  placeholder,
  className,
  no_label,
  label_icon,
}: any) => {
  const { errorMsg, isError, t, formik } = useFormField(name, props);
  const onCalendarChange = (value: any) => {
    formik.setFieldValue(name, value);
  };
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
        <RangePicker
          placeholder={placeholder}
          size="large"
          allowClear
          className={`${className} w-100`}
          format={Format}
          onChange={onChange || onCalendarChange}
          disabled={isDisabled}
          defaultValue={formik.values[name]}
          id={name}
        />
      </ValidationFieldContainer>
    </div>
  );
};

export default DataRange;
