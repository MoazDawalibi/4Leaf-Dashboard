import React, { useEffect } from "react";
import { Formik } from "formik";
import useAuthState from "../../zustand/AuthState";
import FormField from "./FormField";
import { initialValues, validationSchema } from "./formUtils";
import { FormValues } from "../../types/Auth";
import { useTranslation } from "react-i18next";
import { getLocalStorage } from "../../utils/LocalStorage";
import { USER_KEY } from "../../config/AppKey";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useLoginAdmin } from "../../api/users";

const LoginForm = () => {
  const { mutate, isLoading, isSuccess, data } = useLoginAdmin();
  const [t] = useTranslation();
  const Navigate = useNavigate();
  const handelSubmit = (values: FormValues) => {
    mutate(values);

    // localStorage.setItem('type',)
  };

  const { login } = useAuthState();

  const LoginData = {
    ...data,
  } as any;

  const LocalType = getLocalStorage(USER_KEY)?.type ?? false;
  useEffect(() => {
    if (isSuccess) {
      login(LoginData?.data as any);
      Navigate('/');
    }
  }, [isSuccess]);

  useEffect(() => {
    if (LocalType) {
      window.location.href = "/";
    }
  }, [LocalType]);

  return (
    <div className="LoginForm">
      <Formik
        initialValues={initialValues}
        onSubmit={handelSubmit}
        validateOnMount={true}
        validationSchema={validationSchema}
      >
        {(formikProps) => <FormField isLoading={isLoading} />}
      </Formik>
    </div>
  );
};

export default LoginForm;
