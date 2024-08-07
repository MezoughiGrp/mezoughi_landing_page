import { Suspense, lazy, Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import LoadingScreen from "./views/LoadingScreen/LoadingScreen.jsx";

export const renderRoutes = (routes = []) => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Routes>
        {routes.map((route, i) => {
          let Layout = route.layout || Fragment;
          let Component = route.component;

          return (
            <Route
              key={i}
              path={route.path}
              element={
                <Layout>
                  <Component />
                </Layout>
              }
            />
          );
        })}
      </Routes>
    </Suspense>
  );
};

const routes = [
  {
    path: "/",
    component: lazy(() => import("./views/LandingPage/LandingPage.jsx")),
  },
  {
    path: "*",
    component: lazy(() => import("./views/NotFound/index.jsx")),
  },
];

export default routes;
