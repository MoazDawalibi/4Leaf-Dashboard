import { Formik, Form } from "formik";
import React, { ReactNode, useEffect } from "react";
interface FormValues {
  [key: string]: any;
}

interface FormikFormProps {
  handleSubmit: (values: any) => void;
  initialValues: FormValues;
  validationSchema?: any;
  title?: string;
  children: ReactNode;
  ButtonName?: string;
}
const FormikForm: React.FC<FormikFormProps> = ({
  children,
  handleSubmit,
  initialValues,
  validationSchema,
}) => {
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
          </Form>
        )}
      </Formik>
    </>
  );
};

export default FormikForm;
