import React, { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { getAllRoutes } from "../../config/routeConfig";
import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";
import LoadingScreen from "../../modules/core/components/pop_up/progress_bar/LoadingScreen";
import { ROUTES } from "../../config/routes";

/**
 * AppRoutes Component
 * Centralized route configuration with protection and lazy loading
 */
const AppRoutes = () => {
  const routes = getAllRoutes();

  return (
    <Suspense fallback={<LoadingScreen />}>
      <Routes>
        {/* Root redirect */}
        <Route path={ROUTES.ROOT} element={<Navigate to={ROUTES.HOME} replace />} />
        
        {routes.map((route, index) => {
          // Handle public routes (redirect if authenticated)
          if (route.isPublicRoute) {
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <PublicRoute
                    redirectTo={ROUTES.HOME}
                    userTypeRedirect={route.userTypeRedirect}
                  >
                    {route.element}
                  </PublicRoute>
                }
              />
            );
          }

          // Handle protected routes
          if (route.requireAuth) {
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <ProtectedRoute
                    requireAuth={route.requireAuth}
                    requiredUserType={route.requiredUserType}
                    signInMessage={
                      route.signInMessage ||
                      "Please login to access this page"
                    }
                  >
                    {route.element}
                  </ProtectedRoute>
                }
              />
            );
          }

          // Handle public routes (no protection)
          return (
            <Route key={index} path={route.path} element={route.element} />
          );
        })}
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;

