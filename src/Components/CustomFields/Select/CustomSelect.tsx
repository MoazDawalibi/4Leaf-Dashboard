import React, { useState, useRef, useEffect } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { useLocation, useNavigate } from "react-router-dom";

interface Option {
  label: string;
  value: string | number;
}

interface Props {
  options: Option[];
  placeholder: string;
  onChange?: (option: Option) => void;
  searchBy?: string;
}

const CustomSelect: React.FC<Props> = ({
  options,
  placeholder,
  onChange,
  searchBy = "name",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);
  const node = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: Option) => {
    setSelectedOption(option);
    // console.log(option);

    navigate(`${location.pathname}?${searchBy}=${option?.value}`);

    setIsOpen(false);
    setSearchTerm("");
  };

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  useEffect(() => {
    // Add event listener when component mounts
    document.addEventListener("mousedown", handleClickOutside);
    // Remove event listener when component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event: MouseEvent) => {
    // Close the dropdown if clicked outside the component
    if (node.current && !node.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };
  return (
    <div className={`custom-select ${isOpen ? "open" : ""}`} ref={node}>
      <div className="select-header" onClick={toggleDropdown}>
        <IoMdArrowDropdown
          className={`custom_select_icon ${isOpen ? "open" : ""}`}
        />
        <input
          type="text"
          placeholder={selectedOption ? selectedOption.label : placeholder}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={() => setIsOpen(true)}
          className="search-input"
        />
      </div>
      {(isOpen || (searchTerm !== "" && filteredOptions.length > 0)) && (
        <div className="options">
          <div className="options-list">
            {filteredOptions.map((option) => (
              <div
                key={option.value}
                className="option"
                onClick={() => handleOptionClick(option)}
              >
                {option.label}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
