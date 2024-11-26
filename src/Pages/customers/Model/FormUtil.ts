

import * as Yup from "yup";
import { Customers, CustomersInitialValues } from "../../../types/Customers";

export const getInitialValues = (
  objectToEdit: Partial<Customers>,
): CustomersInitialValues => {

  return {
    id: objectToEdit?.id,
    name: objectToEdit?.name ?? "",
    account_name: objectToEdit?.account_name ?? "",
    customer_type: objectToEdit?.customer_type ?? "",
    phone_number: objectToEdit?.phone_number ?? 0,
    note: objectToEdit?.note ?? "",

  };
};

export const getValidationSchema = () => {
  // validate input
  return Yup.object().shape({
    name: Yup.mixed().required("validation.required"),
    account_name: Yup.mixed().required("validation.required"),
    customer_type: Yup.mixed().required("validation.required"),
    phone_number: Yup.number().required("validation.required"),
    note: Yup.mixed().required("validation.required"),

  });
};

