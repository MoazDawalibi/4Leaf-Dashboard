import { useTranslation } from "react-i18next";
import { Select } from "antd";
import { TbReorder } from "react-icons/tb";
import { useFilterStateState } from "../../zustand/Filter";

const OrderBySelect = () => {
  const { t } = useTranslation();
  const { setFilter } = useFilterStateState();
  const handleChange = (value: string) => {
    setFilter({
      sort_by: value,
    });
  };

  return (
    <div className="order_by_filter">
      <Select
        className="order_by_select"
        style={{ width: 200 }}
        size="large"
        allowClear
        placeholder={
          <div>
            <TbReorder className="addition_select_icon" /> {t("header.sort_by")}{" "}
          </div>
        }
        onChange={handleChange}
        options={[
          { value: "ascending", label: t("select.array.order.ascending") },
          { value: "descending", label: t("select.array.order.descending") },
          // {
          //   value: "recently_viewed",
          //   label: t("select.array.order.recently_viewed"),
          // },
          // {
          //   value: "recently_arrived",
          //   label: t("select.array.order.recently_arrived"),
          // },
        ]}
      />
    </div>
  );
};

export default OrderBySelect;
