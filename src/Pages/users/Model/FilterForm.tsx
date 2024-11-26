
import React from "react";
import ValidationField from "../../../Components/ValidationField/ValidationField";
import { Col, Row } from "reactstrap";
import { useFormikContext } from "formik";
import { RoleType } from "../../../config/RoleType";

const FilterForm = () => {
  const formik = useFormikContext();

  return (
    <div>
      <Row>
        <Col>
          <ValidationField placeholder="email" label="email" name="email" />
          <ValidationField placeholder="role_type" label="role_type" name="role_type" option={RoleType} fieldNames={{value:"role_type",label:"role_type"}} type="Select" />
          </Col>
      </Row>
    </div>
  );
};

export default FilterForm;

