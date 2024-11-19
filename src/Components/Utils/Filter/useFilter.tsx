import React, { ReactNode, useEffect, useState } from "react";
import { FaFilter } from "react-icons/fa";
import {
  Form,
  Formik,
  FormikConfig,
  FormikHelpers,
  useFormikContext,
} from "formik";
import { Button, ButtonProps, Divider, Modal } from "antd";
import { useTranslation } from "react-i18next";
import { useModalState } from "./Modal";
import { useFilterState } from "./FilterState";
import { ModalEnum } from "../../../enums/Model";
import { QueryStatusEnum } from "../../../enums/QueryStatus";
import SpinContainer from "../../Layout/SpinContainer";
import { FaXmark } from "react-icons/fa6";

type OmitFormikProps = "children" | "initialValues" | "onSubmit";

interface FormikFormProps extends Omit<FormikConfig<any>, OmitFormikProps> {
  children: React.ReactNode;
  onSubmit?: (
    values: any,
    formikHelpers?: FormikHelpers<any>,
  ) => void | Promise<any>;
  getInitialValues?: any;
  getValidationSchema?: any;
  status?: QueryStatusEnum;
  ModelClassName?: string;
  width?: string;
  isLoading?: boolean;
  isOpen: any;
  setIsOpen: any;
}

const useFilter = () => {
  const { setIsOpen, isOpen } = useModalState((state) => state);
  const { filterState, setFilterState, clearFilterState } = useFilterState();
  const [t] = useTranslation();
  const [formValues, setFormValues] = useState({});
  // Define the type for the callback
  type SubmitCallback = () => void;
  const FilterButton = () => {
    const handleState = () => {
      if (isOpen === ModalEnum?.FILTER) {
        setIsOpen("");
        clearFilterState();
        setFormValues({});
      } else {
        setIsOpen(ModalEnum?.FILTER);
      }
    };

    return (
      <span onClick={handleState} className="filter_menu_button">
        <FaFilter />
        {t("Filter")}
      </span>
    );
  };
  useEffect(() => {
    setFormValues({});
    setFilterState({});
  }, []);

  const FilterBody = ({
    onSubmit,
    children,
    getInitialValues,
    getValidationSchema,
    status,
    ModelClassName,
    width = "500px",
    isLoading = false,
    setIsOpen,
    isOpen,
    ...formikProps
  }: FormikFormProps) => {
    const handleSubmit = (values: any) => {
      setFilterState(values);
      setFormValues(values);
      if (onSubmit) {
        onSubmit(values);
      }
      Submit();
      setIsOpen("");
    };
    const handleCancel = (isCancel = false) => {
      if (isCancel) {
        setIsOpen("");
        return;
      }

      setIsOpen("");
      clearFilterState();
      setFormValues({});
    };

    const handleOpen = () => {
      setIsOpen(true);
      // setObjectToEdit({});
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
          onCancel={() => {}}
          mask={false}
          style={{ position: "absolute", top: "31.4%", left: "16.7%" }}
        >
          <Formik
            enableReinitialize={true}
            onSubmit={handleSubmit}
            initialValues={formValues}
            onReset={() => {
              handleCancel(false);
            }}
            {...formikProps}
          >
            {(formik) => {
              return (
                <Form>
                  <div>
                    <header>
                      {" "}
                      {t("models.filter")}{" "}
                      <FaXmark onClick={() => handleCancel(true)} />{" "}
                    </header>
                    <Divider />
                    <main className="main_modal">
                      {isLoading ? <SpinContainer /> : children}
                      <Divider />
                    </main>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </Modal>
      </>
    );
  };

  interface SubmitButtonProps extends Omit<ButtonProps, "loading"> {}
  const FilterSubmit = ({ ...buttonProps }: SubmitButtonProps) => {
    return (
      <div className="filter-submit-buttons buttons">
        <Button
          type="primary"
          className="back_button filter_modal_cancel_button"
          htmlType="reset"
        >
          {t("practical.reset")}
        </Button>
        <Button
          className="pointer filter_modal_add_button"
          type="primary"
          {...buttonProps}
          htmlType="submit"
        >
          {t(`practical.submit`)}
        </Button>
      </div>
    );
  };

  const Submit = (callback?: SubmitCallback): void => {
    if (callback) {
      callback();
    }
  };

  return {
    FilterButton,
    FilterBody,
    filterState,
    setFilterState,
    clearFilterState,
    FilterSubmit,
    Submit,
  };
};

export default useFilter;
