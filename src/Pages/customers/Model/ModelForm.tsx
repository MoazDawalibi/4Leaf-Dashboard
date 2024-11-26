

import { Col, Row } from "reactstrap";
import ValidationField from "../../../Components/ValidationField/ValidationField";
import { CustomerType } from "../../../config/CustomerType";

const ModelForm = () => {
  return (
    <Row className="w-100">
      <Col>
        <ValidationField name="name" placeholder="name" label="name" />
        <ValidationField name="account_name" placeholder="account_name" label="account_name" />
        <ValidationField name="customer_type" placeholder="customer_type" label="customer_type" type="Select" option={CustomerType} fieldNames={{value:"customer_type",label:"customer_type"}} />
        </Col>
      <Col>
        <ValidationField name="phone_number" placeholder="phone_number" label="phone_number" />
        <ValidationField name="note" placeholder="note" label="note" type="TextArea" />

      </Col>
    </Row>
  );
};

export default ModelForm;



