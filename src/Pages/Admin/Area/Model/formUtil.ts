import * as Yup from "yup";
import { Area, AreaInitialValues } from "../../../../types/Area";

export const getInitialValues = (
  objectToEdit: Partial<Area>,
): AreaInitialValues => {
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
