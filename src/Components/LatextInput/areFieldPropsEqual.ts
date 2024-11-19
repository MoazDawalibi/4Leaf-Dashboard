// utilityFunctions.ts
import { FieldProps } from "formik";

export const areFieldPropsEqual = (prevProps: any, nextProps: any): boolean => {
  const prevError = prevProps.form.errors[prevProps.field.name];
  const nextError = nextProps.form.errors[nextProps.field.name];

  const prevTouched = prevProps.form.touched[prevProps.field.name];
  const nextTouched = nextProps.form.touched[nextProps.field.name];

  const prevValue = prevProps.field.value;
  const nextValue = nextProps.field.value;

  return false;
};
