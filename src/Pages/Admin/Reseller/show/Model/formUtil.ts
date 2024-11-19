import dayjs from "dayjs";
import * as Yup from "yup";
export const getInitialValues = (objectToEdit: any): any => {
  console.log(objectToEdit?.date);

  return {
    id: objectToEdit?.id ?? null,
    amount: objectToEdit?.amount ?? null,
    description: objectToEdit?.description ?? null,
    date: objectToEdit?.date ? dayjs(objectToEdit.date) : null,
  };
};

export const getValidationSchema = () => {
  return Yup.object().shape({
    amount: Yup.string().required("validation.required"),
    description: Yup.string().required("validation.required"),
    date: Yup.string().required("validation.required"),
  });
};
