import React from "react";
import ValidationField from "../../../../Components/ValidationField/ValidationField";
import { Col, Row } from "reactstrap";
import { useFormikContext } from "formik";

const FilterForm = () => {
  const formik = useFormikContext();

  return (
    <div>
      <Row>
        <Col>
          <ValidationField placeholder="name" label="name" name="name" />
        </Col>
      </Row>
    </div>
  );
};

export default FilterForm;
