import * as Yup from "yup";
import { UnitInitialValues, Unit } from "../../../../types/Unit";

export const getInitialValues = (
  objectToEdit: Partial<Unit>,
): UnitInitialValues => {
  return {
    id: objectToEdit?.id,
    name: objectToEdit?.name ?? null,
    term: objectToEdit?.term ?? null,
    order: objectToEdit?.order ?? null,
  };
};

export const getValidationSchema = () => {
  // validate input
  return Yup.object().shape({
    name: Yup.string().required("validation.required"),
    term: Yup.string().required("validation.required"),
    // subject_id: Yup.string().required('validation.required'),
  });
};
