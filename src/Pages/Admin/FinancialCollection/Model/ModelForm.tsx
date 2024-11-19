import { Col, Row } from "reactstrap";
import ValidationField from "../../../../Components/ValidationField/ValidationField";
import { useGetAllReseller } from "../../../../api/reseller";

const Form = ({ isEdit = false }: { isEdit?: boolean }) => {
  const { data } = useGetAllReseller();

  return (
    <Row className="w-100">
      <Col>
        <ValidationField
          placeholder="description"
          label="description"
          name="description"
        />
        <ValidationField placeholder="amount" label="amount" name="amount" />
      </Col>
      <Col>
        <ValidationField
          placeholder="date"
          label="date"
          name="date"
          type="Date"
        />
        {isEdit ? (
          " "
        ) : (
          <ValidationField
            placeholder="reseller"
            label="reseller"
            name="reseller_id"
            type="Select"
            option={data?.data?.map((e: any) => ({
              ...e,
              fullName: `${e.first_name} ${e.last_name}`,
            }))}
            fieldNames={{
              label: "fullName",
              value: "id",
            }}
          />
        )}
      </Col>
    </Row>
  );
};

export default Form;
