import { Form, useFormikContext } from "formik";

import { useTranslation } from "react-i18next";
import ValidationField from "../../Components/ValidationField/ValidationField";
import { Input } from "antd";

type FormFieldType = {
  isLoading: boolean;
};

const FormField = ({ isLoading }: FormFieldType) => {
  const [t] = useTranslation();
  const { isValid } = useFormikContext();

  return (
    <Form className="AuthForm">
      <div className="login_logo_container">
        <img width={80} src="../App/Logo.png" />
          lang button
      </div>
      {/* <h2>{t("تسجيل الدخول إلى حسابك")}</h2> */}

      <ValidationField name="email" label="email" />

      <ValidationField name="password" label="password" as={Input.Password} />

      <button
        disabled={!isValid || isLoading}
        type="submit"
        className="auth_submit_button"
      >
        {t("practical.login")}
      </button>
    </Form>
  );
};

export default FormField;
