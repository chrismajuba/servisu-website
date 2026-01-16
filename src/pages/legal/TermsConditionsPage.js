import React from "react";
import "./LegalPages.css";
import contactInformation from "../../modules/core/components/utils/Utlis";

const TermsConditionsPage = () => {
  return (
    <div className="legal-page">
      <div className="legal-container">
        <div className="legal-header">
          <h1>Terms & Conditions</h1>
        </div>

        <div className="legal-content">
          <section className="legal-section">
            <h2>1. Introduction</h2>
            <p>
              These Terms & Conditions govern your use of the Servisu platform,
              including the mobile applications, websites, and services that
              connect customers with local service providers. By creating an
              account or making a booking, you agree to these Terms.
            </p>
          </section>

          <section className="legal-section">
            <h2>2. Eligibility & Account Responsibilities</h2>
            <p>
              You must be at least 18 years old and able to enter into legally
              binding contracts. You agree to provide accurate information, keep
              your account secure, and promptly update any changes to your contact
              details.
            </p>
          </section>

          <section className="legal-section">
            <h2>3. Service Bookings</h2>
            <p>
              Bookings are requests subject to acceptance by service providers. We
              do not guarantee availability or completion of any service. You are
              responsible for reviewing booking details, including pricing,
              service scope, and cancellation terms.
            </p>
          </section>

          <section className="legal-section">
            <h2>4. Payments & Fees</h2>
            <p>
              All fees must be paid in accordance with the pricing displayed at
              the time of booking. Additional charges may apply for extended work,
              travel, or materials. Late payments, chargebacks, or fraudulent
              activity may result in suspension or termination of your account.
            </p>
          </section>

          <section className="legal-section">
            <h2>5. Cancellations & Refunds</h2>
            <p>
              Cancellation policies vary by service provider. Please review the
              policy before confirming your booking. Refunds, when applicable, are
              processed according to the service provider's policy and may be
              subject to processing fees.
            </p>
          </section>

          <section className="legal-section">
            <h2>6. User Conduct</h2>
            <p>
              You agree to treat service providers with respect, provide safe
              working conditions, and comply with all applicable laws. Any
              abusive, discriminatory, or illegal behavior may lead to immediate
              suspension.
            </p>
          </section>

          <section className="legal-section">
            <h2>7. Service Provider Obligations</h2>
            <p>
              Service providers are independent contractors, not employees or
              agents of Servisu. Each provider is responsible for their own
              licensing, insurance, pricing, and service delivery.
            </p>
          </section>

          <section className="legal-section">
            <h2>8. Limitation of Liability</h2>
            <p>
              Servisu acts as a platform to facilitate bookings between users and
              providers. We are not liable for any direct, indirect, incidental,
              or consequential damages arising from your use of the platform or
              services received.
            </p>
          </section>

          <section className="legal-section">
            <h2>9. Disputes</h2>
            <p>
              We encourage users and providers to resolve disputes directly. If
              additional assistance is needed, contact us using the details below
              and we will review the matter. Servisu reserves the right to make a
              final determination on platform access.
            </p>
          </section>

          <section className="legal-section">
            <h2>10. Changes to Terms</h2>
            <p>
              We may update these Terms from time to time. Continued use of the
              platform after changes become effective constitutes acceptance of
              the revised Terms.
            </p>
          </section>

          <section className="legal-section">
            <h2>Contact Us</h2>
            <p>
              If you have any questions about these Terms & Conditions, please
              reach out to us:
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

          <div className="legal-footer">
            <p>Last Updated: {contactInformation.termsLastUpdate}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsConditionsPage;

