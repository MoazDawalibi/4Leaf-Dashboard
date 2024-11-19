import { Form, Input } from "antd";
import React from "react";
import useFormField from "../../../../../../Hooks/useFormField";
import { MdOutlineEdit } from "react-icons/md";
import { Field } from "formik";
const { TextArea } = Input;

const TextField = ({
  name,
  label,
  label2,
  placeholder,
  isDisabled,
  onChange,
  props,
  no_label,
  label_icon,
  parent_index,
  className,
}: any) => {
  const newName = `Questions[${parent_index}].answers[${name}].content`;
  const { formik, isError, errorMsg, t } = useFormField(newName, props);
  const TextFilehandleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    // console.log('Change:', e.target.value);
    formik.setFieldValue(newName, e.target.value);
  };

  return (
    <div className={`ValidationField w-100 ${className ?? ""} `}>
      {no_label ? (
        <label htmlFor={name} className="text">
          <span>empty</span>
        </label>
      ) : label_icon ? (
        <div className="LabelWithIcon">
          <label htmlFor={name} className="text">
            {label2 ? label2 : t(`input.${label ? label : name}`)}
          </label>
          <MdOutlineEdit size={22} style={{ color: "#A098AE" }} />
        </div>
      ) : (
        <label htmlFor={name} className="text">
          {label2 ? label2 : t(`input.${label ? label : name}`)}
        </label>
      )}

      <Form.Item
        hasFeedback
        validateStatus={isError ? "error" : ""}
        help={isError ? errorMsg : ""}
      >
        <Field
          as={TextArea}
          placeholder={t(`input.${placeholder ? placeholder : name}`)}
          name={newName}
          disabled={isDisabled}
          size="large"
          showCount
          maxLength={1000}
          onChange={onChange || TextFilehandleChange}
          autoSize={{ minRows: 4, maxRows: 10 }}
        />
      </Form.Item>
    </div>
  );
};

export default React.memo(TextField);
