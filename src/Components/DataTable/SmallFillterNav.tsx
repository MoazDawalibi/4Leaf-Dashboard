import React from "react";
import SearchField from "./SearchFieldWithSelect";
import { IoSearch } from "react-icons/io5";
import { Select } from "antd";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaArrowRight, FaPlus } from "react-icons/fa";
import { useModalState } from "../../zustand/Modal";

const SmallFillterNav = () => {
  const OptionsData = [
    {
      value: 1,
      label: "Jack",
    },
    {
      value: 2,
      label: "Lucy",
    },
    {
      value: 3,
      label: "Tom",
    },
  ];
  return (
    <div className="SmallFillterNav">
      <header>
        <FaArrowRight /> نشاطات الطالب <span>( آية العمري ) </span>
      </header>
      <SearchField
        options={OptionsData}
        placeholder={"practical.search_here"}
      />
    </div>
  );
};

export default SmallFillterNav;
