
import React from "react";
import ValidationField from "../../../Components/ValidationField/ValidationField";
import { Col, Row } from "reactstrap";
import { useFormikContext } from "formik";
import { CustomerType } from "../../../config/CustomerType";

const FilterForm = () => {
  const formik = useFormikContext();

  return (
    <div>
      <Row>
        <Col>
          <ValidationField placeholder="name" label="name" name="account_name" />
          <ValidationField placeholder="phone_number" label="phone_number" name="phone_number" type="number"/>
          <ValidationField name="customer_type" placeholder="customer_type" label="customer_type" type="Select" option={CustomerType} fieldNames={{value:"customer_type",label:"customer_type"}} />

        </Col>
      </Row>
    </div>
  );
};

export default FilterForm;

