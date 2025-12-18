import React from "react";
import ViewProvider from "../../modules/providers/components/view_provider/ViewProvider";
import { useParams } from "react-router-dom";

/**
 * ViewProviderPage Component
 * Authentication is handled by ProtectedRoute wrapper
 */
const ViewProviderPage = () => {
  const { id } = useParams();

  return <ViewProvider providerId={id} />;
};

export default ViewProviderPage;
