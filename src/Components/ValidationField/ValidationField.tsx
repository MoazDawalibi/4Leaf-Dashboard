import React from "react";
import "./utils/ValidationField.scss";
import {
  Date,
  Time,
  File,
  DataRange,
  SelectField,
  CheckboxField,
  MaltyFile,
  SearchField,
  TextField,
  DropFile,
  TextAreaMML,
  Default,
} from "./View";
import { ValidationFieldProps, ValidationFieldType } from "./utils/types";
import LocalSearchField from "./View/LocalSearch";
import NumberFormate from "./View/NumberFormate";

const components: { [key: string]: React.FC<any> } = {
  Select: SelectField,
  Search: SearchField,
  LocalSearch: LocalSearchField,
  DataRange: DataRange,
  TextArea: TextField,
  TextAreaMML: TextAreaMML,
  Date: Date,
  Time: Time,
  File: File,
  DropFile: DropFile,
  MaltyFile: MaltyFile,
  Checkbox: CheckboxField,
  NumberFormate: NumberFormate,
};

const ValidationField: React.FC<ValidationFieldProps> = React.memo(
  ({ type = "text", ...otherProps }) => {
    const Component = components[type ?? ("text" as ValidationFieldType)];

    if (!Component) {
      return <Default {...otherProps} />;
    }
    return <Component {...otherProps} />;
  },
);

export default ValidationField;
