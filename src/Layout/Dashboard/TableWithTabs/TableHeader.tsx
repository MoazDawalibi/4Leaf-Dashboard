import React from "react";
import { FaDownload } from "react-icons/fa";
import { useTabsState } from "../../../zustand/TabsState";

const TableHeader = () => {
  const { ActiveTab } = useTabsState();

  return (
    <div className="table_header">
      <div>
        <h6>نسب النجاح في المدارس</h6>

        <p>100 مدرسة</p>
      </div>
      <div>
        <button>
          <FaDownload /> طباعة
        </button>
      </div>
    </div>
  );
};

export default TableHeader;
