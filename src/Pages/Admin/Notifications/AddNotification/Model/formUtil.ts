import * as Yup from "yup";
import { Grade, GradeInitialValues } from "../../../../../types/Grade";
import { Notification } from "../../../../../types/Notification";

export const getInitialValues = (objectToEdit: Partial<Notification>): any => {
  return {
    id: objectToEdit?.id,
    title: objectToEdit?.title ?? "",
    seen: objectToEdit?.seen ?? "",
    body: objectToEdit?.body ?? "",
    notifiable_type: objectToEdit?.notifiable_type ?? "",
  };
};

export const getValidationSchema = () => {
  // validate input
  return Yup.object().shape({
    title: Yup.string().required("validation.required"),
    seen: Yup.string().required("validation.required"),
    body: Yup.string().required("validation.required"),
    notifiable_type: Yup.string().required("validation.required"),
  });
};
