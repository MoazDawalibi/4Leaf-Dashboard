import TabHeader from "./TabHeader";
import NotificationCard from "./Notification/NotificationCard";
import { NotificationData } from "../../../../faker/item";
import { Form, Formik } from "formik";
import {
  getInitialValues,
  getValidationSchema,
} from "./Notification/formUtils";

const Notification = () => {
  const handelSubmit = (values: any) => {
    console.log(values, "values");
  };
  return (
    <div className="notification">
      <TabHeader
        name="notification"
        description="get_notified_of_whats_happening_now_you_can_turn_it_off_at_any_time"
      ></TabHeader>
      <Formik
        initialValues={getInitialValues({})}
        validationSchema={getValidationSchema}
        onSubmit={handelSubmit}
      >
        <Form className="Form_details_container">
          <div className="setting_notification_body">
            {NotificationData?.map((not: any) => (
              <NotificationCard name={not.label} description={not?.value} />
            ))}
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default Notification;
