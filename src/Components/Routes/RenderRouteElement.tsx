import { Suspense } from "react";
import SpinContainer from "../Layout/SpinContainer";
import Layout from "../../Layout/Ui/Layout";

export const RenderRouteElement = (route: any) => (
  <Suspense
    fallback={
      <Layout>
        <SpinContainer />
      </Layout>
    }
  >
    {route.header ? <Layout>{route.element}</Layout> : route.element || <></>}
  </Suspense>
);
