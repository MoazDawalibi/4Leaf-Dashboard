

import { Col, Row } from "reactstrap";
import ValidationField from "../../../Components/ValidationField/ValidationField";
import { ShipmentStatus } from "../../../config/ShipmentStatus";

const ModelForm = ({isAdd = true}:{isAdd?:boolean}) => {
  return (
    <Row className="w-100">
      <Col>
        <ValidationField name="name" placeholder="name" label="name" />
        <ValidationField name="start_date" placeholder="start_date" label="start_date" type="Date"/>
        <ValidationField name="end_date" placeholder="end_date" label="end_date" type="Date" />
        <ValidationField name="status" placeholder="status" label="status" type="Select" option={ShipmentStatus} fieldNames={{value:"status",label:"status"}}/>
        {isAdd ? "" 
        :
        <>
          <ValidationField name="order_count" placeholder="order_count" label="order_count" type="number"/>
          <ValidationField name="product_count" placeholder="product_count" label="product_count" type="number"/>
        </>
        }


      </Col>
      <Col>
        <ValidationField name="currency_price" placeholder="currency_price" label="currency_price"  type="number"/>
        <ValidationField name="customer_currency_price" placeholder="customer_currency_price" label="customer_currency_price" type="number" />
        {isAdd ? "" 
        :
        <>
          <ValidationField name="shipping_fees_total_profit" placeholder="shipping_fees_total_profit" label="shipping_fees_total_profit" type="number"/>
          <ValidationField name="currency_profit" placeholder="currency_profit" label="currency_profit" type="number" />
          <ValidationField name="total_profit" placeholder="total_profit" label="total_profit" type="number" />
          <ValidationField name="total_price" placeholder="total_price" label="total_price" type="number" />
        </>
        }
      </Col>
    </Row>
  );
};

export default ModelForm;



