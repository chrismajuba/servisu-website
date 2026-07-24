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
            <h2>1. Introduction and Platform Nature</h2>
            <p>
              These Terms and Conditions govern your access to and use of the
              Servisu mobile application, website, and digital matching software.
            </p>
            <div className="legal-callout" role="note">
              <strong>Critical venue disclosure:</strong> Servisu is purely an
              online technology platform. We do not provide plumbing, gardening,
              car washing, or any other manual services ourselves. Our
              application functions strictly as an intermediary infrastructure
              that connects independent customers (&quot;Clients&quot;) with
              independent third-party service providers (&quot;Providers&quot;).
            </div>
          </section>

          <section className="legal-section">
            <h2>2. Eligibility &amp; Account Responsibilities</h2>
            <p>By creating an account on the platform, you warrant that:</p>
            <ul>
              <li>
                You are at least 18 years of age and hold the legal capacity to
                enter into a binding contract in the Republic of South Africa.
              </li>
              <li>
                All registration data you provide is accurate, current, and true.
              </li>
              <li>
                You are entirely responsible for maintaining the confidentiality
                of your login credentials and for all activities that occur under
                your account.
              </li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>3. Service Bookings &amp; Allocation</h2>
            <p>
              A booking submitted by a Client constitutes an offer for service,
              which is subject to voluntary acceptance by an independent Provider.
            </p>
            <ul>
              <li>
                Servisu does not guarantee that a booking request will be accepted
                by a Provider, nor do we guarantee provider availability.
              </li>
              <li>
                Once a booking is accepted, a direct contract is created between
                the Client and the Provider. Servisu is not a party to that
                operational service contract.
              </li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>4. Payments, Fees, and Immediate Capture</h2>
            <p>
              All payments for services booked via the application must be
              processed through our integrated, secure payment gateway
              infrastructure.
            </p>
            <ul>
              <li>
                <strong>Payment trigger:</strong> When a Client submits a service
                request, no funds are deducted. The payment requirement is only
                triggered once an independent Provider formally accepts the
                request.
              </li>
              <li>
                <strong>Immediate capture:</strong> Upon provider acceptance, the
                full service fee is debited and captured immediately from the
                Client&apos;s linked card or account. This secure payment confirms
                the booking and authorizes the Provider to proceed to the job.
              </li>
            </ul>

            <h3>Ancillary costs &amp; scope changes (off-platform arrangements)</h3>
            <p>
              Any extra costs for unforeseen materials, specialized equipment,
              extended travel, or changes to the physical scope of work must be
              mutually agreed upon directly between the Client and the Provider.
            </p>
            <div className="legal-notice" role="note">
              <strong>Important notice:</strong> The Servisu platform currently
              only facilitates and processes the single primary transaction
              generated upon booking acceptance. The platform does not possess the
              infrastructure to process secondary or add-on digital payments.
            </div>
            <p>
              Consequently, any ancillary costs or adjusted fees must be settled
              directly between the Client and the Provider outside of the
              application (for example, via physical cash or private electronic
              funds transfer). All such off-platform transactions are conducted
              entirely at the parties&apos; own risk. Servisu does not track,
              verify, or secure offline payments, and assumes absolute zero
              liability for any financial disputes, losses, or failed cash/EFT
              transactions occurring outside the software.
            </p>
          </section>

          <section className="legal-section">
            <h2>5. Cancellations and Full Refund Policy</h2>
            <p>
              Servisu protects your funds if a booking falls through. A full
              refund of the captured service fee will be processed back to the
              Client under the following explicit conditions:
            </p>
            <ul>
              <li>
                <strong>Eligible user cancellation:</strong> The Client cancels
                the booking within the platform&apos;s specified flexible
                cancellation window (for example, before the Provider has
                dispatched or within the app&apos;s designated time frame).
              </li>
              <li>
                <strong>Provider default (no-show):</strong> The assigned Provider
                misses the scheduled service date/time, fails to arrive, or
                defaults on the accepted request.
              </li>
              <li>
                <strong>Banking processing delays:</strong> Once a full refund is
                triggered by our backend engine, the funds are reversed
                immediately via our payment gateway.
              </li>
            </ul>
            <div className="legal-notice" role="note">
              <strong>Important notice:</strong> In compliance with South African
              banking networks, processed refunds can take between 3 to 7 business
              days to clear and reflect in your bank account balance. Servisu has
              no control over these interbank clearing windows.
            </div>
          </section>

          <section className="legal-section">
            <h2>6. Independent Contractor Status (No Employment Relationship)</h2>
            <p>
              It is explicitly agreed and understood that all Service Providers
              operating on the Servisu platform are Independent Contractors
              operating as separate businesses.
            </p>
            <ul>
              <li>
                Providers are not employees, agents, or representatives of
                Servisu.
              </li>
              <li>
                There is no employment relationship created under the South
                African Labour Relations Act (LRA) or the Basic Conditions of
                Employment Act (BCEA).
              </li>
              <li>
                Providers retain absolute discretion over their working hours,
                methods, clothing, and whether to accept or decline platform job
                alerts. Each Provider is solely responsible for their own tax
                compliance (Income Tax/VAT), public liability insurance, and trade
                certifications.
              </li>
            </ul>
          </section>

          <section className="legal-section legal-disclaimer" id="limitation-of-liability">
            <h2>7. Consumer Protection Act Section 49 Legal Disclaimer</h2>
            <p className="legal-disclaimer-lead">
              Please read this section carefully. By accepting these Terms, you
              explicitly assume risk and waive specific legal rights against
              Servisu.
            </p>
            <p>
              <strong>Limitation of liability &amp; indemnity:</strong> To the
              maximum extent permitted under Section 49 of the Consumer Protection
              Act (CPA), Servisu shall not be liable for any direct, indirect,
              incidental, special, or consequential damages, losses, or
              liabilities incurred by any user (Client or Provider).
            </p>
            <p>This exclusion includes, but is not limited to:</p>
            <ol>
              <li>
                Property damage, theft, or personal injury caused by the
                negligence, malfeasance, or conduct of an independent Service
                Provider during a booking.
              </li>
              <li>Poor workmanship or unfulfilled service expectations.</li>
              <li>
                Financial losses arising from system downtime, payment gateway
                timeouts, or transactions independently settled in cash outside
                the application.
              </li>
            </ol>
            <p>
              You hereby indemnify and hold Servisu harmless against any claims,
              damages, costs, or legal fees arising directly or indirectly from
              your interactions, agreements, and transactions entered into via the
              marketplace venue.
            </p>
          </section>

          <section className="legal-section">
            <h2>8. Platform Misuse and User Conduct</h2>
            <p>
              Abusive, discriminatory, unsafe, or fraudulent behavior by either a
              Client or a Provider will not be tolerated. Servisu reserves the
              immediate right to suspend, freeze, or permanently terminate any
              account that violates local criminal statutes, demeans other users,
              or initiates fraudulent chargebacks on payment systems.
            </p>
          </section>

          <section className="legal-section">
            <h2>9. Dispute Resolution &amp; Governing Law</h2>
            <ul>
              <li>
                <strong>Initial resolution:</strong> If a dispute arises between a
                Client and a Provider regarding service delivery, users must first
                attempt to resolve the issue directly using our in-app dispute
                reporting portal.
              </li>
              <li>
                <strong>Platform intervention:</strong> Servisu may investigate
                the complaint and look at internal telemetry, logs, and messaging
                metadata to issue a final administrative determination regarding
                platform access or payment adjustments.
              </li>
              <li>
                <strong>Jurisdiction:</strong> These terms are governed entirely
                by the laws of the Republic of South Africa. Any legal proceedings
                must be initiated within the jurisdiction of the courts of South
                Africa.
              </li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>10. Modifications to Terms</h2>
            <p>
              We reserve the right to amend these Terms and Conditions at any
              point to account for feature releases, security patches, or
              legislative shifts. Changes will be updated publicly on this page.
              Your continued interaction with the app after an update serves as
              your legal acceptance of the new framework.
            </p>
          </section>

          <section className="legal-section">
            <h2>Contact Us</h2>
            <p>
              For legal queries or formal notices, please reach out to us at:
            </p>
            <div className="contact-details">
              <p>
                <strong>Company:</strong> Servisu Technologies (Pty) Ltd
              </p>
              <p>
                <strong>Registration number:</strong> 2026/503669/07
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

          <div className="legal-footer">
            <p>Last Updated: {contactInformation.termsLastUpdate}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsConditionsPage;
