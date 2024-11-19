import * as Yup from "yup";

export const getInitialValues = (objectToEdit: Partial<any>) => {
  console.log(objectToEdit);

  return {
    id: objectToEdit?.id ?? null,
    name: objectToEdit?.name ?? null,
    username: objectToEdit?.user?.username ?? null,
    contact_number: objectToEdit?.contact_number ?? null,
    role_id: objectToEdit?.role_id ?? null,
    password: objectToEdit?.password ?? null,
  };
};

export const getValidationSchema = () => {
  // validate input
  return Yup.object().shape({
    // name: Yup.string().required("validation.required"),
    // username: Yup.string().required("validation.required"),
    // contact_number: Yup.mixed().required("validation.required"),
    // role_id: Yup.mixed().required("validation.required"),
  });
};
