import React, { useEffect } from "react";
import { Modal, Spin } from "antd";
import { useModalState } from "../../../zustand/Modal";
import FormikForm from "../../../Layout/Dashboard/FormikFormModel";
import ModelBody from "./Add";
import { getInitialValues, getValidationSchema } from "./formUtil";
import { ModalEnum } from "../../../enums/Model";
import { useObjectToEdit } from "../../../zustand/ObjectToEditState";
import { useTranslation } from "react-i18next";
// import { useUpdateAdmin } from "../../../api/users";

const ModalForm: React.FC = () => {
  const { isOpen, setIsOpen } = useModalState((state) => state);
  // const { mutate, isSuccess, isLoading } = useUpdateAdmin();
  const { setObjectToEdit } = useObjectToEdit();

  // useEffect(() => {
  //   if (isSuccess) {
  //     setIsOpen("");
  //     setObjectToEdit({});
  //   }
  // }, [setIsOpen, isSuccess]);

  const handleSubmit = (values: any) => {
    //   console.log(values,"values");

    // mutate({
    //   ...values,
    // });
  };

  const handleCancel = () => {
    setIsOpen("");
    setObjectToEdit({});
  };
  const [t] = useTranslation();
  return (
    <>
      <Modal
        className="ModalForm"
        centered
        width={"60vw"}
        footer={null}
        open={isOpen === ModalEnum?.CHANGE_PASSWORD}
        onCancel={handleCancel}
      >
        <FormikForm
          handleSubmit={handleSubmit}
          initialValues={getInitialValues(null)}
          validationSchema={getValidationSchema}
        >
          <header> {t("header.change_your_current_password")} </header>
          <main className="main_modal w-100">
            <ModelBody />
            <div className="buttons">
              <div onClick={handleCancel}>{t("practical.back")}</div>
              <button disabled={false} type="submit">
                {t("practical.edit")}
                {(
                  <span className="Spinier_Div">
                    <Spin />
                  </span>
                )}
              </button>
            </div>
          </main>
        </FormikForm>
      </Modal>
    </>
  );
};

export default ModalForm;
