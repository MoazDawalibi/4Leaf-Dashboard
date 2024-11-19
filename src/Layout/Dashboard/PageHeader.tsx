import { BsPlusCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import useModalHandler from "../../utils/useModalHandler";
import { deletePathSegments } from "../../utils/deletePathSegments";
import { getPrevPathRoute } from "../../utils/getPrevPathRoute";
import PageTitleComponent from "./PageTitle";
import { useFilterStateState } from "../../zustand/Filter";

const PageHeader = ({
  canAdd,
  ModelAbility,
  pageTitle,
  openModel = true,
  locationToNavigate,
  addModal = true,
  modelButtonTitle = "add",
}: {
  canAdd?: any;
  ModelAbility?: any;
  pageTitle: string;
  openModel?: boolean;
  locationToNavigate?: string | any;
  addModal?: boolean;
  modelButtonTitle?: string;
}) => {
  const navigate = useNavigate();
  const { handel_open_model } = useModalHandler();
  const { t } = useTranslation();

  const PrevPath = getPrevPathRoute(location.pathname);
  const { setFilter } = useFilterStateState();

  const handleNavigateToPage = (location: string) => {
    setFilter({});
    navigate(location);
  };

  console.log();
  return (
    <div className="page_header">
      <header className="d-flex justify-content-between">
        <span className="page_header_links">
          <h1 className="page_title">{t(`PageTitle.${pageTitle}`)}</h1>
          <span className="page_links">
            <PageTitleComponent />
          </span>
        </span>
        {addModal
          ? canAdd && (
              <div className="Selects">
                <button
                  onClick={() =>
                    openModel
                      ? handel_open_model(ModelAbility)
                      : handleNavigateToPage(locationToNavigate)
                  }
                  className="add_button"
                >
                  <BsPlusCircleFill />
                  {t(`practical.${modelButtonTitle}`)}
                </button>
              </div>
            )
          : ""}
      </header>
    </div>
  );
};

export default PageHeader;
