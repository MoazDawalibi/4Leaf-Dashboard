import React from "react";
import { Modal } from "antd";
import { useModalState } from "../../zustand/Modal";
import { useObjectToEdit } from "../../zustand/ObjectToEditState";
import { useTranslation } from "react-i18next";
import { MdCancel } from "react-icons/md";
import QRCodeGenerator from "../../Components/Table/QRCodeGenerator";

interface ModalFormProps {
  ModelEnum: any;
  isNavigate?: boolean;
  idVerify?: boolean;
}

const QrCodeModels: React.FC<ModalFormProps> = ({
  ModelEnum,
  isNavigate = false,
  idVerify = true,
}) => {
  const { isOpen, setIsOpen } = useModalState((state) => state);

  const { objectToEdit, setObjectToEdit } = useObjectToEdit();

  const handleCancel = () => {
    setIsOpen("");
    setObjectToEdit({});
  };

  return (
    <Modal
      className="ModalForm"
      centered
      width={"300px"}
      footer={false}
      open={isOpen === ModelEnum}
      onCancel={handleCancel}
    >
      <header dir="ltr">
        <MdCancel onClick={handleCancel} />
      </header>

      <main className="main_modal">
        <div className="ValidationField w-100 mb-5 ">
          <QRCodeGenerator
            url={`https://nerd-back.point-dev.net/api/students/question`}
            serial={objectToEdit?.serial}
          />
        </div>
      </main>
    </Modal>
  );
};

export default QrCodeModels;
