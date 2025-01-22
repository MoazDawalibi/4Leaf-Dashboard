

import * as Yup from "yup";
import { Shipment, ShipmentInitialValues } from "../../../types/Shipment";
import dayjs from "dayjs";

export const getInitialValues = (
  objectToEdit: Partial<Shipment>,
): ShipmentInitialValues => {

  return {
    id: objectToEdit?.id,
    name: objectToEdit?.name ?? "",
    start_date: objectToEdit?.start_date ? dayjs(objectToEdit?.start_date) : null,
    end_date: objectToEdit?.end_date ? dayjs(objectToEdit?.end_date) : null,
    status: objectToEdit?.status ?? "",
    order_count: objectToEdit?.order_count ?? 0,
    product_count: objectToEdit?.product_count ?? 0,
    currency_price: objectToEdit?.currency_price ?? 0,
    customer_currency_price: objectToEdit?.customer_currency_price ?? 0,
    shipping_fees_total_profit: objectToEdit?.shipping_fees_total_profit ?? 0,
    currency_profit: objectToEdit?.currency_profit ?? 0,
    total_profit: objectToEdit?.total_profit ?? 0,
    total_price: objectToEdit?.total_price ?? 0,

  };
};

export const getValidationSchema = () => {
  // validate input
  return Yup.object().shape({
    name: Yup.string().required("validation.required"),
    start_date: Yup.mixed().required("validation.required"),
    end_date: Yup.mixed().required("validation.required"),
    currency_price: Yup.number().required("validation.required"),
    customer_currency_price: Yup.number().required("validation.required"),

  });
};

