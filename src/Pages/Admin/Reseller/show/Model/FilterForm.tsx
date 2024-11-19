import { Col, Row } from "reactstrap";
import ValidationField from "../../../../../Components/ValidationField/ValidationField";

const FilterForm = () => {
  return (
    <div>
      <Row>
        <Col>
          <ValidationField
            placeholder="activation_date"
            label="activation_date"
            name="activation_date"
            type="Date"
          />
          <ValidationField
            placeholder="expiration_date"
            label="expiration_date"
            name="expiration_date"
            type="Date"
          />
        </Col>
      </Row>
    </div>
  );
};

export default FilterForm;
