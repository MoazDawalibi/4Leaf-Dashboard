

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

  };
};

export const getValidationSchema = () => {
  // validate input
  return Yup.object().shape({
    name: Yup.string().required("validation.required"),
    price: Yup.number().required("validation.required"),
  });
};

