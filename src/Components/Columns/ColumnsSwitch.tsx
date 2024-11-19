import { Switch } from "antd";
import React from "react";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
export interface ColumnsSwitchProps {
  Front?: string;
  Back?: string;
  onChange?: (checked: any, event: any) => any;
  icon?: boolean;
  Null?: boolean;

  Checked?: boolean;
}
const ColumnsSwitch = (props: ColumnsSwitchProps) => {
  const { Front, Back, icon, onChange, Checked, Null } = props;

  const onSwitchChange = (checked: boolean, event: Event) => {
    // formik.setFieldValue("status", checked)
  };
  return (
    <Switch
      checkedChildren={icon ? <CheckOutlined /> : Null ? null : Front}
      unCheckedChildren={icon ? <CloseOutlined /> : Null ? null : Back}
      onChange={(checked: any, event: any) =>
        onChange ? onChange(checked, event) : onSwitchChange(checked, event)
      }
      checked={Checked}
    />
  );
};

export default ColumnsSwitch;

ColumnsSwitch.defaultProps = {
  Front: "Front",
  Back: "Back",
  onChange: undefined,
  icon: false,
  Checked: false,
  Null: false,
};
