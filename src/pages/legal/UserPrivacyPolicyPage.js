import React from "react";
import { Link } from "react-router-dom";
import "./LegalPages.css";
import contactInformation from "../../modules/core/components/utils/Utlis";
import { ROUTES } from "../../config/routes";

const UserPrivacyPolicyPage = () => {
  return (
    <div className="legal-page">
      <div className="legal-container">
        <div className="legal-header">
          <h1>Privacy Policy for Users (Clients)</h1>
        </div>

        <div className="legal-content">
          <section className="legal-section">
            <p>
              Servisu Technologies (Pty) Ltd (referred to as &quot;the Company&quot;,
              &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) operates the Servisu
              mobile application and platform. The Company acts as the Responsible
              Party as defined under the Protection of Personal Information Act,
              No. 4 of 2013 (POPIA).
            </p>
            <p>
              This Privacy Policy explains how we collect, use, disclose, and
              protect the personal information of our app users and clients
              (&quot;you&quot; or &quot;your&quot;).
            </p>
          </section>

          <section className="legal-section">
            <h2>1. Information We Collect</h2>
            <p>
              We collect personal information that you provide directly to us when
              you create an account, make a booking, or interact with our
              platform. In terms of POPIA, this includes:
            </p>
            <ul>
              <li>
                <strong>Personal identifiable information:</strong> Your full
                name, email address, and mobile phone number.
              </li>
              <li>
                <strong>Geospatial and address details:</strong> Your saved
                addresses (for example, home or work) and your precise real-time
                GPS coordinates when using location-based matching features.
              </li>
              <li>
                <strong>Service history and preferences:</strong> Information
                regarding the types of services you request, transaction history,
                and booking interactions.
              </li>
              <li>
                <strong>Device and technical information:</strong> Technical
                metadata from your mobile device, including unique device
                identifiers (iOS or Android IDs), IP address, and
                browser/operating system type.
              </li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>2. Lawful Basis and Purpose of Processing</h2>
            <p>
              In compliance with Condition 3 of POPIA, we only collect and process
              personal information for explicit, defined, and lawful purposes
              related to our core platform operations. We process your data based
              on:
            </p>
            <ol>
              <li>
                <strong>Performance of a contract:</strong> To fulfill your
                service bookings and connect you with independent service
                providers.
              </li>
              <li>
                <strong>Your explicit consent:</strong> When you authorize the app
                to access your device&apos;s location services.
              </li>
              <li>
                <strong>Legitimate business interests:</strong> To secure our
                marketplace against fraudulent behavior.
              </li>
            </ol>
            <p>Specifically, your data is used to:</p>
            <ul>
              <li>Verify your profile and maintain your platform account.</li>
              <li>
                Use your real-time location and address details to calculate
                upfront pricing estimates and match you with nearby service
                providers.
              </li>
              <li>
                Route automated system notifications, security updates, and
                transaction confirmations.
              </li>
              <li>
                Facilitate secure electronic payment authorization and processing
                through our integrated payment gateways.
              </li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>3. Information Sharing and Operators</h2>
            <p>
              We do not sell or trade your data. To operate the marketplace, we
              share minimal necessary data with specific third parties, who act as
              Operators under contract with us:
            </p>
            <ul>
              <li>
                <strong>Independent service providers:</strong> We share your
                name, contact number, and the specific service address/location
                with the provider assigned to fulfill your booking.
              </li>
              <li>
                <strong>Regulated payment gateways:</strong> Your payment details
                are transmitted directly via encrypted tokens to our payment
                partners. We do not store raw credit card details on our servers.
              </li>
              <li>
                <strong>Legal obligations:</strong> We may disclose information to
                law enforcement or regulatory bodies if required to do so by South
                African law.
              </li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>4. Cross-Border Data Transfers (Cloud Storage)</h2>
            <p>
              Your personal information may be stored and processed on cloud
              servers located outside the Republic of South Africa (for example,
              utilizing Amazon Web Services, Google Cloud, or Microsoft Azure data
              centers).
            </p>
            <p>
              In terms of Section 72 of POPIA, we ensure that our cloud
              infrastructure providers are bound by strict data privacy agreements
              or operate under jurisdictions that offer an equivalent or higher
              level of data protection than POPIA.
            </p>
          </section>

          <section className="legal-section">
            <h2>5. Data Security and Breach Notifications</h2>
            <p>
              We implement rigorous technical and organizational security measures
              (including end-to-end encryption and secure API access tokens) to
              safeguard your data against unauthorized access, loss, or
              destruction.
            </p>
            <div className="legal-notice" role="note">
              In the unlikely event that our security is compromised and your
              personal information is accessed by an unauthorized party, we are
              legally mandated under Section 22 of POPIA to notify you and the
              South African Information Regulator as soon as reasonably possible.
            </div>
          </section>

          <section className="legal-section">
            <h2>6. Your Legal Rights Under POPIA</h2>
            <p>
              You have clear, actionable rights regarding your data. You may
              exercise these at any time by contacting our Information Officer:
            </p>
            <ul>
              <li>
                <strong>Right of access (Section 23):</strong> You have the right
                to request a copy of the personal information we hold about you.
              </li>
              <li>
                <strong>Right to correction/deletion (Section 24):</strong> You
                have the right to request that we update, correct, or permanently
                delete inaccurate, irrelevant, or excessive personal data.
              </li>
              <li>
                <strong>Right to object (Section 11):</strong> You can object to
                the processing of your data for direct marketing at any time.
              </li>
            </ul>

            <h3>In-app account deletion</h3>
            <p>
              To permanently delete your user profile and all associated data, you
              can go to Settings &gt; Account &gt; Delete Account within the
              Servisu mobile application, or submit a request through our{" "}
              <Link to={ROUTES.DATA_DELETION}>Delete my account</Link> page. Your
              data will be completely purged or irreversibly anonymized within 30
              days.
            </p>
          </section>

          <section className="legal-section">
            <h2>7. Contact Us &amp; Information Officer Details</h2>
            <p>
              For any privacy-related queries, data access requests, or
              corrections, please contact our designated Information Officer:
            </p>
            <div className="contact-details">
              <p>
                <strong>Information Officer:</strong>{" "}
                {contactInformation.informationOfficer}
              </p>
              <p>
                <strong>Company name:</strong> {contactInformation.companyName}
              </p>
              <p>
                <strong>Email:</strong>{" "}
                <a href={`mailto:${contactInformation.adminEmail}`}>
                  {contactInformation.adminEmail}
                </a>
              </p>
              <p>
                <strong>Physical address:</strong> {contactInformation.address}
              </p>
            </div>
          </section>

          <section className="legal-section">
            <h2>8. Complaints to the Information Regulator</h2>
            <p>
              If you believe that we have processed your data in a way that
              violates POPIA, and we have failed to resolve your concern, you have
              the legal right to lodge a formal complaint with the South African
              Information Regulator:
            </p>
            <ul>
              <li>
                <strong>Website:</strong>{" "}
                <a
                  href="https://inforegulator.org.za"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  inforegulator.org.za
                </a>
              </li>
              <li>
                <strong>Email:</strong>{" "}
                <a href="mailto:complaints.IR@inforegulator.org.za">
                  complaints.IR@inforegulator.org.za
                </a>
              </li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>9. Changes to This Policy</h2>
            <p>
              We review this policy periodically to align with technical
              modifications or evolving local laws. Any updates will be published
              on this page and reflected in the application.
            </p>
          </section>

          <div className="legal-footer">
            <p>Last Updated: {contactInformation.privacyLastUpdate}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPrivacyPolicyPage;
