import * as Yup from "yup";
export const getInitialValues = (objectToEdit: any): any => {
  return {
    new_password: null,
    old_password: null,
  };
};

export const getValidationSchema = () => {
  return Yup.object().shape({
    new_password: Yup.string()
      .required("validation.required")
      .min(8, "validation.Password_must_be_at_least_8_characters_long"),
    old_password: Yup.string()
      .required("validation.required")
      .min(8, "validation.Password_must_be_at_least_8_characters_long"),
  });
};
