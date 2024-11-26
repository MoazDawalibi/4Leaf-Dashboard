

import { Col, Row } from "reactstrap";
import ValidationField from "../../../Components/ValidationField/ValidationField";

const ModelForm = () => {
  return (
    <Row className="w-100">
      <Col>
        <ValidationField name="name" placeholder="name" label="name" />
        <ValidationField name="price" placeholder="price" label="price" />

      </Col>
      <Col>
        <ValidationField name="image" placeholder="image" label="image" type="File" />
      </Col>
    </Row>
  );
};

export default ModelForm;


