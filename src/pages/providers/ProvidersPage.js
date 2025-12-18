import React from "react";
import ProvidersGrid from "../../modules/providers/components/display/ProvidersGrid";
import { useLocation } from "react-router-dom";
import "../legal/LegalPages.css";

/**
 * ProvidersPage Component
 * Authentication is handled by ProtectedRoute wrapper
 */
const ProvidersPage = () => {
  const navLocation = useLocation();
  const occupation = navLocation.state || -1;

  return (
    <div className="legal-page">
      <div className="legal-container">
        <div className="legal-header">
          <h1>Browse Service Providers</h1>
        </div>
        <div className="legal-content">
          <ProvidersGrid occupation={occupation} />
        </div>
      </div>
    </div>
  );
};

export default ProvidersPage;
