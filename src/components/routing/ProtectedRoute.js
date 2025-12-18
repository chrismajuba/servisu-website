import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { APIContext } from "../../modules/context/ContextProvider";
import SignIn from "../../modules/auth/sign_in/SignIn";
import ProviderSignIn from "../../modules/service_provider/components/auth/ProviderSignIn";
import LoadingScreen from "../../modules/core/components/pop_up/progress_bar/LoadingScreen";
import { ROUTES } from "../../config/routes";

/**
 * ProtectedRoute Component
 * Handles route protection based on authentication and user type
 * 
 * @param {Object} props
 * @param {React.Component} props.children - Component to render if authorized
 * @param {boolean} props.requireAuth - Whether authentication is required
 * @param {string} props.requiredUserType - 'user' or 'provider' or null for any authenticated user
 * @param {string} props.redirectTo - Route to redirect to if not authorized
 * @param {string} props.signInMessage - Custom message for sign-in prompt
 */
const ProtectedRoute = ({
  children,
  requireAuth = true,
  requiredUserType = null, // 'user', 'provider', or null for any
  redirectTo = ROUTES.HOME,
  signInMessage = "Please login to access this page",
}) => {
  const { authDetails, loginDetails, providerDetails, userType, isLoading } =
    useContext(APIContext);

  // Show loading while checking authentication
  if (isLoading) {
    return <LoadingScreen />;
  }

  // If auth is not required, render children
  if (!requireAuth) {
    return children;
  }

  // Check if user is authenticated
  const isAuthenticated =
    authDetails != null && authDetails.authenticated;

  // If not authenticated, show sign-in
  if (!isAuthenticated) {
    if (requiredUserType === "provider") {
      return (
        <ProviderSignIn
          headerMessage={signInMessage}
          siginT="signin"
          onSuccess={() => window.location.reload()}
        />
      );
    }
    return <SignIn headerMessage={signInMessage} />;
  }

  // Check user type if required
  if (requiredUserType) {
    if (requiredUserType === "user" && userType !== "user") {
      return <Navigate to={redirectTo} replace />;
    }
    if (requiredUserType === "provider" && userType !== "provider") {
      return <Navigate to={redirectTo} replace />;
    }
  }

  // All checks passed, render children
  return children;
};

export default ProtectedRoute;

