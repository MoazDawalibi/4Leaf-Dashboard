

import * as Yup from "yup";
import { StaticInfo, StaticInfoInitialValues } from "../../../types/StaticInfo";

export const getInitialValues = (
  objectToEdit: Partial<StaticInfo>,
): StaticInfoInitialValues => {

  return {
    id: objectToEdit?.id,
    key: objectToEdit?.key ?? "",
    value: objectToEdit?.value ?? "",
  };
};

export const getValidationSchema = () => {
  // validate input
  return Yup.object().shape({
    key: Yup.mixed().required("validation.required"),
    value: Yup.mixed().required("validation.required"),

  });
};

