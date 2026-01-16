import React, { useContext } from "react";
import { APIContext } from "../../modules/context/ContextProvider";
import LoadingScreen from "../../modules/core/components/pop_up/progress_bar/LoadingScreen";

const ProtectedRoute = ({
  children,
}) => {
  const { isLoading } = useContext(APIContext);

  // Show loading while checking authentication
  if (isLoading) {
    return <LoadingScreen />;
  }
  // All checks passed, render children
  return children;
};

export default ProtectedRoute;

