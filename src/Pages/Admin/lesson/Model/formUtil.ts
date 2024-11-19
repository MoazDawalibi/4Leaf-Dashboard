import * as Yup from "yup";

export const getInitialValues = (objectToEdit: any): any => {
  return {
    id: objectToEdit?.id ?? null,
    name: objectToEdit?.name ?? "",
    unit_id: objectToEdit?.term ?? null,
  };
};

export const getValidationSchema = () => {
  // validate input
  return Yup.object().shape({
    name: Yup.string().required("validation.required"),
  });
};
