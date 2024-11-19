import * as Yup from "yup";
export const getInitialValues = (objectToEdit: any): any => {
  return {
    // id: objectToEdit?.id ?? null,
    key: objectToEdit?.key ?? null,
    value: objectToEdit?.value ?? null,
  };
};

export const getValidationSchema = () => {
  return Yup.object().shape({
    key: Yup.mixed().required("validation.required"),
    value: Yup.mixed().required("validation.required"),
  });
};
