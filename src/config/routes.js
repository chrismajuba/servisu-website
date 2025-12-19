/**
 * Route path constants
 * Centralized route definitions to avoid magic strings
 */
export const ROUTES = {
  // Public routes
  HOME: "/home",
  HOME_PAGE: "/servisu-website",
  ROOT: "/",
  PROVIDERS: "/providers",
  VIEW_PROVIDER: "/view-provider/:id",
  REQUEST_PROVIDER: "/request-provider",

  // Auth routes (public)
  LOGIN: "/login",
  REGISTER: "/register",
  PROVIDER_LOGIN: "/provider/login",
  PROVIDER_REGISTER: "/provider/register",

  // User protected routes
  USER_ACCOUNT: "/account",
  USER_VERIFY: "/account/verify",
  USER_MY_REQUESTS: "/account/my-requests",
  USER_UPDATE_VERIFICATION: "/account/update/verification",

  // Provider protected routes
  PROVIDER_ACCOUNT: "/provider/account",

  // Legal routes
  DATA_DELETION: "/data-deletion",
  PRIVACY_POLICY_USER: "/privacy-policy/user",
  PRIVACY_POLICY_PROVIDER: "/privacy-policy/provider",
  TERMS_CONDITIONS: "/terms-and-conditions",

  // Onboarding
  GET_STARTED: "/get-started",
};

/**
 * Helper function to generate dynamic routes
 */
export const getViewProviderRoute = (id) => `/view-provider/${id}`;

