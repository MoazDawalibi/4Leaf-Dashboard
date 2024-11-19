import { useFormikContext } from "formik";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { FaCirclePlus } from "react-icons/fa6";
import Tag from "./Tag";

const DynamicTags = () => {
  const formik = useFormikContext<any>();
  const [t] = useTranslation();

  const handleAddChoice = () => {
    const length = formik?.values?.synonyms.length;
    const lastElement = formik?.values?.synonyms[length - 1];

    if (lastElement !== "") {
      formik.setFieldValue("synonyms", [
        ...((formik?.values as any)?.synonyms as any[]),
        "",
      ]);
    } else {
    }
  };

  const lastElementIndex = formik?.values?.synonyms?.length - 1;
  useEffect(() => {
    const currentElement = document.getElementById(
      `synonyms_${lastElementIndex}`,
    );

    if (currentElement) {
      currentElement.focus(); // Set focus on the element
    }
  }, [lastElementIndex]);

  // console.log(formik?.values);
  // console.log(currentTag);

  return (
    <div className="DynamicTags">
      {formik?.values?.synonyms?.length < 1 && (
        <p className="add_new_button">
          <FaCirclePlus size={23} onClick={handleAddChoice} />{" "}
          {t("header.add_synonyms")}
        </p>
      )}

      <div className="tag_container">
        <div className="tags">
          {(((formik?.values as any)?.synonyms as any[]) || []).map(
            (item: any, index: number) => {
              return <Tag key={index} index={index} data={item} />;
            },
          )}
        </div>

        {formik?.values?.synonyms?.length > 0 && (
          <p className="add_new_button">
            <FaCirclePlus onClick={handleAddChoice} size={20} />
          </p>
        )}
      </div>
    </div>
  );
};

export default DynamicTags;
