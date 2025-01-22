

import * as Yup from "yup";
import { Product, ProductInitialValues } from "../../../types/Product";
import { useParams } from "react-router-dom";
import { ParamsEnum } from "../../../enums/params";

export const getInitialValues = (
  objectToEdit: Partial<Product>,
): ProductInitialValues => {
  const { order_id } = useParams<ParamsEnum>();
  console.log(objectToEdit);
  
  return {
    id: objectToEdit?.id,
    name: objectToEdit?.name ?? "" ,
    order_id: objectToEdit?.order_id ?? order_id ,
    shipping_fee_id: objectToEdit?.shipping_fees  ,
    shipping_fees: objectToEdit?.shipping_fees ?? 0,
    discount: objectToEdit?.discount ?? 0,
    product_quantity: objectToEdit?.product_quantity ?? 0,
    price: objectToEdit?.price ?? 0,
    product_options: objectToEdit?.product_options ?? "",
    // price_with_currency: objectToEdit?.price_with_currency ?? 0,
    // price_with_quantity: objectToEdit?.price_with_quantity ?? 0,
  };
};

export const getValidationSchema = () => {
  // validate input
  return Yup.object().shape({
    name: Yup.string().required("validation.required"),
    order_id: Yup.number().required("validation.required"),
    shipping_fees: Yup.number().required("validation.required"),
    discount: Yup.number().required("validation.required"),
    product_quantity: Yup.number().required("validation.required"),
    price: Yup.number().required("validation.required"),

  });
};

