import React from "react";
import { Link } from "react-router-dom";
import "./LegalPages.css";
import contactInformation from "../../modules/core/components/utils/Utlis";
import { ROUTES } from "../../config/routes";

const ProviderPrivacyPolicyPage = () => {
  return (
    <div className="legal-page">
      <div className="legal-container">
        <div className="legal-header">
          <h1>Privacy Policy for Service Providers (Partners)</h1>
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
              This Privacy Policy governs how we collect, process, and safeguard
              the personal information of independent service providers,
              contractors, and partners (&quot;Provider&quot;, &quot;you&quot;, or
              &quot;your&quot;) who use our platform to market and deliver services
              to clients.
            </p>
          </section>

          <section className="legal-section">
            <h2>1. Information We Collect</h2>
            <p>
              To verify your profile, secure our platform, and facilitate consumer
              bookings, we collect the following personal information in
              compliance with POPIA:
            </p>
            <ul>
              <li>
                <strong>Personal &amp; business identifiable information:</strong>{" "}
                Your full name, email address, mobile phone number, profile
                photograph, and business details (if applicable).
              </li>
              <li>
                <strong>Verification &amp; compliance data:</strong> Your South
                African Identity Number (ID), proof of residence, and any trade
                certifications or licenses required to verify your qualifications
                and background.
              </li>
              <li>
                <strong>Financial information:</strong> Your South African bank
                account details (account name, number, branch code) required to
                process automated weekly or monthly payouts for completed
                services.
              </li>
              <li>
                <strong>Geospatial &amp; location data:</strong> Precise real-time
                GPS coordinates from your mobile device.
              </li>
              <li>
                <strong>Performance metrics:</strong> Service ratings, reviews
                from clients, cancellation rates, and operational transaction
                history on the platform.
              </li>
              <li>
                <strong>Device data:</strong> Device identifiers (iOS or Android
                IDs), IP address, and application performance crash logs.
              </li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>2. Crucial Disclosure: Background Location Tracking</h2>
            <p>
              To effectively dispatch jobs based on where you are right now, the
              Servisu Provider App collects precise location data from your mobile
              device.
            </p>
            <div className="legal-callout" role="note">
              <strong>Background processing:</strong> This location tracking
              occurs both when the app is open and running in the foreground, and
              when the app is closed, running in the background, or not actively
              in use.
            </div>
            <p>We process this background location data strictly to:</p>
            <ul>
              <li>
                Determine your proximity to active user service requests and send
                you nearby jobs.
              </li>
              <li>
                Allow clients to track your estimated arrival time (ETA) once you
                accept a booking.
              </li>
              <li>
                Ensure safety monitoring while you are traveling to or performing
                a service at a client&apos;s location.
              </li>
            </ul>
            <p>
              You can turn off location services at any time via your device
              settings, but doing so will prevent you from receiving new job
              alerts on the platform.
            </p>
          </section>

          <section className="legal-section">
            <h2>3. Lawful Basis and Purpose of Processing</h2>
            <p>
              In terms of Condition 3 of POPIA, your data is processed based on
              the Performance of a Contract (your provider agreement with us) and
              our Legitimate Business Interest in protecting marketplace safety.
              We use this data to:
            </p>
            <ul>
              <li>
                Authenticate your identity and perform necessary background
                vetting checks.
              </li>
              <li>
                Market your services, display your public profile, and connect you
                with matching clients.
              </li>
              <li>
                Calculate distances, route directions, and facilitate accurate
                client billing.
              </li>
              <li>
                Process secure financial payouts directly into your verified bank
                account via our payment partners.
              </li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>4. Information Sharing and Operators</h2>
            <p>
              We only share your information with parties directly involved in
              fulfilling platform transactions:
            </p>
            <ul>
              <li>
                <strong>Platform users (Clients):</strong> Once you accept a
                booking, we share your name, phone number, profile photo, business
                rating, and live GPS location with the client so they can identify
                you and coordinate the service.
              </li>
              <li>
                <strong>Vetting operators:</strong> We may share your ID number
                with accredited third-party background screening services to
                verify your identity and criminal clearance.
              </li>
              <li>
                <strong>Banking and payout gateways:</strong> Your banking
                information is processed securely by our contracted financial
                operators to execute your payouts.
              </li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>5. Cross-Border Data Transfers (Cloud Infrastructure)</h2>
            <p>
              Your data may be stored on secure, encrypted cloud servers hosted
              outside South Africa (such as AWS, Google Cloud, or Microsoft
              Azure). In terms of Section 72 of POPIA, we ensure all global
              infrastructure providers adhere to strict data security frameworks
              equivalent to or stronger than POPIA laws.
            </p>
          </section>

          <section className="legal-section">
            <h2>6. Data Security and Retention Policy</h2>
            <p>
              We use end-to-end encryption and secure database access protocols to
              safeguard your personal data.
            </p>
            <p>
              <strong>Retention:</strong> We retain your account, identity
              verification, and financial history for as long as you maintain an
              active provider profile. If you choose to close your account,
              certain transaction and financial records will be retained for the
              minimum statutory period mandated by the South African Companies Act
              and SARS tax compliance laws.
            </p>
          </section>

          <section className="legal-section">
            <h2>7. Your Legal Rights Under POPIA</h2>
            <p>
              You hold the following rights under POPIA, which you can exercise by
              reaching out to our Information Officer:
            </p>
            <ul>
              <li>
                <strong>Right of access (Section 23):</strong> Request a full
                record of the data we hold regarding your business profile.
              </li>
              <li>
                <strong>Right to correction (Section 24):</strong> Request
                immediate updates to inaccurate financial, contact, or
                verification data.
              </li>
              <li>
                <strong>Right to account deletion:</strong> You can request
                account closure and data deletion via Settings &gt; Profile &gt;
                Delete Provider Account inside the app or through our{" "}
                <Link to={ROUTES.DATA_DELETION}>Delete my account</Link> page.
                Personal identifiers will be permanently scrubbed or anonymized
                within 30 days, subject to legal record-keeping limitations.
              </li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>8. Contact Us &amp; Information Officer Details</h2>
            <p>
              For any privacy queries, or to exercise your POPIA data rights,
              please contact our designated Information Officer:
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
            <h2>9. Complaints to the Information Regulator</h2>
            <p>
              If you believe your personal information has been handled unlawfully
              under POPIA, you have the right to lodge a formal complaint with the
              South African Information Regulator:
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

          <div className="legal-footer">
            <p>Last Updated: {contactInformation.privacyLastUpdate}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProviderPrivacyPolicyPage;
