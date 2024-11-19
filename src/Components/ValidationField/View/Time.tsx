import { Form, TimePicker } from "antd";
import React from "react";
import useFormField from "../../../Hooks/useFormField";
import { MdOutlineEdit } from "react-icons/md";
import dayjs from "dayjs";
import { ValidationFieldLabel } from "../components/ValidationFieldLabel";

const Time = ({
  name,
  label,
  className,
  isDisabled,
  onChange,
  props,
  placeholder,
  no_label,
  label_icon,
}: any) => {
  const { errorMsg, isError, t, formik } = useFormField(name, props);
  const onCalendarChange = (value: any) => {
    formik.setFieldValue(name, value);
  };

  const Formatter = "H:mm";
  const FormikValue = formik.values[name];

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

      <Form.Item
        hasFeedback
        validateStatus={isError ? "error" : ""}
        help={isError ? errorMsg : ""}
      >
        <TimePicker
          allowClear
          className={`${className} w-100`}
          size="large"
          value={FormikValue ? dayjs(FormikValue, Formatter) : null}
          onChange={onChange || onCalendarChange}
          disabled={isDisabled}
          placeholder={t(`input.${placeholder || label || name}`)}
          format={Formatter}
          needConfirm={false}
          id={name}
        />
      </Form.Item>
    </div>
  );
};

export default Time;
