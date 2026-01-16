import React from "react";
import "./LegalPages.css";
import contactInformation from "../../modules/core/components/utils/Utlis";

const ProviderPrivacyPolicyPage = () => {
  return (
    <div className="legal-page">
      <div className="legal-container">
        <div className="legal-header">
          <h1>Privacy Policy - For Service Providers</h1>
        </div>

        <div className="legal-content">
          <section className="legal-section">
            <h2>Information We Collect</h2>
            <p>
              We collect information you provide directly to us, such as when you
              create an account, provide a service or contact us for support. This
              may include:
            </p>
            <ul>
              <li>
                <strong>Personal Information:</strong> Your name, email address,
                phone number, and other contact information
              </li>
              <li>
                <strong>Address Details:</strong> Your home address, work address,
                and other location information you provide
              </li>
              <li>
                <strong>Location Data:</strong> GPS coordinates and location
                details when you provide services to our users or use
                location-based features
              </li>
              <li>
                <strong>Service Management:</strong> Information about the
                services you provide and how you manage them
              </li>
              <li>
                <strong>Device Information:</strong> Information about your
                device, including device identifiers (iOS or Android)
              </li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide and maintain our service booking platform</li>
              <li>Market your services and connect you with clients (users)</li>
              <li>
                Use your address and location data to match you with nearby users
                and ensure accurate service delivery
              </li>
              <li>Send you technical notices, updates, and support messages</li>
              <li>
                Communicate with you about services, bookings, and promotional
                offers
              </li>
              <li>Improve our services and develop new features</li>
              <li>Ensure the safety and security of our platform</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>Information Sharing</h2>
            <p>
              We do not sell, trade, or otherwise transfer your personal
              information to third parties without your consent, except as
              described below:
            </p>
            <ul>
              <li>
                <strong>Users:</strong> We may share your contact information,
                address, and location data with users who will request your
                services. This information is shared only to the extent necessary
                to complete the requested service.
              </li>
              <li>
                <strong>Legal Requirements:</strong> We may disclose your
                information if required by law or to protect our rights, property,
                or safety, or that of our users.
              </li>
              <li>
                <strong>Business Transfers:</strong> In the event of a merger,
                acquisition, or sale of assets, your information may be
                transferred as part of that transaction.
              </li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>Data Security</h2>
            <p>
              We implement appropriate security measures to protect your personal
              information against unauthorized access, alteration, disclosure, or
              destruction. However, no method of transmission over the internet is
              100% secure.
            </p>
          </section>

          <section className="legal-section">
            <h2>Your Rights</h2>
            <p>
              You have the right to access, update, or delete your personal
              information. You may also opt out of certain communications from us.
              To exercise these rights, please contact us using the information
              provided below.
            </p>
          </section>

          <section className="legal-section">
            <h2>Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact
              us at:
            </p>
            <div className="contact-details">
              <p>
                <strong>Email:</strong> {contactInformation.email}
              </p>
              <p>
                <strong>Phone:</strong> {contactInformation.number}
              </p>
              <p>
                <strong>Address:</strong> {contactInformation.address}
              </p>
            </div>
          </section>

          <section className="legal-section">
            <h2>Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify
              you of any changes by posting the new Privacy Policy on this page
              and updating the "Last Updated" date.
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

export default ProviderPrivacyPolicyPage;

