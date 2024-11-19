import { useFormikContext } from "formik";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { GoArrowSwitch } from "react-icons/go";
import { useObjectToEdit } from "../../zustand/ObjectToEditState";
import { Checkbox, CheckboxProps, Popconfirm, Popover } from "antd";
import { CombinationKeyEnum } from "../../enums/CombinationKeyEnum";
import { PopconfirmProps } from "antd/lib";
import { SettingFilled } from "@ant-design/icons";
import { LocalStorageEnum } from "../../enums/LocalStorageEnum";

const Header = () => {
  const [t] = useTranslation();
  const { values, setValues } = useFormikContext<any>();
  const {
    isBseQuestion,
    setIsBseQuestion,
    ShowHint,
    setShowHint,
    ShowLatexOption,
    setShowLatexOption,
  } = useObjectToEdit();
  // const [Setting, setSetting] = useState(false)
  const isEdited = () => {
    if (isBseQuestion || values?.isBase === 1) {
      const content = !values?.content;
      const content_image = !values?.content_image;

      const Questions =
        values?.Questions?.length <= 1 &&
        values?.Questions?.[0]?.answers?.length === 0;
      const defaultQuestionHint =
        Object.keys(values?.Questions?.[0] ?? {})?.length <= 1;

      if (content && content_image && Questions && defaultQuestionHint) {
        return false;
      }
    } else {
      const content = !values?.content;
      const content_image = !values?.content_image;
      const hint = !values?.hint;
      const answers = !(values?.answers?.length > 0);
      const tags = !(values?.tags?.length > 0);
      if (content && content_image && hint && answers && tags) {
        return false;
      }
    }
    return true;
  };

  const handleChange = () => {
    if (isBseQuestion) {
      setIsBseQuestion(false);
      setValues(null);
    } else {
      setIsBseQuestion(true);
      setValues(null);
    }
  };

  const confirm: PopconfirmProps["onConfirm"] = (e) => {
    setTimeout(() => {
      handleChange();
    }, 500);
  };

  const content = (
    <div>
      <p>
        {" "}
        (CTRL + SHIFT + {CombinationKeyEnum.CHOICE}) {t("header.add_choice")}{" "}
      </p>
      <p>
        {" "}
        (CTRL + SHIFT + {CombinationKeyEnum.QUESTION}){" "}
        {t("header.add_question")}{" "}
      </p>
    </div>
  );

  const onChangeHint: CheckboxProps["onChange"] = (e) => {
    setShowHint(e.target.checked);
    localStorage?.setItem(
      LocalStorageEnum.HINT_INPUT,
      e.target.checked ? "true" : "false",
    );
  };

  const onChangeLatexOption: CheckboxProps["onChange"] = (e) => {
    setShowLatexOption(e.target.checked);
    localStorage?.setItem(
      LocalStorageEnum.LATEX_OPTION_INPUT,
      e.target.checked ? "true" : "false",
    );
  };

  const contentSetting = (
    <div>
      <Checkbox checked={ShowHint} onChange={onChangeHint}>
        {t("header.show_hint")}
      </Checkbox>

      <Checkbox checked={ShowLatexOption} onChange={onChangeLatexOption}>
        {t("header.show_MMl")}
      </Checkbox>
    </div>
  );

  return (
    <header className="exercise_add_header mb-4">
      <article>
        <Popover content={content} title={t("practical.Abbreviations")}>
          <img src="/Icon/QuestionIcon.svg" alt="" />
        </Popover>

        <div>
          {t("practical.add")} {t("models.exercise")}{" "}
        </div>
      </article>
      <div>
        <div className="question_header_setting">
          <Popover trigger="click" content={contentSetting}>
            <SettingFilled />
          </Popover>
        </div>

        {isEdited() ? (
          <Popconfirm
            title={t("header.this_will_un_do_all_your_changes")}
            okText={t("practical.yes")}
            cancelText={t("practical.no")}
            onConfirm={() => {
              confirm();
            }}
            defaultOpen={false}
          >
            <GoArrowSwitch className="m-2" />
            {isBseQuestion || values?.isBase === 1
              ? t("header.malty_exercise")
              : t("header.exercise")}
          </Popconfirm>
        ) : (
          <>
            <GoArrowSwitch onClick={() => confirm()} className="m-2" />
            {isBseQuestion || values?.isBase === 1
              ? t("header.malty_exercise")
              : t("header.exercise")}
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
