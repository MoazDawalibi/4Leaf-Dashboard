import TextArea from "antd/es/input/TextArea";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const LaTeXInputMemo: React.FC<any> = React.memo(
  ({ field, form, label, ...props }) => {
    const { name, value } = field;

    const { setFieldValue } = form;
    const [curCentValue, setCurrentValue] = useState(value);
    const handleChangeInput = (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
      // setFieldValue(name, e.target.value);
      setCurrentValue(e.target.value);
    };
    console.log(name, "name");

    const [t] = useTranslation();

    return (
      <div className="LaTeXInput">
        <label htmlFor={name} className="text">
          {t(label || name)}
        </label>

        <div className="LaTeXInputArea">
          <TextArea
            size="large"
            showCount
            maxLength={1000}
            autoSize={{ minRows: 6, maxRows: 10 }}
            style={{ height: "400px" }}
            onChange={handleChangeInput}
            value={curCentValue}
            {...props}
          />
        </div>
      </div>
    );
  },
  (prevProps: any, nextProps: any): boolean => {
    const prevError = prevProps.form.errors[prevProps.field.name];
    const nextError = nextProps.form.errors[nextProps.field.name];

    const prevTouched = prevProps.form.touched[prevProps.field.name];
    const nextTouched = nextProps.form.touched[nextProps.field.name];

    const prevValue = prevProps.field.value;
    const nextValue = nextProps.field.value;

    return (
      prevValue === nextValue &&
      prevError === nextError &&
      prevTouched === nextTouched
    );
  },
);

export default LaTeXInputMemo;
