import { useField, useFormikContext } from "formik";
import { useTranslation } from "react-i18next";
import { Field } from "formik";
import { useValidationState } from "../Components/ValidationField/utils/ValidationState";
import { useModalState } from "../zustand/Modal";
import { useEffect } from "react";

const useFormField = (name: string, props?: any) => {
  const [field, meta] = useField({ name, ...props });

  const { t } = useTranslation();
  const formik = useFormikContext<any>();

  const { Validation, setValidation } = useValidationState((state) => state);
  const { isOpen } = useModalState((state) => state);

  const isError = !!((meta.touched && meta.error) || Validation[name as any]);

  useEffect(() => {
    const length = Object.keys(Validation).length;
    if (length) {
      if (isOpen === "" || isOpen === "isSuccess") {
        setValidation([]);
      }
    }
  }, [isOpen]);

  const errorMsg =
    !!isError && meta.error
      ? t(meta.error.toString())
      : (Validation[name as any] ?? "");

  return { Field, field, meta, formik, isError, errorMsg, t };
};

export default useFormField;
