import React, { useContext, useEffect } from "react";
import "./requestService.css";
import { useParams } from "react-router-dom";
import { APIContext } from "../../modules/context/ContextProvider";

const RequestService = () => {
  const { id } = useParams();
  const { serviceProviders } = useContext(APIContext);

  return (
    <form className="request-service">
      <div className="request-service-left">
        <p className="title">Service Provider Details</p>
        <button>Request</button>
      </div>
      <div className="request-service-right">
        <p className="title">Please enter your Contact details</p>
        <div className="multi-fields">
          <input type="text" placeholder="First name" required />
          <input type="text" placeholder="Last name" required />
        </div>
        <input type="email" placeholder="Email address" required />
        <input type="text" placeholder="Cell number" required />

        <p className="title">Please enter your Address details</p>
        <input type="text" placeholder="Street" required />
        <input type="text" placeholder="Suburb" required />
        <input type="text" placeholder="City" required />
        <div className="multi-fields">
          <input type="number" placeholder="House/unit number" required />
          <input type="number" placeholder="Postal code" required />
        </div>
      </div>
    </form>
  );
};

export default RequestService;
