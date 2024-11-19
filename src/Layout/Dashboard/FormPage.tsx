import { Formik, Form } from "formik";
import React, { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "reactstrap";
import * as Yup from "yup";

interface FormValues {
  [key: string]: any;
}

interface FormPageProps {
  handleSubmit: (values: any) => void;
  initialValues: FormValues;
  validationSchema: any;
  title?: string;
  children: ReactNode;
  ButtonName?: string;
}
const FormPage: React.FC<FormPageProps> = ({
  children,
  handleSubmit,
  initialValues,
  validationSchema,
  title = "Add New Item",
  ButtonName = "إضافة",
}) => {
  const [t] = useTranslation();

  return (
    <>
      <Formik
        enableReinitialize
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {(formik) => (
          <Form>
            <div className="Card">{children}</div>
            <div className="w-100 SubmitButtonparent ">
              <Button type="submit" className="mt-4  SubmitButton text-center">
                {t(ButtonName)}
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default FormPage;
