import React, { useEffect } from "react";
import { Button, Divider, Modal, Spin } from "antd";
import { useModalState } from "../../zustand/Modal";
import FormikForm from "./FormikFormModel";
import { useObjectToEdit } from "../../zustand/ObjectToEditState";
import { useTranslation } from "react-i18next";
import { QueryStatusEnum } from "../../enums/QueryStatus";
import SpinContainer from "../../Components/Layout/SpinContainer";
import { MdCancel } from "react-icons/md";
import { Form, Formik } from "formik";

interface LayoutModalProps {
  isAddModal?: boolean;
  modelTitle: string;
  handleSubmit: (values: any) => void;
  getInitialValues: any;
  getValidationSchema: any;
  children: React.ReactNode;
  status: QueryStatusEnum;
  ModelEnum: any;
  ModelClassName?: string;
  width?: string;
  isLoading?: boolean;
  buttonTitle?: string;
  initialButtonName?: boolean;
}

const LayoutModel = ({
  isAddModal = true,
  children,
  handleSubmit = () => {},
  getInitialValues,
  getValidationSchema,
  status,
  modelTitle,
  ModelEnum,
  ModelClassName,
  width = "800px",
  isLoading = false,
  buttonTitle,
  initialButtonName = true,
}: LayoutModalProps) => {
  const { isOpen, setIsOpen } = useModalState((state) => state);
  const { setObjectToEdit } = useObjectToEdit();
  useEffect(() => {
    if (isAddModal && status === QueryStatusEnum.SUCCESS) {
      setIsOpen("isSuccess");
      setObjectToEdit({});
      return;
    }
    if (status === QueryStatusEnum.SUCCESS) {
      setIsOpen("");
      setObjectToEdit({});
    }
  }, [setIsOpen, status]);

  const handleCancel = () => {
    setIsOpen("");
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
        open={isOpen === ModelEnum}
        onCancel={handleCancel}
      >
        <Formik
          enableReinitialize={true}
          initialValues={getInitialValues}
          validationSchema={getValidationSchema}
          onSubmit={handleSubmit}
        >
          {(formik) => {
            useEffect(() => {
              if (isOpen === "" || isOpen === "isSuccess") {
                formik.setErrors({});
                formik.resetForm();
              }
            }, [isOpen]);

            return (
              <Form className="w-100">
                <header>
                  <span>
                    {t(`practical.${isAddModal ? "add" : "edit"}`)}{" "}
                    {t(`models.${modelTitle}`)}{" "}
                  </span>
                  <MdCancel onClick={handleCancel} />
                </header>
                <Divider />
                <main className="main_modal">
                  {isLoading ? <SpinContainer /> : children}
                  <Divider />

                  <div className="buttons">
                    <Button
                      className="back_button pointer"
                      onClick={handleCancel}
                    >
                      {t("practical.cancel")}
                    </Button>
                    <Button
                      className="add_button"
                      disabled={
                        status === QueryStatusEnum.LOADING || !formik.dirty
                      }
                      htmlType="submit"
                    >
                      {initialButtonName
                        ? t(`practical.${isAddModal ? "add" : "edit"}`)
                        : t(`practical.${buttonTitle}`)}
                      {status === QueryStatusEnum.LOADING && (
                        <span className="Spinier_Div">
                          <Spin />
                        </span>
                      )}
                    </Button>
                  </div>
                </main>
              </Form>
            );
          }}
        </Formik>
      </Modal>
    </>
  );
};

export default LayoutModel;
