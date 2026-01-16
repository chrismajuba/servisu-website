import React from "react";
import { ROUTES } from "./routes";

// Lazy load pages for better performance
const Home = React.lazy(() => import("../pages/home/Home"));
const DataDeletionPage = React.lazy(() => import("../pages/legal/DataDeletionPage"));
const UserPrivacyPolicyPage = React.lazy(() => import("../pages/legal/UserPrivacyPolicyPage"));
const ProviderPrivacyPolicyPage = React.lazy(() => import("../pages/legal/ProviderPrivacyPolicyPage"));
const TermsConditionsPage = React.lazy(() => import("../pages/legal/TermsConditionsPage"));
const GetStartedPage = React.lazy(() => import("../pages/get_started/GetStartedPage"));
const HelpCenterPage = React.lazy(() => import("../pages/help/HelpCenterPage"));

/**
 * Route configuration
 * Organized by route type for better maintainability
 */
export const routeConfig = {
  // Public routes (no authentication required)
  public: [
    {
      path: ROUTES.HOME,
      element: <Home />,
    },
    {
      path: ROUTES.HOME_PAGE,
      element: <Home />,
    },
    {
      path: ROUTES.GET_STARTED,
      element: <GetStartedPage />,
    },
    {
      path: ROUTES.DATA_DELETION,
      element: <DataDeletionPage />,
    },
    {
      path: ROUTES.PRIVACY_POLICY_USER,
      element: <UserPrivacyPolicyPage />,
    },
    {
      path: ROUTES.PRIVACY_POLICY_PROVIDER,
      element: <ProviderPrivacyPolicyPage />,
    },
    {
      path: ROUTES.TERMS_CONDITIONS,
      element: <TermsConditionsPage />,
    },
    {
      path: ROUTES.HELP_CENTER,
      element: <HelpCenterPage />,
    },
  ],

  // Public but may require auth for some features
  publicWithAuth: [
  ],

  // Authentication routes (public, but redirect if already logged in)
  auth: [
  ],

  // User protected routes
  userProtected: [
  ],

  // Provider protected routes
  providerProtected: [
  ],
};

/**
 * Get all routes as a flat array for React Router
 */
export const getAllRoutes = () => {
  const allRoutes = [
    ...routeConfig.public,
    ...routeConfig.publicWithAuth,
    ...routeConfig.auth,
    ...routeConfig.userProtected,
    ...routeConfig.providerProtected,
  ];

  return allRoutes;
};

