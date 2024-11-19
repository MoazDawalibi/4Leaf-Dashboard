import React from "react";
import { Switch } from "antd";
export interface SwitchProps {
  onChange?: (checked: any, event: any) => any;
  checked?: boolean;
}
const onSwitchChange = (checked: boolean) => {
  console.log(`switch to ${checked}`);
};

const SwitchButton = ({ onChange, checked }: SwitchProps) => {
  return (
    <Switch
      className="switch_button"
      defaultChecked
      onChange={(checked: any, event: any) =>
        onChange ? onChange(checked, event) : onSwitchChange(checked)
      }
      // checked={checked}
    />
  );
};

export default SwitchButton;
