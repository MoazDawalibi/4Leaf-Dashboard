import { SettingType } from "../../../../../types/Setting";
import SwitchButton from "../../../../../Components/Switch/Switch";
import SecuritySettingButton from "../../../../../Components/Ui/Buttons/SecuritySettingButton";
import VerifyPhone from "./VerifyPhone";
import EmailAddress from "./EmailAddress";

export const SecurityData: SettingType[] = [
  {
    name: "password",
    description: "Set a unique password to protect the account",
    children: <SecuritySettingButton name="تغيير كلمة المرور" />,
  },
  {
    name: "two_factors",
    description: "Receive codes via SMS or email every time you log in",
    children: <SwitchButton />,
  },
  {
    name: "verify_phone_number",
    description: "The phone number associated with the account",
    children: <VerifyPhone />,
  },
  {
    name: "email_address",
    description: "The email address associated with the account",
    children: <EmailAddress />,
  },
  {
    name: "device_management",
    description: "Devices associated with the account",
    children: <SecuritySettingButton name="إدارة" />,
  },
  {
    name: "account_activity",
    description: "account_activities",
    children: <SecuritySettingButton name="عرض" />,
  },
  {
    name: "deactivate_the_account",
    description:
      "This will close your account. Your account will be interactive when you log in again",
    children: <SecuritySettingButton name="الغاء تنشيط" />,
  },
  {
    name: "delete_account",
    description: "Your account will be permanently deleted",
    children: <SecuritySettingButton name="حذف" danger={true} />,
  },
];
