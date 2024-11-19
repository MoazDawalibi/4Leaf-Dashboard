import * as Yup from "yup";
import { SubjectInitialValues } from "../../../../types/Subject";

export const getInitialValues = (
  objectToEdit: Partial<SubjectInitialValues>,
): SubjectInitialValues => {
  // console.log(objectToEdit,"objectToEdit");

  return {
    id: objectToEdit?.id ?? null,
    name: objectToEdit?.name ?? null,
    icon: objectToEdit?.icon ?? null,
    grade_id: objectToEdit?.grade_id ?? null,
  };
};

export const getValidationSchema = () => {
  // validate input
  return Yup.object().shape({
    name: Yup.string().required("validation.required"),
  });
};
