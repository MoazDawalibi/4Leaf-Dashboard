import React from "react";
import ValidationField from "../../../../Components/ValidationField/ValidationField";
import { Col, Row } from "reactstrap";

const FilterForm = () => {
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
