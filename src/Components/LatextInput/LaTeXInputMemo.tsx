import TextArea from "antd/es/input/TextArea";
import React, { Suspense, useEffect, useState } from "react";
import { parseTextAndLatex } from "../../utils/parseTextAndLatex";
import LatexPreview from "../CustomFields/MathComponent";
import { Checkbox } from "antd";
import { CheckboxProps } from "antd/lib";
import { useTranslation } from "react-i18next";
import { FaPlus } from "react-icons/fa";
import { useObjectToEdit } from "../../zustand/ObjectToEditState";
import SpinContainer from "../Layout/SpinContainer";
import { areFieldPropsEqual } from "./areFieldPropsEqual";

const AddLazyModal = React.lazy(() => import("./AddLaTexModal"));
const EditLazyModal = React.lazy(() => import("./EditLaTexModal"));

const LaTeXInputMemo: React.FC<any> = React.memo(
  ({ field, form, label, ...props }) => {
    const { name, value } = field;

    const { setFieldValue, touched, errors, getFieldProps, values } = form;

    const { ShowLatexOption, Success } = useObjectToEdit();
    const [showPreview, setShowPreview] = useState(false);
    const Preview = parseTextAndLatex(value ?? "");

    const onPreviewChange: CheckboxProps["onChange"] = (e) => {
      setShowPreview(e.target.checked);
    };

    const [t] = useTranslation();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [Latex, setLatex] = useState<string>("");

    const showModal = () => {
      setIsModalOpen(true);
    };

    const handleEditModal = (item: any) => {
      // console.log(item);
      // setLatex(item);
      // setIsEditModalOpen(true);
    };

    const [curCentValue, setCurrentValue] = useState(value);
    const handleChangeInput = (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
      setCurrentValue(e.target.value);
    };
    const onBlur = () => {
      if (curCentValue !== value) {
        setFieldValue(name, curCentValue);
      }
    };

    useEffect(() => {
      if (Success) {
        setCurrentValue(null);
      }
    }, [Success]);

    useEffect(() => {
      if (value) {
        setCurrentValue(value);
      }
    }, [value]);

    const isError = !!touched?.[name] && !!errors?.[name];
    const errorMessage = isError ? ((errors?.[name] as string) ?? "") : "";

    console.log(values);

    let metaName = name.substring(0, name.lastIndexOf("."));
    if (metaName.includes(".") || metaName.includes("[")) {
      metaName += ".meta";
    } else {
      metaName += "meta";
    }
    const meta = getFieldProps(metaName).value;
    console.log(metaName, meta);
    const direction = meta?.direction === "ltr" ? "ltr" : "rtl";

    const [Dir, setDir] = useState<"ltr" | "rtl">(direction);

    const handleChangeDirection = () => {
      if (Dir === "ltr") {
        setDir("rtl");
        setFieldValue(metaName, { ...(meta ?? {}), direction: "rtl" });
      } else {
        setDir("ltr");
        setFieldValue(metaName, { ...(meta ?? {}), direction: "ltr" });
      }
    };

    return (
      <div className="LaTeXInput">
        <label htmlFor={name} className="text">
          <div>{t(label || name)}</div>{" "}
          <div className="error_message">{t(errorMessage)}</div>
        </label>

        <div className="LaTeXInputArea">
          <TextArea
            size="large"
            showCount
            maxLength={5000}
            autoSize={{ minRows: 6, maxRows: 10 }}
            style={{ height: "400px" }}
            onChange={handleChangeInput}
            value={curCentValue}
            onBlur={onBlur}
            dir={Dir}
            {...props}
          />
          <div className="LaTeXInputOptions">
            <Checkbox
              onChange={handleChangeDirection}
              checked={direction === "ltr"}
            >
              {t("header.change_direction")}
            </Checkbox>

            {ShowLatexOption && (
              <>
                <Checkbox onChange={onPreviewChange}>
                  {t("header.show_preview")}
                </Checkbox>
                <button type="button" className="addMML" onClick={showModal}>
                  <FaPlus /> {t("MML")}
                </button>
              </>
            )}
          </div>

          {showPreview && (
            <div className="showPreviewInput">
              {Preview?.map((item: any, index: number) => {
                if (item?.isLatex) {
                  console.log(item?.text);

                  return (
                    <span
                      dir="ltr"
                      key={index}
                      onClick={() => handleEditModal(item)}
                      className="LatexPreview"
                    >
                      <LatexPreview latex={item?.text} />
                    </span>
                  );
                }
                return <div key={index}>{item?.text}</div>;
              })}
            </div>
          )}
        </div>

        <Suspense fallback={<SpinContainer />}>
          <AddLazyModal
            name={name}
            Latex={Latex}
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
            setLatex={setLatex}
            setCurrentValue={setCurrentValue}
          />
          <EditLazyModal
            name={name}
            Latex={Latex}
            isModalOpen={isEditModalOpen}
            setIsModalOpen={setIsEditModalOpen}
            setLatex={setLatex}
          />
        </Suspense>
      </div>
    );
  },
  (prevProps, nextProps) => {
    return areFieldPropsEqual(prevProps, nextProps);
  },
);

export default LaTeXInputMemo;
