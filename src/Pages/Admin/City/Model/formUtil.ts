import * as Yup from "yup";
import { City, CityInitialValues } from "../../../../types/City";

export const getInitialValues = (
  objectToEdit: Partial<City>,
): CityInitialValues => {
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
