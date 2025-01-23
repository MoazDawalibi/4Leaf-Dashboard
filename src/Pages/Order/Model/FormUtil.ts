

import * as Yup from "yup";
import { Order, OrderInitialValues } from "../../../types/Order";
import { useParams } from "react-router-dom";
import { ParamsEnum } from "../../../enums/params";
import { useTranslation } from "react-i18next";

export const getInitialValues = (
  objectToEdit: Partial<Order>,
): OrderInitialValues => {
  const { shipment_id } = useParams<ParamsEnum>();

  return {
    id: objectToEdit?.id,
    status: objectToEdit?.status ?? "",
    customer_id: objectToEdit?.customer_id ,
    shipment_id: objectToEdit?.shipment_id ?? shipment_id ,
    product_count: objectToEdit?.product_count ?? 0,
    shipping_fees_total_profit: objectToEdit?.shipping_fees_total_profit ?? 0,
    currency_profit: objectToEdit?.currency_profit ?? 0,
    total_profit: objectToEdit?.total_profit ?? 0,
    total_price: objectToEdit?.total_price ?? 0,

  };
};

export const getValidationSchema = () => {
  // validate input
  return Yup.object().shape({
    status: Yup.string().required("validation.required"),
    shipment_id: Yup.number().required("validation.required"),
    customer_id: Yup.number().required("validation.required"),
  });
};

