import { useTranslation } from "react-i18next";
import PageHeader from "../../../../Layout/Dashboard/PageHeader";
import { Suspense, useEffect } from "react";
import { Spin } from "antd";
import { ModalEnum } from "../../../../enums/Model";
import PersonalDetailsForm from "../Form/PersonalDetailsForm";
import { Formik, Form } from "formik";
import { getInitialValues, getValidationSchema } from "../Form/formUtils";
import TitleDetailsForm from "../Form/TitleDetailsForm";
import AttachmentForm from "../Form/AttachmentForm";
import { useAddManager } from "../../../../api/manager";
import { QueryStatusEnum } from "../../../../enums/QueryStatus";
import { useNavigate } from "react-router-dom";

const TableHeader = () => {
  const [t] = useTranslation();
  const Navigate = useNavigate();
  const { mutate, status } = useAddManager();
  const handelSubmit = (values: any) => {
    console.log(values, "values");
    mutate({ ...values });
  };
  const handleCancel = () => {
    Navigate(-1);
  };
  console.log(status);

  useEffect(() => {
    if (status === QueryStatusEnum.SUCCESS) {
      handleCancel();
    }
  }, [status]);

  return (
    <div className="TableWithHeader">
      <Suspense fallback={<Spin />}>
        <PageHeader
          pageTitle="add_manager"
          ModelAbility={ModalEnum?.MANAGER_ADD}
          canAdd={false}
        />
        <div>
          <Formik
            initialValues={getInitialValues({})}
            validationSchema={getValidationSchema}
            onSubmit={handelSubmit}
          >
            <Form className="Form_details_container">
              <PersonalDetailsForm />
              <TitleDetailsForm />
              <AttachmentForm />
              <div className="resellerButton">
                <button type="button" onClick={handleCancel}>
                  {t("practical.cancel")}
                </button>
                <button type="submit">
                  {t("practical.add")} {t("models.reseller")}
                  {status === QueryStatusEnum.LOADING && (
                    <span className="Spinier_Div">
                      <Spin />
                    </span>
                  )}
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </Suspense>
    </div>
  );
};

export default TableHeader;
