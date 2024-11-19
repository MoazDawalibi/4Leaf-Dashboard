import { Button, Upload, UploadFile } from "antd";
import useFormField from "../../../Hooks/useFormField";
import { UploadOutlined } from "@ant-design/icons";
import React, { useMemo } from "react";

const File = ({
  name,
  label,
  onChange,
  isDisabled,
  placeholder,
  className,
  props,
}: any) => {
  const { formik, t, isError, errorMsg } = useFormField(name, props);
  let imageUrl = formik?.values?.[name] ?? null;

  const fileList: UploadFile[] = useMemo(() => {
    if (!imageUrl) {
      return [];
    }

    return [
      typeof imageUrl === "string"
        ? {
            uid: "-1",
            name: "",
            status: "done",
            url: imageUrl,
            thumbUrl: imageUrl,
          }
        : {
            uid: imageUrl.uid || "-1",
            name: imageUrl.name || "",
            status: "done",
            originFileObj: imageUrl,
          },
    ];
  }, [imageUrl]);

  const FilehandleChange = (value: any) => {
    if (value.fileList.length === 0) {
      formik.setFieldValue(name, null);
    } else {
      formik.setFieldValue(name, value?.file?.originFileObj);
    }
  };
  const customRequest = async ({ onSuccess, no_label, label_icon }: any) => {
    onSuccess();
  };

  const beforeUpload = (file: File) => {
    const maxSize = 2 * 1024 * 1024; // 2 MB in bytes

    if (file.size > maxSize) {
      alert(t("validation.File_size_exceeds_2_MB_limit."));
      return Upload.LIST_IGNORE; // Prevent the file from being uploaded
    }
    return true; // Allow the file to be uploaded
  };

  return (
    <div className={`ValidationField upload_image_button ${className ?? ""} `}>
      <label htmlFor={name} className="text">
        {t(`input.${label || name}`)}
      </label>

      <Upload
        beforeUpload={beforeUpload} // Set the beforeUpload function
        disabled={isDisabled}
        listType="picture"
        maxCount={1}
        fileList={[...fileList]}
        onChange={onChange || FilehandleChange}
        customRequest={customRequest}
        className={` w-100`}
        id={name}
      >
        <Button
          className={isError ? "isError w-100 " : " w-100"}
          icon={<UploadOutlined />}
        >
          {placeholder
            ? t(`input.${placeholder}`)
            : t("input.Click_to_upload_the_image")}
        </Button>
        <div className="Error_color"> {isError ? "required" : ""}</div>
        {errorMsg}
      </Upload>
    </div>
  );
};

export default React.memo(File);
