import { useTranslation } from "react-i18next";
import useSetPageTitle from "../../../../../Hooks/useSetPageTitle";
import PageHeader from "../../../../../Layout/Dashboard/PageHeader";
import { Suspense, useEffect } from "react";
import { Spin } from "antd";
import { ModalEnum } from "../../../../../enums/Model";
import PersonalDetailsForm from "../Form/PersonalDetailsForm";
import { Formik, Form } from "formik";
import { getInitialValues, getValidationSchema } from "../Form/formUtils";
import TitleDetailsForm from "../Form/TitleDetailsForm";
import AttachmentForm from "../Form/AttachmentForm";
import { useNavigate } from "react-router-dom";
import { QueryStatusEnum } from "../../../../../enums/QueryStatus";
import { useAddNotification } from "../../../../../api/notification";

const TableHeader = () => {
  const [t] = useTranslation();
  const Navigate = useNavigate();
  const { mutate, isSuccess, status } = useAddNotification();
  useSetPageTitle(t(`page_header.add_notification`));
  const handleSubmit = (values: any) => {
    const DataToSend = {
      ...values,
      location: {
        lat: values.lat,
        lng: values.lng,
      },
    };
    mutate(DataToSend);
  };
  useEffect(() => {
    if (isSuccess === true) {
      console.log(1);
      Navigate("/add_Notifications");
    }
  }, [isSuccess]);

  return (
    <div className="TableWithHeader">
      <Suspense fallback={<Spin />}>
        <PageHeader
          pageTitle="manage_notification"
          ModelAbility={ModalEnum?.NOTIFICATION_ADD}
          canAdd={false}
        />
        <div>
          <Formik
            initialValues={getInitialValues({})}
            validationSchema={getValidationSchema}
            onSubmit={handleSubmit}
          >
            {({ dirty }) => (
              <Form className="Form_details_container">
                <TitleDetailsForm />
                <PersonalDetailsForm />
                <div className="resellerButton">
                  <button
                    type="button"
                    onClick={() => Navigate("/add_Notifications")}
                  >
                    {t("practical.cancel")}
                  </button>
                  <button type="submit" disabled={!dirty}>
                    {t("practical.send")} {t("models.notifications")}
                    {status === QueryStatusEnum.LOADING && (
                      <span className="Spinier_Div">
                        <Spin />
                      </span>
                    )}
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </Suspense>
    </div>
  );
};

export default TableHeader;
