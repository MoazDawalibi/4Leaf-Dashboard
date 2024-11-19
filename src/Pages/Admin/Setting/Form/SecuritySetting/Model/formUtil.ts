import * as Yup from "yup";
export const getInitialValuesPhone = (objectToEdit: any): any => {
  return {
    id: objectToEdit?.id ?? null,
    phone_number: objectToEdit?.phone_number ?? null,
  };
};

export const getValidationSchemaPhone = () => {
  return Yup.object().shape({
    phone_number: Yup.string().required("validation.required"),
  });
};

export const getInitialValuesEmail = (objectToEdit: any): any => {
  return {
    id: objectToEdit?.id ?? null,
    email_address: objectToEdit?.email_address ?? null,
  };
};

export const getValidationSchemaEmail = () => {
  return Yup.object().shape({
    email_address: Yup.string().required("validation.required"),
  });
};
