import React, { FC } from "react";
import { Form } from "antd";

interface ValidationFieldContainerProps {
  children: React.ReactNode;
  isError: boolean;
  errorMsg: string;
}

export const ValidationFieldContainer: FC<ValidationFieldContainerProps> = ({
  children,
  isError,
  errorMsg,
}) => (
  <div className="ValidationFieldContainer">
    <Form.Item
      hasFeedback
      validateStatus={isError ? "error" : ""}
      help={isError ? errorMsg : ""}
    >
      {children}
    </Form.Item>
  </div>
);
