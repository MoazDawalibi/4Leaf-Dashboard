
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
        <ValidationField name="name" placeholder="name" label="name" />
        <ValidationField name="product_quantity" placeholder="product_quantity" label="product_quantity" type="number"/>
        <ValidationField name="price" placeholder="price" label="price" type="number"/>
      </Col>
      <Col>
        <ValidationField name="discount" placeholder="discount" label="discount" type="number"/>
        <ValidationField name="product_options" placeholder="product_options" label="product_options" type="TextArea" />
      </Col>
      </Row>
    </div>
  );
};

export default FilterForm;

