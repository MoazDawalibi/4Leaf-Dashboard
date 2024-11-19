import React, { ReactNode } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18nConfig"; // Import the configured i18n instance

interface I18nProviderProps {
  children: ReactNode;
}

const I18nProvider: React.FC<I18nProviderProps> = ({ children }) => {
  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
};

export default I18nProvider;
