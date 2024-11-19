import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useFilterStateState } from "../../zustand/Filter";
import { useDebounce } from "../../utils/useDebounce";
import { PaginationParams } from "../../api/utils/PaginationParams";

interface Props {
  placeholder: string;
  searchBy: string;
}

const SearchField: React.FC<Props> = ({ placeholder, searchBy }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  const { setFilter, Filter } = useFilterStateState();
  const { page } = PaginationParams(location);

  const handleInputChange = (value: string) => {
    setSearchQuery(value);
  };

  const handleInputChangeWithDebounce = useDebounce((value: string) => {
    if (Number(page) > 1) {
    }
    setFilter({
      [searchBy]: value,
    });
  });

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (inputRef.current && !inputRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const [t] = useTranslation();
  return (
    <div className={`search-field ${isOpen ? "open" : ""}`}>
      <div className="search-header" onClick={handleToggleDropdown}>
        {/* <IoSearch className="search__icon" />  */}
        <input
          ref={inputRef}
          type="text"
          className="search__input"
          placeholder={t(placeholder)}
          value={searchQuery}
          onChange={(e) => {
            handleInputChange(e.target.value);
            handleInputChangeWithDebounce(e.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default SearchField;
