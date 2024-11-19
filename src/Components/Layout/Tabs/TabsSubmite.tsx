import React from "react";
import { useModalTabsState } from "../../../zustand/ModalTabsState";
import { useModalState } from "../../../zustand/Modal";
import { useFormikContext } from "formik";
import { toast } from "react-toastify";

interface TabsSubmiteProps {
  steps: number;
}

const TabsSubmite: React.FC<TabsSubmiteProps> = ({ steps }) => {
  const formik = useFormikContext<any>();

  const { isOpen, setIsOpen } = useModalState((state) => state);
  const { ActiveTab, setActiveTab } = useModalTabsState((state) => state);
  function handelNext() {
    // console.log("submited");

    if (Number(ActiveTab) >= steps) {
      return;
    }
    setActiveTab(Number(ActiveTab) + 1);
  }
  function handelPre() {
    setActiveTab(Number(ActiveTab) - 1);
  }

  const handleSubmit = () => {
    if (formik.isValid) {
      formik.submitForm();
    } else {
      toast.error("الرجاء ادخال جنيع البيانات المطلوبة");
    }
  };

  return (
    <div className="SubmitButton">
      <div onClick={handelPre}>
        {ActiveTab > 0 ? "رجوع للخطوة السابقة" : ""}
      </div>
      <button
        onClick={ActiveTab + 1 !== steps ? handelNext : () => handleSubmit()}
      >
        {ActiveTab + 1 !== steps ? "الخطوة التالية" : "إضافة الطالب"}
      </button>
    </div>
  );
};

export default TabsSubmite;
