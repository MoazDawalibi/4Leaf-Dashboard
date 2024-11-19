import React, { useState, useEffect, useRef } from "react";
// import { IoSearch } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { LuSearch } from "react-icons/lu";

interface Option {
  label: string;
  value: string | number;
}

interface Props {
  options: Option[];
  placeholder: string;
  onSelect?: (option: Option) => void;
  withIcon?: boolean;
}

const SearchFieldWithSelect: React.FC<Props> = ({
  options,
  placeholder,
  onSelect,
  withIcon = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const node = useRef<HTMLDivElement>(null);

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

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const navigate = useNavigate();
  const handleOptionClick = (option: Option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onSelect && onSelect(option);

    navigate(option?.value as string);
  };

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase()),
  );
  const Type = localStorage.getItem("type");
  return (
    <div ref={node} className={`search-field ${isOpen ? "open" : ""}`}>
      <div className="search-header" onClick={toggleDropdown}>
        {withIcon && <LuSearch className="search__icon" />}

        {/* <p className="search__input_text">{placeholder}</p> */}
        <input
          type="text"
          className="search__input search__input_text"
          placeholder={selectedOption ? selectedOption.label : placeholder}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      {(isOpen || (searchTerm !== "" && filteredOptions.length > 0)) && (
        <div className="search-options">
          <div className="search-options-list">
            {filteredOptions.map((option) => {
              console.log(option);
              return (
                <div
                  key={option.value}
                  className="search-option"
                  onClick={() => handleOptionClick(option)}
                >
                  <div>{option.label}</div>
                  {/* {withIcon &&  <IoSearch className="search__icon" />} */}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchFieldWithSelect;
