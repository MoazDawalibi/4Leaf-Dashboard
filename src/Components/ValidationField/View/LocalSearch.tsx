import { Select } from "antd";
import React, { useState } from "react";
import useFormField from "../../../Hooks/useFormField";
import { translateOptions } from "../utils/translatedOptions";
import { ValidationFieldLabel } from "../components/ValidationFieldLabel";
import { ValidationFieldContainer } from "../components/ValidationFieldContainer";

const LocalSelectField = ({
  name,
  label,
  placeholder,
  isDisabled,
  option,
  isMulti,
  onChange,
  className,
  no_label,
  label_icon,
  ...props
}: any) => {
  const { errorMsg, isError, t, formik } = useFormField(name, props);

  // State to manage the search input value
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (
    input: string,
    option: { value: string; label: React.ReactNode | undefined },
  ) =>
    option?.label?.toString().toLowerCase().includes(input.toLowerCase()) ||
    option?.value?.toString().toLowerCase().includes(input.toLowerCase());

  const handleSelectChange = (value: any) => {
    formik.setFieldValue(name, value);
    if (onChange) onChange(value);
  };

  const handleSearchChange = (input: string) => {
    setSearchValue(input); // Update the search input value
  };

  return (
    <div className="ValidationField w-100">
      <ValidationFieldLabel
        name={name}
        label={label}
        label_icon={label_icon}
        no_label={no_label}
        placeholder={placeholder}
        t={t}
      />
      <ValidationFieldContainer isError={isError} errorMsg={errorMsg}>
        <Select
          placeholder={t(`input.${placeholder || label || name}`)}
          disabled={isDisabled}
          options={translateOptions(option, t)}
          size="large"
          className={`${className} ${isError ? "SelectError" : ""} w-100`}
          value={formik.values[name]}
          allowClear
          {...(isMulti && { mode: "multiple" })}
          onChange={handleSelectChange}
          showSearch
          filterOption={handleSearch} // Custom filter function
          searchValue={searchValue} // Control the search input value
          onSearch={handleSearchChange} // Update search input value on change
          id={name}
          fieldNames={{ label: "name", value: "id" }}
          {...props}
        />
      </ValidationFieldContainer>
    </div>
  );
};

export default React.memo(LocalSelectField);
