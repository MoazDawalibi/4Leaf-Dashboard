

import { Col, Row } from "reactstrap";
import ValidationField from "../../../Components/ValidationField/ValidationField";

const ModelForm = () => {
  return (
    <Row className="w-100">
      <Col>
        <ValidationField name="name" placeholder="name" label="name" />
        <ValidationField name="account_name" placeholder="account_name" label="account_name" />

      </Col>
      <Col>
        <ValidationField name="phone_number" placeholder="phone_number" label="phone_number" />
        <ValidationField name="note" placeholder="note" label="note" type="TextArea" />

      </Col>
    </Row>
  );
};

export default ModelForm;



