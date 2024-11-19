import React from "react";
import { FaPlus } from "react-icons/fa";
import ClassesSegmented from "../Classes/ClassesSegmented";
import CustomSelect from "../CustomFields/Select/CustomSelect";

const FillterNavWithSegmented = () => {
  const OptionsData = [
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
  ];

  const onChange = (value: any) => {
    // console.log(`selected ${value}`);
  };

  return (
    <div className="FillterNav">
      <ClassesSegmented />

      <div className="SelectFillters">
        <button className="add_button">
          إضافة طالب جديد
          <FaPlus />
        </button>
        <CustomSelect
          options={OptionsData}
          placeholder="الشعبة"
          onChange={onChange}
        />
        <CustomSelect
          options={OptionsData}
          placeholder="الشعبة"
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default FillterNavWithSegmented;
