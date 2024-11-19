import React from "react";
import ValidationField from "../../../../../Components/ValidationField/ValidationField";
import { Col, Row } from "reactstrap";

const FilterForm = () => {
  return (
    <div>
      <Row>
        <Col>
          <ValidationField
            placeholder="first_name"
            label="first_name"
            name="first_name"
          />
          {/* <ValidationField placeholder="last_name" label="last_name" name="last_name" /> */}
        </Col>
        {/* <Col>
          <ValidationField placeholder="username" label="username" name="username" />
        </Col> */}
      </Row>
    </div>
  );
};

export default FilterForm;
