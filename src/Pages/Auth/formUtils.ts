import * as Yup from "yup";
import { FormValues } from "../../types/Auth";

export const validationSchema = Yup.object().shape({
  username: Yup.string().required("validation.required"),
  password: Yup.string()
    .required("validation.required")
    .min(8, "validation.Password_must_be_at_least_8_characters_long"),
});

export const initialValues: FormValues = {
  username: null,
  password: null,
};
