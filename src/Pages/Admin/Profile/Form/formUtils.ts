import * as Yup from "yup";

export const getInitialValues = (objectToEdit: Partial<any>) => {
  return {
    id: objectToEdit?.id ?? null,
    name: objectToEdit?.name ?? null,
  };
};

export const getValidationSchema = () => {
  // validate input
  return Yup.object().shape({});
};
