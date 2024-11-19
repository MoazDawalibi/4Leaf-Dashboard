import * as Yup from "yup";

export const getInitialValues = (objectToEdit: any): any => {
  return {
    id: objectToEdit?.id,
    name: objectToEdit?.name ?? "",
  };
};

export const getValidationSchema = () => {
  // validate input
  return Yup.object().shape({
    name: Yup.string().required("validation.required"),
    // subject_id: Yup.string().required('validation.required'),
  });
};
