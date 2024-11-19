import * as Yup from "yup";
import { Coupon, CouponInitialValues } from "../../../../types/Coupon";
import dayjs from "dayjs";

export const getInitialValues = (
  objectToEdit: Partial<Coupon>,
): CouponInitialValues => {
  return {
    id: objectToEdit?.id,
    name: objectToEdit?.name ?? "",
    amount: objectToEdit?.amount ?? "",
    code: objectToEdit?.code ?? "",
    due_to: objectToEdit?.due_to
      ? dayjs(objectToEdit?.due_to, "YYYY-MM-DD HH:mm:ss")
      : "",
    grade_id: objectToEdit?.grade ?? "",
  };
};

export const getValidationSchema = () => {
  // validate input
  return Yup.object().shape({
    name: Yup.string().required("validation.required"),
    due_to: Yup.string().required("validation.required"),
    code: Yup.string()
      .required("validation.required")
      .min(6, "validation.must_be_at_least_6_characters_long")
      .max(6, "validation.must_be_at_least_6_characters_long"),
    amount: Yup.number()
      .required("validation.required")
      .typeError("validation.Must_be_a_number"),
  });
};
