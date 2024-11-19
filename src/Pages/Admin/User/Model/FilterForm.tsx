import React from "react";
import ValidationField from "../../../../Components/ValidationField/ValidationField";
import { Col, Row } from "reactstrap";
import { userTypeOptions } from "../../../../config/userTypeOptions";

const FilterForm = () => {
  return (
    <div>
      <Row>
        <Col>
          <ValidationField
            placeholder="username"
            label="username"
            name="username"
          />
          <ValidationField
            placeholder="phone_number"
            label="phone_number"
            name="phone_number"
          />
        </Col>
        <Col>
          <ValidationField
            type="Select"
            option={userTypeOptions}
            placeholder="type"
            label="type"
            name="type"
          />
        </Col>
      </Row>
    </div>
  );
};

export default FilterForm;
