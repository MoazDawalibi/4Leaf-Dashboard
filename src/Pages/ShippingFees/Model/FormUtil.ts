

import * as Yup from "yup";
import { ShippingFees, ShippingFeesInitialValues } from "../../../types/ShippingFees";

export const getInitialValues = (
  objectToEdit: Partial<ShippingFees>,
): ShippingFeesInitialValues => {

  return {
    id: objectToEdit?.id,
    name: objectToEdit?.name ?? "",
    price: objectToEdit?.price ?? 0,
    image: objectToEdit?.image ?? "",
    is_disabled: objectToEdit?.is_disabled ,

  };
};

export const getValidationSchema = () => {
  // validate input
  return Yup.object().shape({
    name: Yup.string().required("validation.required"),
    price: Yup.number().required("validation.required"),
    image: Yup.mixed().required("validation.required"),
    // is_disabled: Yup.mixed().required("validation.required"),
  });
};

