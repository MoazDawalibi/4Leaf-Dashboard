import React from "react";
import { MdOutlineEdit } from "react-icons/md";

interface ValidationFieldLabelProps {
  name: string;
  label?: string;
  no_label?: boolean;
  label_icon?: boolean;
  placeholder?: string;
  t: (key: string) => string;
}

export const ValidationFieldLabel: React.FC<ValidationFieldLabelProps> = ({
  name,
  label,
  placeholder,
  no_label,
  label_icon,
  t,
}) => (
  <>
    {no_label ? (
      <label htmlFor={name} className="text">
        <span>empty</span>
      </label>
    ) : label_icon ? (
      <div className="LabelWithIcon">
        <label htmlFor={name} className="text">
          {t(`input.${label ? label : name}`)}
        </label>
        <MdOutlineEdit size={22} style={{ color: "#A098AE" }} />
      </div>
    ) : (
      <label htmlFor={name} className="text">
        {t(`input.${label ? label : name}`)}
      </label>
    )}
  </>
);
