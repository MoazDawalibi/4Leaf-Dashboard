import * as Yup from "yup";
import dayjs from "dayjs";
export const getInitialValues = (objectToEdit: any): any => {
  console.log(objectToEdit);

  return {
    id: objectToEdit?.id ?? null,
    description: objectToEdit?.description ?? null,
    amount: objectToEdit?.amount ?? null,
    date: objectToEdit?.date ? dayjs(objectToEdit?.date) : null,
    reseller_id: objectToEdit?.reseller_id ?? null,
  };
};

export const getValidationSchema = () => {
  return Yup.object().shape({
    description: Yup.string().required("validation.required"),
    amount: Yup.mixed().required("validation.required"),
    date: Yup.mixed().required("validation.required"),
    reseller_id: Yup.mixed().required("validation.required"),
  });
};

export const getValidationSchemaEdit = () => {
  return Yup.object().shape({
    description: Yup.string().required("validation.required"),
    amount: Yup.mixed().required("validation.required"),
    date: Yup.mixed().required("validation.required"),
  });
};
