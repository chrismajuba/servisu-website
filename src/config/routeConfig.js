import React from "react";
import { ROUTES } from "./routes";

// Lazy load pages for better performance
const Home = React.lazy(() => import("../pages/home/Home"));
const ProvidersPage = React.lazy(() => import("../pages/providers/ProvidersPage"));
const UserPage = React.lazy(() => import("../pages/user/UserPage"));
const ViewProviderPage = React.lazy(() => import("../pages/providers/ViewProviderPage"));
const RequestProviderPage = React.lazy(() => import("../pages/providers/RequestProviderPage"));
const VerificationPage = React.lazy(() => import("../pages/verification/VerificationPage"));
const MyRequestsPage = React.lazy(() => import("../pages/user/MyRequestPage"));
const UserVerificationPage = React.lazy(() => import("../pages/verification/UserVerificationPage"));
const LoginPage = React.lazy(() => import("../pages/user/LoginPage"));
const RegistrationPage = React.lazy(() => import("../pages/user/RegisterPage"));
const ProviderPage = React.lazy(() => import("../pages/service_provider/ProviderPage"));
const ProviderLoginPage = React.lazy(() => import("../pages/service_provider/ProviderLoginPage"));
const ProviderRegisterPage = React.lazy(() => import("../pages/service_provider/ProviderRegisterPage"));
const DataDeletionPage = React.lazy(() => import("../pages/legal/DataDeletionPage"));
const PrivacyPolicyPage = React.lazy(() => import("../pages/legal/PrivacyPolicyPage"));
const TermsConditionsPage = React.lazy(() => import("../pages/legal/TermsConditionsPage"));
const GetStartedPage = React.lazy(() => import("../pages/get_started/GetStartedPage"));

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
      path: ROUTES.GET_STARTED,
      element: <GetStartedPage />,
    },
    {
      path: ROUTES.DATA_DELETION,
      element: <DataDeletionPage />,
    },
    {
      path: ROUTES.PRIVACY_POLICY,
      element: <PrivacyPolicyPage />,
    },
    {
      path: ROUTES.TERMS_CONDITIONS,
      element: <TermsConditionsPage />,
    },
  ],

  // Public but may require auth for some features
  publicWithAuth: [
    {
      path: ROUTES.PROVIDERS,
      element: <ProvidersPage />,
      requireAuth: true,
      requiredUserType: "user",
    },
    {
      path: ROUTES.VIEW_PROVIDER,
      element: <ViewProviderPage />,
      requireAuth: true,
      requiredUserType: "user",
    },
    {
      path: ROUTES.REQUEST_PROVIDER,
      element: <RequestProviderPage />,
      requireAuth: true,
      requiredUserType: "user",
    },
  ],

  // Authentication routes (public, but redirect if already logged in)
  auth: [
    {
      path: ROUTES.LOGIN,
      element: <LoginPage />,
      isPublicRoute: true,
      userTypeRedirect: {
        user: ROUTES.USER_ACCOUNT,
        provider: ROUTES.PROVIDER_ACCOUNT,
      },
    },
    {
      path: ROUTES.REGISTER,
      element: <RegistrationPage />,
      isPublicRoute: true,
      userTypeRedirect: {
        user: ROUTES.USER_ACCOUNT,
        provider: ROUTES.PROVIDER_ACCOUNT,
      },
    },
    {
      path: ROUTES.PROVIDER_LOGIN,
      element: <ProviderLoginPage />,
      isPublicRoute: true,
      userTypeRedirect: {
        provider: ROUTES.PROVIDER_ACCOUNT,
      },
    },
    {
      path: ROUTES.PROVIDER_REGISTER,
      element: <ProviderRegisterPage />,
      isPublicRoute: true,
      userTypeRedirect: {
        provider: ROUTES.PROVIDER_ACCOUNT,
      },
    },
  ],

  // User protected routes
  userProtected: [
    {
      path: ROUTES.USER_ACCOUNT,
      element: <UserPage />,
      requireAuth: true,
      requiredUserType: "user",
    },
    {
      path: ROUTES.USER_VERIFY,
      element: <VerificationPage />,
      requireAuth: true,
      requiredUserType: "user",
    },
    {
      path: ROUTES.USER_MY_REQUESTS,
      element: <MyRequestsPage />,
      requireAuth: true,
      requiredUserType: "user",
    },
    {
      path: ROUTES.USER_UPDATE_VERIFICATION,
      element: <UserVerificationPage />,
      requireAuth: true,
      requiredUserType: "user",
    },
  ],

  // Provider protected routes
  providerProtected: [
    {
      path: ROUTES.PROVIDER_ACCOUNT,
      element: <ProviderPage />,
      requireAuth: true,
      requiredUserType: "provider",
    },
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

