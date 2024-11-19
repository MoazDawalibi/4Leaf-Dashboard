import { Formik, Form, useFormikContext } from "formik";
import React, { ReactNode, useEffect } from "react";
import { useModalState } from "../../zustand/Modal";

interface FormValues {
  [key: string]: any;
}

interface FormikFormProps {
  handleSubmit: any;
  initialValues: FormValues;
  validationSchema: any;
  title?: string;
  children: ReactNode;
  ButtonName?: string;
}

const FormikFormModel: React.FC<FormikFormProps> = ({
  children,
  handleSubmit,
  initialValues,
  validationSchema,
}) => {
  const { isOpen } = useModalState((state) => state);

  return (
    <Formik
      enableReinitialize={true}
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {(formik) => {
        useEffect(() => {
          if (isOpen === "" || isOpen === "isSuccess") {
            formik.setErrors({});
            formik.resetForm();
          }
        }, [isOpen]);

        return <Form className="w-100">{children}</Form>;
      }}
    </Formik>
  );
};

export default FormikFormModel;
