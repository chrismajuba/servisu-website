import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { APIContext } from "../../modules/context/ContextProvider";
import { ROUTES } from "../../config/routes";

/**
 * PublicRoute Component
 * Redirects authenticated users away from public pages (like login/register)
 * 
 * @param {Object} props
 * @param {React.Component} props.children - Component to render
 * @param {string} props.redirectTo - Route to redirect authenticated users to
 * @param {string} props.userTypeRedirect - 'user' or 'provider' specific redirect
 */
const PublicRoute = ({
  children,
  redirectTo = ROUTES.HOME,
  userTypeRedirect = null, // { user: '/account', provider: '/provider/account' }
}) => {
  const { authDetails, loginDetails, providerDetails, userType } =
    useContext(APIContext);

  const isAuthenticated =
    authDetails != null && authDetails.authenticated;

  // If authenticated, redirect based on user type
  if (isAuthenticated) {
    if (userTypeRedirect && userType) {
      const redirectPath = userTypeRedirect[userType];
      if (redirectPath) {
        return <Navigate to={redirectPath} replace />;
      }
    }
    return <Navigate to={redirectTo} replace />;
  }

  // Not authenticated, show public page
  return children;
};

export default PublicRoute;

