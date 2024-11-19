import { DatePicker } from "antd";
import React from "react";
import { useTranslation } from "react-i18next";
import { useObjectToEdit } from "../../../zustand/ObjectToEditState";
import { useLocation, useNavigate } from "react-router-dom";
import type { DatePickerProps } from "antd";
import dayjs from "dayjs";
import { DateEnum } from "../../../enums/Date";

const CustomDatePicker = () => {
  const [t] = useTranslation();
  const { setParamToSend, paramToSend } = useObjectToEdit();
  const navigate = useNavigate();
  const location = useLocation();

  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    // console.log(date, dateString);
    const newObj = { ...paramToSend };
    newObj.date = dateString;
    setParamToSend(newObj);
    navigate(
      `${location.pathname}?${paramToSend?.state ?? "all"}=${dateString}`,
    );
  };
  const Today = new Date() as any;

  return (
    <div className="CustomDatePicker">
      <DatePicker
        defaultValue={dayjs(Today)}
        placeholder={t(`input.select_date`)}
        onChange={onChange}
        format={DateEnum?.FORMATE}
      />
    </div>
  );
};

export default CustomDatePicker;
