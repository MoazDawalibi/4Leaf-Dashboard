import React, { useEffect } from "react";
import { Divider, Modal, Spin } from "antd";
import { useModalState } from "../../zustand/Modal";
import FormikForm from "./FormikFormModel";
import { useObjectToEdit } from "../../zustand/ObjectToEditState";
import { useTranslation } from "react-i18next";
import { QueryStatusEnum } from "../../enums/QueryStatus";
import SpinContainer from "../../Components/Layout/SpinContainer";

interface LayoutFilterModalProps {
  handleSubmit?: (values: any) => void;
  getInitialValues?: any;
  getValidationSchema?: any;
  children: React.ReactNode;
  status?: QueryStatusEnum;
  ModelClassName?: string;
  width?: string;
  isLoading?: boolean;
  isOpen: any;
  setIsOpen: any;
}

const LayoutFilterModal = ({
  children,
  handleSubmit = () => {},
  getInitialValues,
  getValidationSchema,
  status,
  ModelClassName,
  width = "28vw",
  isLoading = false,
  setIsOpen,
  isOpen,
}: LayoutFilterModalProps) => {
  const { setObjectToEdit } = useObjectToEdit();
  // useEffect(() => {
  //   if ( status === QueryStatusEnum.SUCCESS) {
  //     setIsOpen(true);
  //     // setObjectToEdit({});
  //     return;
  //   }
  // }, [setIsOpen, status]);

  const handleCancel = () => {
    setIsOpen("");
    setObjectToEdit({});
  };
  const handleOpen = () => {
    setIsOpen(true);
    setObjectToEdit({});
  };

  const [t] = useTranslation();
  return (
    <>
      <Modal
        className={"ModalForm " + ModelClassName}
        centered
        width={width}
        footer={null}
        open={isOpen}
        onOk={handleOpen}
        onCancel={handleCancel}
        mask={false}
        style={{ position: "absolute", top: "31.4%", left: "16.7%" }}
      >
        <FormikForm
          handleSubmit={handleSubmit}
          initialValues={getInitialValues}
          validationSchema={getValidationSchema}
        >
          <header>{t("models.filter")}</header>
          <Divider />
          <main className="main_modal">
            {isLoading ? <SpinContainer /> : children}
            <Divider />

            <div className="buttons">
              <div
                className="back_button pointer"
                style={{ width: "7vw" }}
                onClick={handleCancel}
              >
                {t("practical.reset")}
              </div>
              <button
                className="add_button"
                style={{ width: "7vw" }}
                // disabled={status === QueryStatusEnum.LOADING}
                type="submit"
              >
                {t(`practical.submit`)}
                {/* {status === QueryStatusEnum.LOADING && (
                  <span className="Spinier_Div">
                    <Spin />
                  </span>
                )} */}
              </button>
            </div>
          </main>
        </FormikForm>
      </Modal>
    </>
  );
};

export default LayoutFilterModal;
