/**
 * Route path constants
 * Centralized route definitions to avoid magic strings
 */
export const ROUTES = {
  // Public routes
  HOME: "/home",
  HOME_PAGE: "/servisu-website",
  ROOT: "/",
  
  // Legal routes
  DATA_DELETION: "/data-deletion",
  PRIVACY_POLICY_USER: "/privacy-policy/user",
  PRIVACY_POLICY_PROVIDER: "/privacy-policy/provider",
  TERMS_CONDITIONS: "/terms-and-conditions",

  // Onboarding
  GET_STARTED: "/get-started",

  // Help
  HELP_CENTER: "/help-center",
};

/**
 * Helper function to generate dynamic routes
 */
export const getViewProviderRoute = (id) => `/view-provider/${id}`;

