import { useFormikContext } from "formik";
import React, { useRef, useEffect } from "react";
import { useObjectToEdit } from "../../../../zustand/ObjectToEditState";
import { FaTrash } from "react-icons/fa";

const Tag = ({ data, index }: { data: any; index: number }) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const formik = useFormikContext<any>();
  const { setTagsSearch, setCurrentTag } = useObjectToEdit();

  useEffect(() => {
    if (textareaRef.current) {
      // Adjust the height of the textarea based on content
      textareaRef.current.style.height = "auto"; // Reset height
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`; // Set to scroll height
    }
  }, [formik?.values?.synonyms[index]]);

  const handleEditInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    formik.setFieldValue(`synonyms[${index}]`, e.target.value);
    setTagsSearch(e.target.value);
    setCurrentTag(index);
  };

  const handleInputBlur = () => {
    // Optionally reset search state
    // setTagsSearch(null);
  };

  const handleDeleteChoice = () => {
    const currentTags = [...formik.values.synonyms];
    currentTags.splice(index, 1);
    console.log(currentTags); // Log the updated tags array
    formik.setFieldValue("synonyms", currentTags);
    setTagsSearch(null);
  };

  return (
    <div className="tag">
      <textarea
        id={`synonyms_${index}`}
        ref={textareaRef}
        className="tagInput"
        value={formik?.values?.synonyms[index]}
        onChange={handleEditInputChange}
        onBlur={handleInputBlur}
        rows={1}
        style={{ resize: "none", overflow: "hidden" }}
      />
      <FaTrash onClick={handleDeleteChoice} />
    </div>
  );
};

export default Tag;
