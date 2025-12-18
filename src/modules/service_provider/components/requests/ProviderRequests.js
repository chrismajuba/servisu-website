import React, { useState, useEffect, useContext } from "react";
import "./providerRequests.css";
import { APIContext } from "../../../context/ContextProvider";
import LoadingScreen from "../../../core/components/pop_up/progress_bar/LoadingScreen";
import {
  getServiceProviderRequests,
  acceptServiceRequest,
  rejectServiceRequest,
} from "../../../services/api/WeServeService";

const ProviderRequests = () => {
  const { authDetails, showPopupMessageOnNavbar, logout } =
    useContext(APIContext);
  const [requests, setRequests] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchProviderRequests();
  }, []);

  const fetchProviderRequests = () => {
    if (authDetails != null && authDetails.authenticated) {
      setIsLoading(true);
      getServiceProviderRequests(authDetails.accessToken)
        .then((response) => {
          setRequests(response.data || []);
          setIsLoading(false);
        })
        .catch((error) => {
          if (error?.status === 401) {
            logout();
            showPopupMessageOnNavbar(error.response?.data?.errorMessage);
          } else if (error.code === "ERR_NETWORK") {
            showPopupMessageOnNavbar(
              `[${error.message}] Server might be down. Please try again later`
            );
          } else if (error.code === "ECONNABORTED") {
            showPopupMessageOnNavbar(
              `[${error.message}] Connection timed out.`
            );
          } else {
            showPopupMessageOnNavbar(
              error.response?.data?.errorMessage || "Unexpected error"
            );
          }
          setIsLoading(false);
        });
    }
  };

  const handleAcceptRequest = (requestId) => {
    if (authDetails != null && authDetails.authenticated) {
      setIsLoading(true);
      acceptServiceRequest(authDetails.accessToken, requestId)
        .then(() => {
          showPopupMessageOnNavbar("Request accepted successfully");
          fetchProviderRequests();
        })
        .catch((error) => {
          if (error?.status === 401) {
            logout();
            showPopupMessageOnNavbar(error.response?.data?.errorMessage);
          } else if (error.code === "ERR_NETWORK") {
            showPopupMessageOnNavbar(
              `[${error.message}] Server might be down. Please try again later`
            );
          } else {
            showPopupMessageOnNavbar(
              error.response?.data?.errorMessage || "Unexpected error"
            );
          }
          setIsLoading(false);
        });
    }
  };

  const handleRejectRequest = (requestId) => {
    if (authDetails != null && authDetails.authenticated) {
      setIsLoading(true);
      rejectServiceRequest(authDetails.accessToken, requestId)
        .then(() => {
          showPopupMessageOnNavbar("Request rejected");
          fetchProviderRequests();
        })
        .catch((error) => {
          if (error?.status === 401) {
            logout();
            showPopupMessageOnNavbar(error.response?.data?.errorMessage);
          } else if (error.code === "ERR_NETWORK") {
            showPopupMessageOnNavbar(
              `[${error.message}] Server might be down. Please try again later`
            );
          } else {
            showPopupMessageOnNavbar(
              error.response?.data?.errorMessage || "Unexpected error"
            );
          }
          setIsLoading(false);
        });
    }
  };

  const getStatusClass = (status) => {
    switch (status) {
      case "PENDING":
        return "status-pending";
      case "ACCEPTED":
        return "status-accepted";
      case "REJECTED":
        return "status-rejected";
      case "COMPLETED":
        return "status-completed";
      default:
        return "";
    }
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (requests.length === 0) {
    return (
      <div className="provider-requests-container">
        <div className="provider-requests-contents">
          <h2 className="provider-request-header">Incoming Requests</h2>
          <div className="no-requests">
            <p>No service requests found.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="provider-requests-container">
      <div className="provider-requests-contents">
        <h2 className="provider-request-header">Incoming Requests</h2>
        {requests.map((request) => (
          <div key={request.id} className="request-card">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <h3>{request.clientName}</h3>
              <span className={`status-badge ${getStatusClass(request.status)}`}>
                {request.status}
              </span>
            </div>
            <div className="request-details">
              <div className="detail-item">
                <label>Client Email</label>
                <p>{request.clientEmail}</p>
              </div>
              <div className="detail-item">
                <label>Cell Number</label>
                <p>{request.clientCellNumber}</p>
              </div>
              <div className="detail-item">
                <label>Service Date</label>
                <p>{request.serviceDate}</p>
              </div>
              <div className="detail-item">
                <label>Address</label>
                <p>{request.address}</p>
              </div>
            </div>
            {request.message && (
              <div className="detail-item">
                <label>Message</label>
                <p>{request.message}</p>
              </div>
            )}
            {request.status === "PENDING" && (
              <div className="request-actions">
                <button
                  className="accept-btn"
                  onClick={() => handleAcceptRequest(request.id)}
                >
                  Accept
                </button>
                <button
                  className="reject-btn"
                  onClick={() => handleRejectRequest(request.id)}
                >
                  Reject
                </button>
              </div>
            )}
            {request.status !== "PENDING" && (
              <div className="request-actions">
                <button className="view-btn">View Details</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProviderRequests;

