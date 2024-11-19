import React from "react";
import SearchField from "./SearchFieldWithSelect";
import { FaArrowRight, FaPlus } from "react-icons/fa";
import { useModalState } from "../../zustand/Modal";
import { ModalEnum } from "../../enums/Model";
import CustomSelect from "../CustomFields/Select/CustomSelect";

const FillterNav = () => {
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
  const onChange = (value: any) => {
    // console.log(`selected ${value}`);
  };

  const { setIsOpen } = useModalState((state) => state);
  return (
    <div className="FillterNav">
      <SearchField
        options={OptionsData}
        placeholder={"practical.search_here"}
      />
      <div className="SelectFillters">
        <button className="add_button">
          إضافة طالب جديد <FaPlus />
        </button>
        <button
          className="add_button"
          onClick={() => setIsOpen(ModalEnum?.FILLTER_NAV_MOVE_STUDENT)}
        >
          نقل طالب إلى <FaArrowRight />
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

export default FillterNav;
