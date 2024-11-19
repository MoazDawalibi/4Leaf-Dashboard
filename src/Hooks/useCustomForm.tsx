import { useField } from "formik";
import { useTranslation } from "react-i18next";

const useCustomForm = (name: string, props?: any) => {
  const [field, meta] = useField({ name, ...props });
  const { t } = useTranslation();
  const isError = meta.touched && meta.error;

  const errorMsg = meta.error ? t(meta.error.toString()) : "";

  return { field, meta, isError, errorMsg, t };
};

export default useCustomForm;
