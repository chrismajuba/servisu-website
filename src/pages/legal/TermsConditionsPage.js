import React from "react";
import "./LegalPages.css";
import contactInformation from "../../modules/core/components/utils/Utlis";

const TermsConditionsPage = () => {
  return (
    <div className="legal-page">
      <div className="legal-container">
        <div className="legal-header">
          <h1>Terms &amp; Conditions of Use</h1>
        </div>

        <div className="legal-content">
          <section className="legal-section">
            <p>
              These Terms and Conditions constitute a legally binding agreement
              between you (whether as a Client or a Service Provider) and Servisu
              Technologies (Pty) Ltd, registration number 2026/503669/07
              (hereinafter referred to as &quot;the Company&quot;, &quot;Servisu&quot;,
              &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;).
            </p>
          </section>

          <section className="legal-section">
            <h2>1. Introduction, Platform Nature, and Merchant of Record</h2>
            <p>
              <strong>1.1 Platform nature:</strong> Servisu operates an online
              technology platform connecting independent consumers
              (&quot;Clients&quot;) seeking manual or home services with independent
              third-party service providers (&quot;Providers&quot;). Servisu provides
              software infrastructure and does not directly perform plumbing,
              electrical, gardening, or manual services.
            </p>
            <p>
              <strong>1.2 Merchant of Record:</strong> For all electronic payments
              processed through the Servisu mobile application or website, Servisu
              Technologies (Pty) Ltd acts as the{" "}
              <strong>Merchant of Record (MoR)</strong>. Servisu is responsible for
              payment collection, transaction processing, customer payment support,
              chargeback administration, and issuing refunds directly to Clients in
              accordance with these Terms.
            </p>
          </section>

          <section className="legal-section">
            <h2>2. Eligibility, Provider Vetting, and FICA Compliance</h2>
            <p>
              <strong>2.1 General eligibility:</strong> By creating an account, you
              warrant that you are at least 18 years of age and hold full legal
              capacity in the Republic of South Africa.
            </p>
            <p>
              <strong>2.2 Provider verification &amp; KYC/FICA:</strong> Prior to
              accepting bookings or receiving any payout disbursements, all
              Providers must complete Servisu&apos;s mandatory verification
              process. This includes providing valid South African identity
              documentation, proof of residential address, trade certifications
              (where applicable), and verified South African banking details
              registered in the Provider&apos;s legal name. Servisu reserves the
              right to withhold platform access or payouts to any unverified
              account.
            </p>
          </section>

          <section className="legal-section">
            <h2>3. Bookings, Payment Authorization, and Fund Collection</h2>
            <p>
              <strong>3.1 Booking acceptance:</strong> A booking request submitted
              by a Client constitutes an offer for service, which becomes binding
              upon voluntary acceptance by an independent Provider.
            </p>
            <p>
              <strong>3.2 Payment trigger &amp; capture:</strong> Upon Provider
              acceptance, the total agreed booking fee is debited from the
              Client&apos;s linked payment method via our integrated payment
              gateway. All payments are collected directly by Servisu Technologies
              (Pty) Ltd as Merchant of Record.
            </p>
            <p>
              <strong>3.3 Custody of funds:</strong> Funds collected from Clients
              are safely held within Servisu&apos;s merchant account structure
              until the underlying service is successfully completed, subject to
              the bi-weekly payout schedule outlined in Section 4.
            </p>
          </section>

          <section className="legal-section">
            <h2>4. Service Provider Payouts and Disbursements</h2>
            <p>
              <strong>4.1 Payout schedule:</strong> Earnings derived from completed
              and verified bookings are disbursed to Providers on a bi-weekly
              schedule (every second Sunday) directly into their verified South
              African bank accounts via automated electronic funds transfer (EFT).
            </p>
            <p>
              <strong>4.2 Platform service fee:</strong> Servisu deducts a
              pre-disclosed platform commission from the gross booking amount prior
              to executing the bi-weekly payout to the Provider.
            </p>
            <p>
              <strong>4.3 Dispute holds:</strong> Servisu reserves the right to
              suspend or delay payout disbursements to a Provider for any booking
              that is subject to an active Client complaint, non-delivery report,
              or chargeback investigation.
            </p>
          </section>

          <section className="legal-section">
            <h2>5. In-App Scope Adjustments and Payments Security</h2>
            <p>
              <strong>5.1 Platform transaction security:</strong> To protect both
              Clients and Providers, all financial transactions related to a
              booking—including initial service fees, extra labor hours, or agreed
              material costs—must be authorized and processed exclusively through
              the Servisu Application payment gateway.
            </p>
            <div className="legal-notice" role="note">
              <strong>5.2 Prohibition of unmonitored cash transactions:</strong>{" "}
              Servisu explicitly prohibits off-platform cash transactions for core
              booking fees. Payments made outside the Application circumvent
              platform dispute protection, void Servisu&apos;s refund guarantee,
              and violate these Terms of Use.
            </div>
          </section>

          <section className="legal-section">
            <h2>6. Cancellation and Refund Policy</h2>
            <p>
              Servisu guarantees Client fund protection under the following
              explicit conditions:
            </p>
            <p>
              <strong>6.1 Eligible Client cancellations:</strong> If a Client
              cancels a booking within the allowable flexible cancellation window
              specified in the app prior to Provider dispatch, a full refund will
              be processed back to the original payment method.
            </p>
            <p>
              <strong>6.2 Provider default / no-show:</strong> If an assigned
              Provider fails to arrive or defaults on an accepted job, Servisu will
              immediately issue a full refund of the captured booking fee.
            </p>
            <p>
              <strong>6.3 Processing windows:</strong> All approved refunds are
              initiated immediately by Servisu via our payment gateway provider.
              Standard interbank clearing times in South Africa typically range
              from 3 to 7 business days for refunded amounts to reflect in the
              Client&apos;s bank account.
            </p>
          </section>

          <section className="legal-section">
            <h2>7. Independent Contractor Status</h2>
            <p>
              <strong>7.1 No employment relationship:</strong> Service Providers
              operating on the Servisu platform are independent contractors.
              Nothing in these Terms creates an employer-employee relationship
              under the South African Labour Relations Act (LRA) or Basic
              Conditions of Employment Act (BCEA).
            </p>
            <p>
              <strong>7.2 Provider autonomy &amp; tax liability:</strong> Providers
              retain full autonomy over their working hours and job acceptance.
              Each Provider is solely responsible for their own tax compliance
              (SARS Income Tax/VAT), public liability insurance, and tools of
              trade.
            </p>
          </section>

          <section
            className="legal-section legal-disclaimer"
            id="limitation-of-liability"
          >
            <h2>8. Consumer Protection Act (CPA Section 49) Legal Disclaimer</h2>
            <p className="legal-disclaimer-lead">
              Please read this section carefully. By accepting these Terms, you
              explicitly acknowledge the allocation of risk below.
            </p>
            <p>
              <strong>8.1 Limitation of operational liability:</strong> To the
              maximum extent permitted under Section 49 of the Consumer Protection
              Act (CPA), Servisu&apos;s operational liability is limited strictly
              to the administration of the software platform and payment
              processing as Merchant of Record.
            </p>
            <p>
              <strong>8.2 Exclusion of direct workmanship claims:</strong> Servisu
              shall not be liable for direct property damage, personal injury, or
              poor workmanship caused by the independent conduct or negligence of
              a Provider during a booking. However, Servisu will actively mediate
              disputes and facilitate payment adjustments or refunds where service
              non-delivery or gross negligence is established.
            </p>
            <p>
              <strong>8.3 Indemnity:</strong> Users agree to indemnify and hold
              Servisu harmless against claims, damages, or costs arising from
              off-platform agreements made in violation of Section 5.2.
            </p>
          </section>

          <section className="legal-section">
            <h2>9. User Conduct, Anti-Fraud, and Chargebacks</h2>
            <p>
              <strong>9.1 Account suspension:</strong> Servisu maintains a
              zero-tolerance policy for fraudulent booking activities, abusive
              behavior, or frivolous payment chargebacks. Accounts found engaging
              in illegal acts or payment manipulation will be permanently
              terminated.
            </p>
            <p>
              <strong>9.2 Chargeback dispute rights:</strong> As the Merchant of
              Record, Servisu reserves the right to submit platform telemetry
              logs, GPS check-ins, and in-app communication logs to banking
              institutions to defend against unauthorized or fraudulent chargeback
              claims filed by Clients.
            </p>
          </section>

          <section className="legal-section">
            <h2>10. Governing Law and Jurisdiction</h2>
            <p>
              These Terms are governed entirely by the laws of the Republic of
              South Africa. Any legal disputes arising under these Terms shall be
              subject to the jurisdiction of the competent courts of South Africa.
            </p>
          </section>

          <section className="legal-section">
            <h2>Contact Us</h2>
            <div className="contact-details">
              <p>
                <strong>Company:</strong> {contactInformation.companyName}
              </p>
              <p>
                <strong>Registration number:</strong>{" "}
                {contactInformation.companyRegistration}
              </p>
              <p>
                <strong>Email:</strong>{" "}
                <a href={`mailto:${contactInformation.adminEmail}`}>
                  {contactInformation.adminEmail}
                </a>
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
