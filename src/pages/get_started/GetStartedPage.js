import React from "react";
import "../legal/LegalPages.css";
import "./GetStartedPage.css";
import { Link } from "react-router-dom";
import { ROUTES } from "../../config/routes";

const GetStartedPage = () => {
  return (
    <div className="legal-page">
      <div className="legal-container">
        <div className="legal-header">
          <h1>Get Started with Servisu</h1>
        </div>

        <div className="legal-content get-started-content">
          <section className="legal-section">
            <h2>For Users</h2>
            <p>
              Book trusted local service providers in just a few steps. Create an
              account, tell us what you need, and we&apos;ll connect you with the
              right professionals.
            </p>
            <ul>
              <li>Create your user account in under a minute</li>
              <li>Browse providers by category and location</li>
              <li>Send requests and track progress from your dashboard</li>
            </ul>
            <div className="get-started-cta">
            <ul>
              <li>Download the Servisu App and get started today!</li>
            </ul>
              {/* <Link to={ROUTES.REGISTER} className="cta-button primary">
                Join as User
              </Link>
              <Link to={ROUTES.PROVIDERS} className="cta-link">
                Browse services first
              </Link> */}
            </div>
          </section>

          <section className="legal-section">
            <h2>For Service Providers</h2>
            <p>
              Grow your business by reaching nearby customers who are actively
              looking for your services. Set up your profile, define your
              availability, and start receiving requests.
            </p>
            <ul>
              <li>Create a professional provider profile</li>
              <li>Showcase your skills, experience, and service areas</li>
              <li>Accept or reject requests directly from your dashboard</li>
            </ul>
            <div className="get-started-cta">
            <ul>
              <li>Download the Servisu Provider App and get started today!</li>
            </ul>
              {/* <Link to={ROUTES.PROVIDER_REGISTER} className="cta-button secondary">
                Join as Provider
              </Link>
              <Link to={ROUTES.PROVIDER_LOGIN} className="cta-link">
                Already a provider? Sign in
              </Link> */}
            </div>
          </section>

          <section className="legal-section">
            <h2>What Happens Next</h2>
            <p>
              Once you have created your account, you will be able to manage
              everything from a simple dashboard – requests, profile details, and
              account security. You remain in full control of your data and can
              update or delete your account at any time.
            </p>
            <ul>
              <li>Secure authentication for users and providers</li>
              <li>Clear visibility of your active and past requests</li>
              <li>Simple flows for updating your details or closing your account</li>
            </ul>
            <div className="get-started-cta center">
              <Link to={ROUTES.DATA_DELETION} className="cta-link">
                Learn how to delete your data
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default GetStartedPage;

