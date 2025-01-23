import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Divider } from "antd";
import SearchFieldWithSelect from "../../Components/DataTable/SearchFieldWithSelect";
import { translateOptions } from "../../utils/translatedOptions";
import { search_array } from "../../Routes";
import PaginationColumn from "../../Components/Filter/PaginationColumn";
import OrderBySelect from "../../Components/Filter/OrderBySelect";
import { BiFilterAlt } from "react-icons/bi";
import { MdKeyboardArrowDown } from "react-icons/md";
import SearchField from "../../Components/DataTable/SearchField";
import useFilter from "../../Components/Utils/Filter/useFilter";

const FilterLayout = ({
  filterTitle,
  sub_children,
  search_by = "name",
  width = "500px",
  haveFilter = true,
  haveOrder = true,
  haveSearch = true,
}: {
  filterTitle: string;
  sub_children?: any;
  search_by?: string;
  width?: string;
  haveFilter?: boolean;
  haveOrder?: boolean;
  haveSearch?: boolean;
}) => {
  const { t } = useTranslation();
  const translateArray = translateOptions(search_array, t);
  const [isOpen, setIsOpen] = useState(false);

  const { FilterBody, FilterSubmit } = useFilter();
  return (
    <div className="filter_header">
      <div className="filter_header_top">
        <h4>{t(filterTitle)}</h4>

        <div className="filter_and_order_by">
          <span>
            <FilterBody
              ModelClassName="filter_model_direction"
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              width={width}
            >
              <div className="model_sub_children">{sub_children}</div>
              <FilterSubmit />
            </FilterBody>
            {haveFilter && (
              <div className="filter_button" onClick={() => setIsOpen(true)}>
                <span>
                  <BiFilterAlt className="addition_select_icon" />
                  {t("header.filter")}
                </span>
                <MdKeyboardArrowDown />
              </div>
            )}
          </span>

          {/* <span>{haveOrder && <OrderBySelect />}</span> */}
        </div>
      </div>

      <Divider />

      <div className="filter_header_bottom">
        <span>
          <p>{t("header.per_page")}</p>
          <PaginationColumn />
          <p>{t("header.entries")}</p>
        </span>

        <div className="header_search">
          {haveSearch && (
            <SearchField
              searchBy={search_by}
              placeholder={t("practical.search_here")}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default FilterLayout;
