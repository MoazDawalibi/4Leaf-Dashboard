import { Button, Image, Upload, UploadFile } from "antd";
import useFormField from "../../Hooks/useFormField";
import { UploadOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import { FaRegFilePdf } from "react-icons/fa";
import { useState } from "react";

const PdfUploader = ({
  name,
  label,
  onChange,
  isDisabled,
  placholder,
  className,
  props,
}: any) => {
  const { formik, t, isError } = useFormField(name, props);
  let FormikName = formik.values[name];
  const imageUrl = formik.values[name] ? FormikName : "";
  const [Imageurl, setImageurl] = useState(null);

  const FilehandleChange = (value: any) => {
    // console.log(value.file.originFileObj, "value.file.originFileObj");

    formik.setFieldValue(name, value.file.originFileObj);
    setImageurl(value.file.originFileObj);
  };
  const customRequest = async ({ onSuccess }: any) => {
    onSuccess();
  };
  const UploadProps = {
    name: "file",
    customRequest: customRequest,
    onChange: FilehandleChange,
    headers: {
      authorization: "authorization-text",
    },
  };
  return (
    <div className="PdfUploader">
      <div>ملف الواجب</div>
      <main>
        {Imageurl === null ? (
          <div className="ImagePdfUploader">
            <Image src={"/Icon/Empty_Image.png"} />
          </div>
        ) : (
          <div className="ImagePdfUploaderWrapper">
            <Image src={URL.createObjectURL(Imageurl)} />
          </div>
        )}

        <Upload {...UploadProps}>
          <Button>
            {" "}
            إضافة ورقة <FaRegFilePdf />
          </Button>
        </Upload>
      </main>
    </div>
  );
};

export default PdfUploader;
