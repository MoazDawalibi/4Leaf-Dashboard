import { useTranslation } from "react-i18next";
import { lazy, Suspense } from "react";
import { Spin } from "antd";
import useSetPageTitle from "../../../../Hooks/useSetPageTitle";
import PageHeader from "../../../../Layout/Dashboard/PageHeader";
import InfoCard from "../../../../Components/Cards/InfoCard";
import AddressCard from "../../../../Components/Cards/AddressCard";
import {
  ReSellerAddressInfo,
  ReSellerParamInfo,
} from "../../../../Components/Cards/ParamInfo";
import StudentTabs from "./ReSellerTabs";
import { useParams } from "react-router-dom";
import { ParamsEnum } from "../../../../enums/params";
import AttachmentsCard from "../../../../Components/Cards/AttachmentsCard";
import { ModalEnum } from "../../../../enums/Model";
import {
  useDeleteReseller,
  useDeleteResellerCollection,
} from "../../../../api/reseller";
import { useObjectToEdit } from "../../../../zustand/ObjectToEditState";
import useModalHandler from "../../../../utils/useModalHandler";
const DeleteModalForm = lazy(
  () => import("../../../../Layout/Dashboard/DeleteModels"),
);
const EditModalForm = lazy(() => import("./Model/EditModel"));
const AddModalForm = lazy(() => import("./Model/AddModel"));

const TableHeader = () => {
  const [t] = useTranslation();
  const { reseller_id } = useParams<ParamsEnum>();

  useSetPageTitle([
    { name: `${t(`page_header.home`)}`, path: "/" },
    { name: `${t(`page_header.reseller`)}`, path: "reseller" },
    {
      name: `${t(`page_header.reseller_details`)}`,
      path: `reseller/${reseller_id}`,
    },
  ]);
  const { handel_open_model } = useModalHandler();

  const handleOpenModel = () => {
    handel_open_model(ModalEnum?.RE_SELLER_COLLECTION_ADD);
  };

  const deleteMutation = useDeleteResellerCollection();
  return (
    <div className="TableWithHeader single_student">
      <Suspense fallback={<Spin />}>
        <PageHeader pageTitle="reseller_details" />
        <div className="single_student_body">
          <div className="student_info reseller_info">
            <InfoCard
              withButton={true}
              data={ReSellerParamInfo}
              name={"moaz dawalibi"}
              status={"subs"}
              handleClick={handleOpenModel}
            />
            <AddressCard data={ReSellerAddressInfo} />
            <AttachmentsCard />
          </div>
          <div className="student_table">
            <StudentTabs />
            <DeleteModalForm
              deleteMutation={deleteMutation}
              ModelEnum={ModalEnum?.RE_SELLER_COLLECTION_DELETE}
            />
            <AddModalForm />
            <EditModalForm />
          </div>
        </div>
      </Suspense>
    </div>
  );
};

export default TableHeader;
