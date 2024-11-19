import { Col, Row } from "reactstrap";
import ValidationField from "../../../../../../Components/ValidationField/ValidationField";

export const PhoneForm = () => {
  return (
    <Row className="w-100">
      <Col>
        <ValidationField
          placeholder="phone_number"
          label="phone_number"
          name="phone_number"
        />
      </Col>
    </Row>
  );
};

PhoneForm;

export const EmailForm = () => {
  return (
    <Row className="w-100">
      <Col>
        <ValidationField
          placeholder="email_address"
          label="email_address"
          name="email_address"
        />
      </Col>
    </Row>
  );
};

EmailForm;
