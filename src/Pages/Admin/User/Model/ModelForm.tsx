import { Col, Row } from "reactstrap";
import ValidationField from "../../../../Components/ValidationField/ValidationField";
import useFormatDataToSelect from "../../../../utils/useFormatDataToSelect";
import { userTypeOptions } from "../../../../config/userTypeOptions";

const Form = ({ isEdit }: { isEdit?: boolean }) => {
  return (
    <Row className="w-100">
      {isEdit ? (
        ""
      ) : (
        <Col>
          <>
            <ValidationField
              placeholder="username"
              label="username"
              name="username"
            />
            <ValidationField
              placeholder="password"
              label="password"
              name="password"
            />
            <ValidationField
              placeholder="phone_number"
              label="phone_number"
              name="phone_number"
            />
          </>
        </Col>
      )}
      <Col>
        {isEdit ? (
          ""
        ) : (
          <ValidationField
            type="Select"
            option={userTypeOptions}
            placeholder="type"
            label="type"
            name="type"
          />
        )}
        <ValidationField
          type="Select"
          option={userTypeOptions}
          placeholder="roles"
          label="roles"
          name="role_id"
        />
        <ValidationField
          type="Select"
          option={userTypeOptions}
          placeholder="abilities"
          label="abilities"
          name="abilities"
          isMulti={true}
        />
      </Col>
    </Row>
  );
};

export default Form;
