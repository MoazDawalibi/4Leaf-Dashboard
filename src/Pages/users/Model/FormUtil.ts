

import * as Yup from "yup";
import { Users, UsersInitialValues } from "../../../types/Users";

export const getInitialValues = (
  objectToEdit: Partial<Users>,
): UsersInitialValues => {

  return {
    id: objectToEdit?.id,
    email: objectToEdit?.email ?? "",
    password: objectToEdit?.password ?? "",
    role_type: objectToEdit?.role_type ?? "",
  };
};

export const getValidationSchema = () => {
  // validate input
  return Yup.object().shape({
    email: Yup.string().required("validation.required"),
    role_type: Yup.string().required("validation.required"),
  });
};

