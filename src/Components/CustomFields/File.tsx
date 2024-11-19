import React, { useEffect, useState } from "react";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { message, Upload } from "antd";
import type { GetProp, UploadProps } from "antd";
import { FaImage } from "react-icons/fa";
import { TbCameraPlus } from "react-icons/tb";
import { MdOutlineEdit } from "react-icons/md";
import { useFormikContext } from "formik";

type FileType = Parameters<GetProp<UploadProps, "beforeUpload">>[0];

const getBase64 = (img: FileType, callback: (url: string) => void) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result as string));
  reader.readAsDataURL(img);
};

const CustomFile: React.FC = () => {
  const formik = useFormikContext<any>();
  const FormikName = formik.values["image"] ?? "";

  const [imageUrl, setImageUrl] = useState<string>(FormikName);
  useEffect(() => {
    setImageUrl(FormikName);
  }, [FormikName]);

  const handleChange: UploadProps["onChange"] = (info) => {
    if (info.file.status === "done") {
      getBase64(info.file.originFileObj as FileType, (url) => {
        setImageUrl(url);
      });
    }
  };
  const customRequest = async ({ onSuccess }: any) => {
    onSuccess();
  };
  const uploadButton = (
    <button style={{ border: 0, background: "none" }} type="button">
      <div className="CustomFile">السحب والإفلات أو انقر هنا لتحديد الملف</div>
    </button>
  );
  const uploadIcon = (
    <div className="uploadIcon">
      <TbCameraPlus />
    </div>
  );

  return (
    <div className={`ValidationField ${imageUrl && `have_value`} w-100`}>
      <label className="text">الصورة * </label>

      <Upload
        name="avatar"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        customRequest={customRequest}
        onChange={handleChange}
      >
        {imageUrl ? (
          <img src={imageUrl} alt="avatar" style={{ width: "100%" }} />
        ) : (
          uploadButton
        )}
        {imageUrl && uploadIcon}
      </Upload>
    </div>
  );
};

export default CustomFile;
