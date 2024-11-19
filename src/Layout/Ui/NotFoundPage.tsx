import { useNavigate } from "react-router-dom";
import ProtectedRouteProvider from "../../lib/ProtectedRouteProvider";
import { useTranslation } from "react-i18next";
import { Button } from "antd";
import { FaArrowRight } from "react-icons/fa6";

function NotFoundPage() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <ProtectedRouteProvider className="not_found_page">
      <div className="not_found_container">
        <img src="/App/Error.png" alt="Error 404" width={500} />
        <h3>{t("practical.sorry_something_went_wrong")}</h3>
        <p>
          {t(
            "practical.error_404_Page_not_found._Sorry,_the_page_you_are_looking_for_does_not_exist",
          )}
        </p>
        <Button
          className="not_found_button"
          onClick={() => navigate("/", { replace: true })}
        >
          <FaArrowRight />
          {t("practical.return_to_the_dashboard")}
        </Button>
      </div>
    </ProtectedRouteProvider>
  );
}

export default NotFoundPage;
