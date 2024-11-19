import { Input } from "antd";
import React from "react";

interface CustomInputProps {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CustomInput: React.FC<CustomInputProps> = React.memo(
  ({ name, value, onChange }) => {
    console.log(`Rendering ${name}`); // For debugging purposes
    return <Input type="text" name={name} value={value} onChange={onChange} />;
  },
);

export default CustomInput;
