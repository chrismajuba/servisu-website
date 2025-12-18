import React, { useContext } from "react";
import "./providerDashboard.css";
import "../../../../pages/legal/LegalPages.css";
import { APIContext } from "../../../context/ContextProvider";
import { useNavigate } from "react-router-dom";

const ProviderDashboard = () => {
  const { providerDetails } = useContext(APIContext);
  const navigate = useNavigate();

  // Mock data - replace with actual data from API
  const stats = {
    totalRequests: 12,
    pendingRequests: 3,
    acceptedRequests: 7,
    completedServices: 5,
    rating: providerDetails?.rating || 0,
    totalCalls: providerDetails?.calls || 0,
  };

  return (
    <div className="provider-dashboard legal-content">
      <div className="legal-section">
        <h2>Dashboard</h2>
        <div className="dashboard-contents">
          <div className="dashboard-card">
            <h3>Total Requests</h3>
            <div className="value">{stats.totalRequests}</div>
            <div className="label">All time service requests</div>
          </div>

          <div className="dashboard-card">
            <h3>Pending Requests</h3>
            <div className="value">{stats.pendingRequests}</div>
            <div className="label">Awaiting your response</div>
          </div>

          <div className="dashboard-card">
            <h3>Accepted Requests</h3>
            <div className="value">{stats.acceptedRequests}</div>
            <div className="label">Currently active</div>
          </div>

          <div className="dashboard-card">
            <h3>Completed Services</h3>
            <div className="value">{stats.completedServices}</div>
            <div className="label">Successfully completed</div>
          </div>

          <div className="dashboard-card">
            <h3>Rating</h3>
            <div className="value">{stats.rating.toFixed(1)}</div>
            <div className="label">Out of 5.0 stars</div>
            <div className="description">
              Based on {stats.totalCalls} service calls
            </div>
          </div>

          <div className="dashboard-card">
            <h3>Experience</h3>
            <div className="value">{providerDetails?.experience || 0}</div>
            <div className="label">Years of experience</div>
          </div>
        </div>
      </div>

      <div className="legal-section">
        <div className="quick-actions">
          <h3>Quick Actions</h3>
          <div className="action-buttons">
            <button
              className="action-button"
              onClick={() => navigate("/provider/requests")}
            >
              View Requests
            </button>
            <button
              className="action-button secondary"
              onClick={() => navigate("/provider/profile")}
            >
              Update Profile
            </button>
            <button
              className="action-button secondary"
              onClick={() => navigate("/provider/availability")}
            >
              Manage Availability
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProviderDashboard;

