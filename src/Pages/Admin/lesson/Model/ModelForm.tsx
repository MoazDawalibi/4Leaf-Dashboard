import { Col, Row } from "reactstrap";
import ValidationField from "../../../../Components/ValidationField/ValidationField";
const Form = () => {
  return (
    <Row className="w-100">
      <ValidationField name="name" label="name" />
    </Row>
  );
};

export default Form;
