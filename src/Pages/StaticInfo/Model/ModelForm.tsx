

import { Col, Row } from "reactstrap";
import ValidationField from "../../../Components/ValidationField/ValidationField";

const ModelForm = () => {
  return (
    <Row className="w-100">
      <Col>
        <ValidationField name="key" placeholder="key" label="key" />
        <ValidationField name="value" placeholder="value" label="value" />
      </Col>
    </Row>
  );
};

export default ModelForm;



