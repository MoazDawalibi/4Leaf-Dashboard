import React from "react";
import ValidationField from "../../../../Components/ValidationField/ValidationField";
import { Col, Row } from "reactstrap";

const FilterForm = () => {
  return (
    <div>
      <Row>
        <Col>
          <ValidationField placeholder="key" label="key" name="key" />
          <ValidationField placeholder="value" label="value" name="value" />
        </Col>
      </Row>
    </div>
  );
};

export default FilterForm;
