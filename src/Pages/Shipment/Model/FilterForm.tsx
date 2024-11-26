
import React from "react";
import ValidationField from "../../../Components/ValidationField/ValidationField";
import { Col, Row } from "reactstrap";
import { useFormikContext } from "formik";
import { ShipmentStatus } from "../../../config/ShipmentStatus";

const FilterForm = () => {
  const formik = useFormikContext();

  return (
    <div>
      <Row>
        <Col>
          <ValidationField placeholder="name" label="name" name="name" />
          <ValidationField name="currency_price" placeholder="currency_price" label="currency_price"  type="number"/>
          <ValidationField name="status" placeholder="status" label="status" type="Select" option={ShipmentStatus} fieldNames={{value:"status",label:"status"}}/>
        </Col>
        <Col>
          <ValidationField name="start_date" placeholder="start_date" label="start_date" type="Date"/>
          <ValidationField name="end_date" placeholder="end_date" label="end_date" type="Date" />
        </Col>
      </Row>
    </div>
  );
};

export default FilterForm;

