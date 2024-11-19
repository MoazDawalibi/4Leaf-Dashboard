import { Col, Row } from "reactstrap";
import React, { useEffect } from "react";
import ValidationField from "../../../Components/ValidationField/ValidationField";
import { useFormikContext } from "formik";
import { useModalState } from "../../../zustand/Modal";

const Form = () => {
  const { isOpen } = useModalState((state) => state);
  const formik = useFormikContext<any>();
  useEffect(() => {
    if (isOpen === "") {
      formik.setErrors({});
      formik.resetForm();
    }
  }, [isOpen]);

  return (
    <Row className="w-100">
      <Col>
        <ValidationField name="old_password" label="old_password" />
      </Col>
      <Col>
        <ValidationField name="new_password" label="new_password" />
      </Col>
    </Row>
  );
};

export default Form;
