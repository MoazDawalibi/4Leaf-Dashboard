import React, { useState } from "react";
import { FaArrowRight, FaPlus } from "react-icons/fa";
import SearchField from "./SearchFieldWithSelect";
import { useButtonState } from "../../zustand/ButtonState";

const FillterNavWithRadio = () => {
  const [activeButton, setActiveButton] = useState(0);
  const { setActiveTab } = useButtonState((state) => state);

  // Function to handle button click
  const handleButtonClick = (index: number) => {
    setActiveButton(index);
    setActiveTab(index);
  };
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
  const buttonLabels = ["أوراق عمل", "نماذج السبر البيتي", "فيديوهات تعليمية"];

  return (
    <div className="FillterNavWithRadio">
      <header>
        <FaArrowRight /> نشاطات الطالب <span>( آية العمري ) </span>
      </header>
      <span>
        <SearchField
          options={OptionsData}
          placeholder={"practical.search_here"}
        />

        <div className="ButtonTabs">
          {buttonLabels.map((label, index) => (
            <button
              key={index}
              className={activeButton === index ? "Activebutton" : "button"}
              onClick={() => handleButtonClick(index)}
            >
              {label}
            </button>
          ))}
        </div>
      </span>
    </div>
  );
};

export default FillterNavWithRadio;
