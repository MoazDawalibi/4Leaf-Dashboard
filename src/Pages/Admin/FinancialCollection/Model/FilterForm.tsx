import React from "react";
import ValidationField from "../../../../Components/ValidationField/ValidationField";
import { Col, Row } from "reactstrap";
import { useGetAllReseller } from "../../../../api/reseller";

const FilterForm = () => {
  const { data } = useGetAllReseller();

  return (
    <div>
      <Row>
        <Col>
          <ValidationField
            placeholder="description"
            label="description"
            name="description"
          />
          <ValidationField placeholder="amount" label="amount" name="amount" />
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
        </Col>
      </Row>
    </div>
  );
};

export default FilterForm;
