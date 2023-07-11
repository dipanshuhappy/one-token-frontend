
import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import Page404 from "../pages/404";

import { routes, privateRoutes } from "./routes";

const Routings = () => {
  return (
    <Suspense>
      <Routes>
        {routes.map((routeProps) => (
          <Route {...routeProps} key={routeProps.path as string} />
        ))}
        {privateRoutes.map(({ element, ...privateRouteProps }) => (
          <Route
            // element={
            //     // redirectTo={`/login?redirectTo=${privateRouteProps.path}`}
              
            //     // {element}
            // }
            {...privateRouteProps}
            key={`privateRoute-${privateRouteProps.path}`}
          />
        ))}
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Suspense>
  );
};

export default Routings;