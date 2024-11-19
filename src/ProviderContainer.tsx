import QueryProvider from "./lib/ReactQueryProvider";
import { BrowserRouter } from "react-router-dom";
import { ChildrenType } from "./types/App";
import ToastProvider from "./lib/ToastProvider";
import AntdProvider from "./lib/AntdProvider";
import I18nProvider from "./lib/I18nProvider";

function ProviderContainer({ children }: ChildrenType) {
  return (
    <BrowserRouter basename="/">
      <I18nProvider>
        <QueryProvider>
          <ToastProvider>
            <AntdProvider>{children}</AntdProvider>
          </ToastProvider>
        </QueryProvider>
      </I18nProvider>
    </BrowserRouter>
  );
}

export default ProviderContainer;
