import React from "react";
import "./myRequests.css";

const MyRequests = ({ eventStatusDto }) => {
  if (eventStatusDto === null) {
    return (
      <div className="my-requests-container">
        <div className="my-requests-contents">
          <p>No request found.</p>
        </div>
      </div>
    );
  }
  return (
    <div className="my-requests-container">
      <div className="my-requests-contents">
        <p className="my-request-header">Requested Service Provider</p>
        <div className="provider-details">
          <div className="names">
            <h3>
              {`${eventStatusDto.providerName} ${eventStatusDto.providerSurname}`}
            </h3>
          </div>
          <div className="occupation">
            <label>Occupation</label>
            <p>{eventStatusDto.providerOccupation}</p>
          </div>
          <div className="request-status">
            <label>Request Status</label>
            <p>{eventStatusDto.status}</p>
          </div>
          <div className="message">
            <label>Message</label>
            <p>{eventStatusDto.message}</p>
          </div>
          <div className="date">
            <label>Date Of Service</label>
            <p>{eventStatusDto.requestedDate}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyRequests;
