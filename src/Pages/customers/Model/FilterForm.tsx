
import React from "react";
import ValidationField from "../../../Components/ValidationField/ValidationField";
import { Col, Row } from "reactstrap";
import { useFormikContext } from "formik";

const FilterForm = () => {
  const formik = useFormikContext();

  return (
    <div>
      <Row>
        <Col>
          <ValidationField placeholder="name" label="name" name="account_name" />
          <ValidationField placeholder="phone_number" label="phone_number" name="phone_number" type="number"/>

        </Col>
      </Row>
    </div>
  );
};

export default FilterForm;

