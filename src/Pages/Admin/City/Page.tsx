import { useTranslation } from "react-i18next";
import { lazy, Suspense } from "react";
import { Spin } from "antd";
import useSetPageTitle from "../../../Hooks/useSetPageTitle";
import { ModalEnum } from "../../../enums/Model";
import { useDeleteCity } from "../../../api/City";
import PageHeader from "../../../Layout/Dashboard/PageHeader";
import FilterLayout from "../../../Layout/Dashboard/FilterLayout";
import FilterForm from "./Model/FilterForm";
import { canAddCity } from "../../../utils/hasAbilityFn";

const Table = lazy(() => import("./Table"));
const AddModalForm = lazy(() => import("./Model/AddModel"));
const EditModalForm = lazy(() => import("./Model/EditModel"));
const DeleteModalForm = lazy(
  () => import("../../../Layout/Dashboard/DeleteModels"),
);

const TableHeader = () => {
  const [t] = useTranslation();
  const deleteMutation = useDeleteCity();

  useSetPageTitle([
    { name: `${t(`page_header.home`)}`, path: "/" },
    { name: `${t(`page_header.City`)}`, path: "City" },
  ]);

  return (
    <div className="TableWithHeader">
      <Suspense fallback={<Spin />}>
        <PageHeader
          pageTitle="City"
          ModelAbility={ModalEnum?.CITY_ADD}
          canAdd={canAddCity}
        />
        <FilterLayout
          sub_children={<FilterForm />}
          haveFilter={false}
          filterTitle="table.City"
        />
        <Table />
        <AddModalForm />
        <EditModalForm />
        <DeleteModalForm
          deleteMutation={deleteMutation}
          ModelEnum={ModalEnum?.CITY_DELETE}
        />
      </Suspense>
    </div>
  );
};

export default TableHeader;
