import "./ImageBoxField.scss";
import { useState, useRef, useEffect, memo } from "react";
import ImageIcon from "./ImageIcon";
import ImageCancelIcon from "./ImageCancelIcon";
import { getNestedValue } from "../../../utils/getNestedValue";
import { generateImagePreview } from "./generateImagePreview";
import { useTranslation } from "react-i18next";
import { areFieldPropsEqual } from "../../../utils/areFieldPropsEqual";

// Helper function to generate image preview from a File

const ImageBoxFieldMemo = memo(
  ({ form, field }: any) => {
    const { values, setFieldValue } = form;
    const { name } = field;
    const value = getNestedValue(values, name);
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement | null>(null);
    const [t] = useTranslation();
    useEffect(() => {
      if (value instanceof File) {
        generateImagePreview(value, setImagePreview);
      } else if (typeof value === "string") {
        setImagePreview(value);
      } else {
        setImagePreview(null);
      }
    }, [value]);

    const handleFileChange = (event: any) => {
      const file = event.target.files[0];

      if (file) {
        const maxSize = 2 * 1024 * 1024;

        if (file.size > maxSize) {
          alert(t("validation.File_size_exceeds_2_MB_limit."));
          event.target.value = "";
          return;
        }

        // Process the file
      }

      if (file) {
        generateImagePreview(file, setImagePreview);

        setFieldValue(name, file);
      }
    };

    const handleButtonClick = () => {
      const fileInput = fileInputRef.current;
      if (fileInput) {
        fileInput.click();
      }
    };

    const handleCancel = () => {
      setImagePreview("");
      setFieldValue(name, null);

      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    };

    console.log(name);

    return (
      <div className="ImageBoxField">
        <div className="ImageHeader">
          {imagePreview ? (
            <>
              <ImageCancelIcon
                onClick={handleCancel}
                className="ImageCancelIcon"
              />
              <ImageIcon onClick={handleButtonClick} className="ImageBoxIcon" />
            </>
          ) : (
            <div className="VisibleHidden">hidden</div>
          )}
        </div>
        <div className="ImageBox" onClick={handleButtonClick}>
          {imagePreview ? (
            <img src={imagePreview} alt="Preview" className="imagePreview" />
          ) : (
            <ImageIcon className="ImageBoxIcon" />
          )}
        </div>
        <input
          id={`file-input-${name}`}
          type="file"
          accept="image/png, image/jpeg, image/webp"
          style={{ display: "none" }}
          onChange={handleFileChange}
          ref={fileInputRef}
        />
      </div>
    );
  },
  (prevProps, nextProps) => {
    return areFieldPropsEqual(prevProps, nextProps);
  },
);

export default ImageBoxFieldMemo;
