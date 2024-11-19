import React from "react";
import ValidationField from "../../../../Components/ValidationField/ValidationField";
import { Col, Row } from "reactstrap";

const FilterForm = () => {
  return (
    <div>
      <Row>
        <Col>
          <ValidationField placeholder="name" label="name" name="name" />
          <ValidationField
            placeholder="created_at"
            label="created_at"
            name="created_at"
          />
        </Col>
      </Row>
    </div>
  );
};

export default FilterForm;
