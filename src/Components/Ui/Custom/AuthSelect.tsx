import { Select } from "antd";
import { useFormikContext } from "formik";
import React from "react";

interface AuthSelectProps {
  options: {}[];
  name: string;
  disabled?: boolean;
  label: string;
  placeholder: string;
  KEY_OBJECT: any;
}

const AuthSelect: React.FC<AuthSelectProps> = ({
  options,
  name,
  disabled,
  label,
  placeholder,
  KEY_OBJECT,
}: AuthSelectProps) => {
  const { setFieldValue } = useFormikContext();

  const handleSelectChange = (value: any, option: any) => {
    setFieldValue(name, value);
    localStorage.setItem(KEY_OBJECT, JSON.stringify(option));
  };

  return (
    <div className="AuthSelect">
      <label className="form-label" htmlFor="password">
        {label}
      </label>
      <Select
        style={{ width: "100%" }}
        onChange={handleSelectChange}
        options={options}
        className="Auth_Select"
        disabled={disabled}
        placeholder={placeholder}
      />
    </div>
  );
};

export default AuthSelect;
