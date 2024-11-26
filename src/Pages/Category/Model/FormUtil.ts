

import * as Yup from "yup";
import { Category, CategoryInitialValues } from "../../../types/Category";

export const getInitialValues = (
  objectToEdit: Partial<Category>,
): CategoryInitialValues => {

  return {
    id: objectToEdit?.id,
    name: objectToEdit?.name ?? "",
  };
};

export const getValidationSchema = () => {
  // validate input
  return Yup.object().shape({
    name: Yup.string().required("validation.required"),
  });
};

