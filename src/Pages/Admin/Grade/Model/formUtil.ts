import * as Yup from "yup";
import { Grade, GradeInitialValues } from "../../../../types/Grade";

export const getInitialValues = (
  objectToEdit: Partial<Grade>,
): GradeInitialValues => {
  return {
    id: objectToEdit?.id,
    name: objectToEdit?.name ?? "",
    icon: objectToEdit?.icon ?? "",
  };
};

export const getValidationSchema = () => {
  // validate input
  return Yup.object().shape({
    name: Yup.string().required("validation.required"),
  });
};
