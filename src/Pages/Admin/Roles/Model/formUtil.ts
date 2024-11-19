import * as Yup from "yup";
export const getInitialValues = (objectToEdit: any): any => {
  return {
    id: objectToEdit?.id ?? null,
    name: objectToEdit?.name ?? null,
  };
};

export const getValidationSchema = () => {
  return Yup.object().shape({
    name: Yup.string().required("validation.required"),
  });
};
