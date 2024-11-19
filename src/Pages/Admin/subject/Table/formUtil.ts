import * as Yup from "yup";

export const getInitialValues = (objectToEdit: any): any => {
  return {
    id: objectToEdit?.id ?? 0,
    name: objectToEdit?.name ?? "",
    description: objectToEdit?.description ?? "",
    categories_id:
      {
        label: objectToEdit?.categories?.name,
        value: objectToEdit?.categories?.id,
      } ?? "",
    price: objectToEdit?.price ?? null,
    is_published: objectToEdit?.is_published ?? false,
    image: objectToEdit?.image ?? "",
  };
};

export const getValidationSchema = () => {
  // validate input
  return Yup.object().shape({
    name: Yup.string().required("required"),
    description: Yup.string().required("required"),
    categories_id: Yup.string().required("required"),
    price: Yup.number().required("required"),
    is_published: Yup.boolean().required("required"),
    image: Yup.string().required("required"),
  });
};
