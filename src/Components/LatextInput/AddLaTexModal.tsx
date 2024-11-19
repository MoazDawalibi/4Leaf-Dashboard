import { Modal } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useFormikContext } from "formik";
import React, { useState } from "react";
import { convertMathMLToLaTeX } from "../../utils/convertMathMLToLaTeX";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";

const AddLaTexModal = ({
  name,
  setLatex,
  Latex,
  setIsModalOpen,
  isModalOpen,
  setCurrentValue,
}: {
  name: string;
  setLatex: (value: string) => void;
  Latex: string;
  setIsModalOpen: (value: boolean) => void;
  isModalOpen: boolean;
  setCurrentValue: (value: string) => void;
}) => {
  const { values, setFieldValue, getFieldProps } = useFormikContext<any>();

  const currentValue = getFieldProps(name).value;
  const handleOk = () => {
    const oldValue = currentValue ?? "";
    const newLatex = convertMathMLToLaTeX(Latex);
    console.log(oldValue);

    if (newLatex) {
      setFieldValue(name, oldValue + " $$ " + newLatex + " $$ ");
      setCurrentValue(oldValue + " $$ " + newLatex + " $$ ");
      setLatex("");
      setIsModalOpen(false);
    } else {
      setFieldValue(name, oldValue + " $$ " + Latex + " $$ ");
      setCurrentValue(oldValue + " $$ " + Latex + " $$ ");
      setLatex("");
      setIsModalOpen(false);
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setLatex("");
  };

  const handleChangeInputLatex = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const newValue = e.target.value;
    setLatex(newValue);
  };

  const [t] = useTranslation();
  return (
    <Modal
      footer={false}
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <div className="latexModal">
        <label className="mb-3"> {t("header.past_your_MMl_text")} </label>
        <TextArea
          size="large"
          showCount
          maxLength={5000}
          autoSize={{ minRows: 4, maxRows: 10 }}
          style={{ height: "400px" }}
          onChange={handleChangeInputLatex}
          value={Latex}
        />
        <div className="buttons">
          <div className="back_button pointer" onClick={handleCancel}>
            {t("practical.cancel")}
          </div>
          <div className="add_button" onClick={handleOk}>
            {t(`practical.${"add"}`)}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default AddLaTexModal;
