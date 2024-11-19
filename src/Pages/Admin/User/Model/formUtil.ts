import * as Yup from "yup";
export const getInitialValues = (objectToEdit: any): any => {
  return {
    id: objectToEdit?.id ?? null,
    username: objectToEdit?.username ?? null,
    password: objectToEdit?.password ?? null,
    phone_number: objectToEdit?.phone_number ?? null,
    type: objectToEdit?.type ?? null,
  };
};

export const getValidationSchema = () => {
  return Yup.object().shape({
    username: Yup.string().required("validation.required"),
    // password: Yup.string().required("validation.required"),
    phone_number: Yup.string()
      .required("validation.required")
      .min(10, "Phone number must be at least 10 characters long"),
    type: Yup.string().required("validation.required"),
  });
};
