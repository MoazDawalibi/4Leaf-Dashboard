import { Input } from "antd";
import { Field } from "formik";
import React from "react";

const TowFiled = () => {
  return (
    <div className="SelectAndTime w-100">
      <label className="text">الصف & الشعبة *</label>
      <div className="TowItemField">
        <Field as={Input} type={"text"} name={"name"} size="large" />
        <Field as={Input} type={"text"} name={"name"} size="large" />
      </div>
    </div>
  );
};

export default TowFiled;
