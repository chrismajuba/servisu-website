import React, { useContext } from "react";
import "./userDashboard.css";
import "../../../../pages/legal/LegalPages.css";
import { APIContext } from "../../../context/ContextProvider";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../../config/routes";

const UserDashboard = () => {
  const { loginDetails } = useContext(APIContext);
  const navigate = useNavigate();

  // Mock data - replace with actual data from API
  const stats = {
    totalRequests: 5,
    activeRequests: 2,
    completedServices: 3,
    favoriteProviders: 0,
  };

  const quickActions = [
    {
      title: "Browse Providers",
      description: "Find service providers",
      route: ROUTES.PROVIDERS,
      color: "#4caf50",
    },
    {
      title: "My Requests",
      description: "View your service requests",
      route: ROUTES.USER_MY_REQUESTS,
      color: "#4caf50",
    },
    {
      title: "Account Settings",
      description: "Manage your profile",
      route: ROUTES.USER_ACCOUNT,
      color: "#4caf50",
    },
  ];

  return (
    <div className="user-dashboard legal-content">
      {/* Welcome & Stats */}
      <div className="legal-section">
        <div className="welcome-section">
          <h2>
            Welcome back, {loginDetails?.name || "User"}!
          </h2>
          <p>Here's what's happening with your account</p>
        </div>
        <div className="dashboard-stats">
          <div className="stat-card">
            <div className="stat-content">
              <div className="stat-value">{stats.totalRequests}</div>
              <div className="stat-label">Total Requests</div>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-content">
              <div className="stat-value">{stats.activeRequests}</div>
              <div className="stat-label">Active Requests</div>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-content">
              <div className="stat-value">{stats.completedServices}</div>
              <div className="stat-label">Completed Services</div>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-content">
              <div className="stat-value">{stats.favoriteProviders}</div>
              <div className="stat-label">Favorite Providers</div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="legal-section">
        <div className="quick-actions-section">
          <h3>Quick Actions</h3>
          <div className="quick-actions-grid">
            {quickActions.map((action, index) => (
              <div
                key={index}
                className="quick-action-card"
                onClick={() => navigate(action.route)}
                style={{ borderTopColor: action.color }}
              >
                <div className="action-content">
                  <h4>{action.title}</h4>
                  <p>{action.description}</p>
                </div>
                <div className="action-arrow">→</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Activity Section */}
      <div className="legal-section">
        <div className="recent-activity">
          <h3>Recent Activity</h3>
          <div className="activity-list">
            <div className="activity-item">
              <div className="activity-content">
                <p className="activity-title">Service Request Created</p>
                <p className="activity-time">2 days ago</p>
              </div>
            </div>
            <div className="activity-item">
              <div className="activity-content">
                <p className="activity-title">Service Completed</p>
                <p className="activity-time">5 days ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;

