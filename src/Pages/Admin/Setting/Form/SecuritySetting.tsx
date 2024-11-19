import TabHeader from "./TabHeader";
import SecurityCard from "./SecuritySetting/SecurityCard";
import { SecurityData } from "./SecuritySetting/SecurityData";
import { SettingType } from "../../../../types/Setting";

const SecuritySetting = () => {
  return (
    <div className="security_setting">
      <TabHeader
        name="security_setting"
        description="upload_your_photo_and_personal_data_here"
      ></TabHeader>
      <div className="security_setting_body">
        {SecurityData?.map((e: SettingType) => (
          <SecurityCard
            name={e?.name}
            description={e?.description}
            children={e?.children}
          />
        ))}
      </div>
    </div>
  );
};

export default SecuritySetting;
