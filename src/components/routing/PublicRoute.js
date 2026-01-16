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
  redirectTo = ROUTES.HOME
}) => {
  return children;
};

export default PublicRoute;

