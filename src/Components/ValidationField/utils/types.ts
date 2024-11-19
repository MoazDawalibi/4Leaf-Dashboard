import { InputProps, SelectProps } from "antd";

// Common properties for all field types
interface BaseFieldProps {
  name: string;
  label?: string;
  placeholder?: string;
  className?: string;
  isDisabled?: boolean;
  onChange?: (value: any) => void;
  dir?: "ltr" | "rtl";
  no_label?: boolean;
  label_icon?: boolean;
}

// Specific field type properties
export type SelectFieldProps = BaseFieldProps &
  SelectProps & {
    type: "Select" | "LocalSearch";
    option: any[];
    isMulti?: boolean;
    isLoading?: boolean;
    searchBy?: string;
    canChangePage?: boolean;
    PageName?: string;
    page?: number;
  };

export type SearchFieldProps = BaseFieldProps &
  SelectProps & {
    type: "Search";
    option: any[];
    isMulti?: boolean;
    isLoading: boolean;
    searchBy: string;
    canChangePage: boolean;
    PageName: string;
    page: number;
  };

type DateFieldProps = BaseFieldProps & {
  type: "DataRange" | "Date" | "Time";
  Format?:
    | "YYYY/MM/DD"
    | "MM/DD"
    | "YYYY/MM"
    | "YYYY-MM-DD HH:mm:ss.SSS"
    | "YYYY-MM-DD HH:mm:ss";
  picker?: "data" | "week" | "month" | "quarter" | "year";
  showTime?: boolean;
};

type FileFieldProps = BaseFieldProps & {
  type: "File" | "MaltyFile" | "DropFile";
};

type CheckboxFieldProps = BaseFieldProps & {
  type: "Checkbox";
  Group?: boolean;
};

export type FieldProps = BaseFieldProps &
  InputProps & {
    type?:
      | "text"
      | "number"
      | "password"
      | "email"
      | "TextArea"
      | "TextAreaMML"
      | "NumberFormate";
    label2?: string;
    Group?: boolean;
    [key: string]: any;
  };

// Union type for all field types
export type ValidationFieldProps =
  | SelectFieldProps
  | DateFieldProps
  | FileFieldProps
  | CheckboxFieldProps
  | SearchFieldProps
  | FieldProps;

// Validation field type
export type ValidationFieldType = ValidationFieldProps["type"];
