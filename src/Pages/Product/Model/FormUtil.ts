

import * as Yup from "yup";
import { Product, ProductInitialValues } from "../../../types/Product";
import { useParams } from "react-router-dom";
import { ParamsEnum } from "../../../enums/params";

export const getInitialValues = (
  objectToEdit: Partial<Product>,
): ProductInitialValues => {
  const { order_id } = useParams<ParamsEnum>();
  
  return {
    id: objectToEdit?.id,
    name: objectToEdit?.name ?? "" ,
    order_id: objectToEdit?.order_id ?? order_id ,
    shipping_fee_id: objectToEdit?.shipping_fees  ,
    image: objectToEdit?.image ?? "",
    shipping_fees: objectToEdit?.shipping_fees,
    discount: objectToEdit?.discount ?? 0,
    product_quantity: objectToEdit?.product_quantity ?? 1,
    price: objectToEdit?.price ?? 0,
    product_options: objectToEdit?.product_options ?? "",
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
    image: Yup.mixed().required("validation.required"),

  });
};

