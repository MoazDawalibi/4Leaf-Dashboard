import React, { useEffect, useState } from "react";
import { Input, Modal, Spin } from "antd";
import { useModalState } from "../../zustand/Modal";
import { useObjectToEdit } from "../../zustand/ObjectToEditState";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { MdCancel } from "react-icons/md";

interface ModalFormProps {
  deleteMutation: any;
  ModelEnum: any;
  isNavigate?: boolean;
  idVerify?: boolean;
}

const DeleteModels: React.FC<ModalFormProps> = ({
  deleteMutation,
  ModelEnum,
  isNavigate = false,
  idVerify = true,
}) => {
  const { isOpen, setIsOpen } = useModalState((state) => state);
  const [inputValue, setInputValue] = useState("");

  const { mutate, isLoading, isSuccess } = deleteMutation;
  const { objectToEdit, setObjectToEdit } = useObjectToEdit();

  const iaDisabled = idVerify
    ? Number(objectToEdit?.id) !== Number(inputValue) || isLoading
    : objectToEdit?.key !== inputValue || isLoading;

  const navigate = useNavigate();
  useEffect(() => {
    if (isSuccess) {
      setIsOpen("");
      setInputValue("");
      if (isNavigate) {
        navigate(-1);
      }
    }
  }, [isSuccess, setIsOpen]);

  const handleSubmit = () => {
    idVerify
      ? mutate({
          id: Number(objectToEdit?.id),
        })
      : mutate({
          id: objectToEdit?.key,
        });
  };

  const handleCancel = () => {
    setInputValue("");
    setIsOpen("");
    setObjectToEdit({});
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !iaDisabled) {
      handleSubmit();
    }
  };

  const [t] = useTranslation();
  return (
    <Modal
      className="ModalForm"
      centered
      width={"500px"}
      footer={null}
      open={isOpen === ModelEnum}
      onCancel={handleCancel}
    >
      <header>
        {t("practical.delete_this_item")}
        <MdCancel onClick={handleCancel} />
      </header>

      <main className="main_modal">
        <div className="ValidationField w-100 mb-5">
          <label className="text ">
            {t("practical.to_confirm_deletion_please_re_enter_id")} ({" "}
            {objectToEdit?.id || objectToEdit?.key} )
          </label>

          <Input
            size="large"
            type="text"
            placeholder={`${t("practical.enter")} ${t(`input.id`)}  `}
            value={inputValue}
            onChange={handleChange}
            onKeyDown={handleKeyPress}
          />
        </div>

        <div className="buttons">
          <div onClick={handleCancel}>{t("practical.cancel")}</div>
          <button
            className={iaDisabled ? "disabled_button" : ""}
            disabled={iaDisabled}
            onClick={handleSubmit}
            type="button"
          >
            {t("practical.delete")}
            {isLoading && (
              <span className="Spinier_Div">
                <Spin />
              </span>
            )}
          </button>
        </div>
      </main>
    </Modal>
  );
};

export default DeleteModels;
