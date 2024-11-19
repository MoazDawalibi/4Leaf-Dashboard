import { DatePicker, Select } from "antd";
import React from "react";

const SelectAndTime = () => {
  const onChange: any["onChange"] = (date: any, dateString: any) => {
    // console.log(date, dateString);
  };
  const onChangeSearch = (value: string) => {
    // console.log(`selected ${value}`);
  };

  const onSearch = (value: string) => {
    // console.log('search:', value);
  };

  // Filter `option.label` match the user type `input`
  const filterOption = (
    input: string,
    option?: { label: string; value: string },
  ) => (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

  return (
    <div className="SelectAndTime w-100">
      <label className="text">تاريخ & مكان الولادة *</label>
      <div className="TowItemField">
        <DatePicker size="large" onChange={onChange} picker="month" />
        <Select
          showSearch
          placeholder="Select a person"
          optionFilterProp="children"
          onChange={onChange}
          onSearch={onChangeSearch}
          filterOption={filterOption}
          size="large"
          options={[
            {
              value: "jack",
              label: "Jack",
            },
            {
              value: "lucy",
              label: "Lucy",
            },
            {
              value: "tom",
              label: "Tom",
            },
          ]}
        />
      </div>
    </div>
  );
};

export default SelectAndTime;
