import { Input } from "antd";
import React, { useState } from "react";

const Test = React.memo(
  ({ field, form }: { field: any; form: any }) => {
    const name = field.name;
    const { setFieldValue, getFieldProps } = form;
    console.log(name);
    const value = getFieldProps(`${name}`).value;
    const [CurrentValue, setCurrentValue] = useState(value);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setCurrentValue(e.target.value);
    };
    const onBlur = () => {
      setFieldValue(`${name}`, CurrentValue);
    };
    return (
      <>
        <Input
          onChange={(e) => handleChange(e)}
          value={CurrentValue}
          type="text"
          name=""
          id=""
          onBlur={onBlur}
        />
      </>
    );
  },
  (prevProps: any, nextProps: any) => {
    const prevValue = prevProps.field.value;
    const nextValue = nextProps.field.value;

    return prevValue === nextValue;
  },
);

export default Test;
