import { Modal } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useFormikContext } from "formik";
import React, { useState } from "react";
import { convertMathMLToLaTeX } from "../../utils/convertMathMLToLaTeX";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import { parseTextAndLatex } from "../../utils/parseTextAndLatex";

const EditLaTexModal = ({
  name,
  setLatex,
  Latex,
  setIsModalOpen,
  isModalOpen,
}: {
  name: string;
  setLatex: (value: string) => void;
  Latex: any;
  setIsModalOpen: (value: boolean) => void;
  isModalOpen: boolean;
}) => {
  const { values } = useFormikContext<any>();
  const [Value, setValue] = useState(Latex?.text ?? Latex);

  const handleOk = () => {
    console.log(1);

    const oldValue = values?.[name];
    const currentKey = Latex?.key;
    const Preview = parseTextAndLatex(oldValue ?? "");
    console.log(Latex);

    const newLatex = convertMathMLToLaTeX(Latex);
    console.log(newLatex);

    if (newLatex) {
      const newArray = Preview?.map((item: any, index: number) => {
        if (item?.key) return item;
      });
    } else {
      toast.error(t("validation.that_is_not_a_valid_mml"));
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
    console.log(newValue, "newValue");
    setValue(newValue);
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
          maxLength={1000}
          autoSize={{ minRows: 4, maxRows: 10 }}
          style={{ height: "400px" }}
          onChange={handleChangeInputLatex}
          value={Value}
        />
        <div className="buttons">
          <div className="back_button pointer" onClick={handleCancel}>
            {t("practical.cancel")}
          </div>
          <div className="add_button" onClick={handleOk}>
            {t(`practical.${"edit"}`)}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default EditLaTexModal;
