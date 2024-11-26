import React from "react";
import LoginForm from "./LoginForm";
import { useTranslation } from "react-i18next";

const Auth = () => {
  const [t] = useTranslation();

  return (
    <div className="Auth">
      <div className="In_Auth">
        <header>
        <h1>{t("header.Welcome")}</h1>
          <p>{t("header.Enter your email and password to log in")}</p>
        </header>
        <LoginForm />
      </div>
    </div>
  );
};

export default Auth;
