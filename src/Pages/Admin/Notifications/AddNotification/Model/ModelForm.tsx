import { Col, Row } from "reactstrap";
import ValidationField from "../../../../../Components/ValidationField/ValidationField";

const Form = () => {
  return (
    <Row className="w-100">
      <Col>
        <ValidationField name="title" placeholder="title" label="title" />
        <ValidationField name="body" placeholder="body" label="body" />
      </Col>
      <Col>
        <ValidationField name="seen" placeholder="seen" label="seen" />
        <ValidationField
          name="notifiable_type"
          placeholder="notifiable_type"
          label="notifiable_type"
        />
      </Col>
    </Row>
  );
};

export default Form;
