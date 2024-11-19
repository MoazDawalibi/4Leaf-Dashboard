import { useTranslation } from "react-i18next";
import { lazy, Suspense } from "react";
import { Spin } from "antd";
import useSetPageTitle from "../../../Hooks/useSetPageTitle";
import { ModalEnum } from "../../../enums/Model";
import { useDeleteArea } from "../../../api/Area";
import PageHeader from "../../../Layout/Dashboard/PageHeader";
import FilterLayout from "../../../Layout/Dashboard/FilterLayout";
import FilterForm from "./Model/FilterForm";
import { canAddArea } from "../../../utils/hasAbilityFn";
import { ParamsEnum } from "../../../enums/params";
import { useParams } from "react-router-dom";

const Table = lazy(() => import("./Table"));
const AddModalForm = lazy(() => import("./Model/AddModel"));
const EditModalForm = lazy(() => import("./Model/EditModel"));
const DeleteModalForm = lazy(
  () => import("../../../Layout/Dashboard/DeleteModels"),
);

const TableHeader = () => {
  const [t] = useTranslation();
  const deleteMutation = useDeleteArea();
  const { city_id } = useParams<ParamsEnum>();
  useSetPageTitle([
    { name: `${t(`page_header.home`)}`, path: "/" },
    { name: `${t(`page_header.Area`)}`, path: `city/${city_id}` },
  ]);

  return (
    <div className="TableWithHeader">
      <Suspense fallback={<Spin />}>
        <PageHeader
          pageTitle="Area"
          ModelAbility={ModalEnum?.AREA_ADD}
          canAdd={canAddArea}
        />
        <FilterLayout
          sub_children={<FilterForm />}
          filterTitle="table.Area"
          haveFilter={false}
        />
        <Table />
        <AddModalForm />
        <EditModalForm />
        <DeleteModalForm
          deleteMutation={deleteMutation}
          ModelEnum={ModalEnum?.AREA_DELETE}
        />
      </Suspense>
    </div>
  );
};

export default TableHeader;
