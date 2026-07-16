import React, { useState } from "react";
import {
  requestUserAccountDeletion,
  confirmUserAccountDeletion,
  requestProviderAccountDeletion,
  confirmProviderAccountDeletion,
} from "../../modules/services/api/WeServeService";
import "./DataDeletionPage.css";
import "./LegalPages.css";
import contactInformation from "../../modules/core/components/utils/Utlis";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const GENERIC_REQUEST_MESSAGE =
  "If an account exists for this email, a verification code has been sent. Please check your inbox.";

const CONFIRM_SUCCESS_MESSAGE =
  "Your account has been scheduled for deletion and will be removed within 30 days.";

const INVALID_CODE_MESSAGE =
  "Invalid or expired verification code. Request a new one.";

const GENERIC_ERROR_MESSAGE = "Something went wrong. Please try again.";

const DataDeletionPage = () => {
  const [step, setStep] = useState("request");
  const [accountType, setAccountType] = useState("user");
  const [email, setEmail] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [emailError, setEmailError] = useState("");
  const [codeError, setCodeError] = useState("");
  const [formError, setFormError] = useState("");
  const [requestMessage, setRequestMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (value) => {
    if (!value.trim()) {
      return "Please enter your email address.";
    }
    if (!EMAIL_REGEX.test(value.trim())) {
      return "Please enter a valid email address.";
    }
    return "";
  };

  const requestDeletion = async () => {
    if (accountType === "provider") {
      return requestProviderAccountDeletion(email.trim());
    }
    return requestUserAccountDeletion(email.trim());
  };

  const confirmDeletion = async () => {
    if (accountType === "provider") {
      return confirmProviderAccountDeletion(
        email.trim(),
        verificationCode.trim()
      );
    }
    return confirmUserAccountDeletion(email.trim(), verificationCode.trim());
  };

  const handleRequestCode = async (e) => {
    e.preventDefault();
    setFormError("");
    setCodeError("");

    const validationError = validateEmail(email);
    if (validationError) {
      setEmailError(validationError);
      return;
    }
    setEmailError("");
    setIsSubmitting(true);

    try {
      const response = await requestDeletion();
      setRequestMessage(response?.data?.message || GENERIC_REQUEST_MESSAGE);
      setStep("confirm");
    } catch (error) {
      setFormError(GENERIC_ERROR_MESSAGE);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleConfirmDeletion = async (e) => {
    e.preventDefault();
    setFormError("");
    setCodeError("");

    if (!verificationCode.trim()) {
      setCodeError("Please enter the verification code from your email.");
      return;
    }

    setIsSubmitting(true);

    try {
      await confirmDeletion();
      setStep("done");
    } catch (error) {
      if (error.response?.status === 400) {
        setCodeError(INVALID_CODE_MESSAGE);
      } else {
        setFormError(GENERIC_ERROR_MESSAGE);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResendCode = async () => {
    setFormError("");
    setCodeError("");
    setVerificationCode("");
    setIsSubmitting(true);

    try {
      const response = await requestDeletion();
      setRequestMessage(response?.data?.message || GENERIC_REQUEST_MESSAGE);
    } catch (error) {
      setFormError(GENERIC_ERROR_MESSAGE);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (step === "done") {
    return (
      <div className="legal-page">
        <div className="legal-container">
          <div className="success-message" role="status">
            <div className="success-icon" aria-hidden="true" />
            <h1>Account deletion scheduled</h1>
            <p>{CONFIRM_SUCCESS_MESSAGE}</p>
            <p>
              You will be signed out of all sessions. If you change your mind,
              contact us before the deletion is completed.
            </p>
            <p className="legal-footer">
              Need help?{" "}
              <a href={`mailto:${contactInformation.email}`}>
                {contactInformation.email}
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="legal-page">
      <div className="legal-container">
        <div className="legal-header">
          <h1>Delete my account</h1>
        </div>

        <div className="legal-content">
          <p className="intro-text">
            Request a verification code by email, then confirm to schedule
            permanent account deletion. This page works without signing in.
          </p>

          <ul className="deletion-summary" aria-label="What to expect">
            <li>A verification email will be sent to the address you provide</li>
            <li>
              After confirmation, your account is scheduled for deletion within
              30 days
            </li>
            <li>All sessions will be signed out</li>
          </ul>

          {step === "request" && (
            <form
              className="deletion-form"
              onSubmit={handleRequestCode}
              noValidate
            >
              <h2>Request deletion</h2>

              <fieldset className="form-group account-type-group">
                <legend>Account type</legend>
                <div
                  className="account-type-toggle"
                  role="radiogroup"
                  aria-label="Account type"
                >
                  <label
                    className={`account-type-option ${
                      accountType === "user" ? "selected" : ""
                    }`}
                  >
                    <input
                      type="radio"
                      name="accountType"
                      value="user"
                      checked={accountType === "user"}
                      onChange={() => setAccountType("user")}
                      disabled={isSubmitting}
                    />
                    Client (User)
                  </label>
                  <label
                    className={`account-type-option ${
                      accountType === "provider" ? "selected" : ""
                    }`}
                  >
                    <input
                      type="radio"
                      name="accountType"
                      value="provider"
                      checked={accountType === "provider"}
                      onChange={() => setAccountType("provider")}
                      disabled={isSubmitting}
                    />
                    Service Provider
                  </label>
                </div>
              </fieldset>

              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (emailError) setEmailError("");
                  }}
                  placeholder="Enter your account email"
                  autoComplete="email"
                  aria-invalid={!!emailError}
                  aria-describedby={emailError ? "email-error" : undefined}
                  disabled={isSubmitting}
                  required
                />
                {emailError && (
                  <p id="email-error" className="field-error" role="alert">
                    {emailError}
                  </p>
                )}
              </div>

              {formError && (
                <p className="form-error" role="alert">
                  {formError}
                </p>
              )}

              <button
                type="submit"
                className="delete-button"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="spinner" aria-hidden="true" />
                    Sending code...
                  </>
                ) : (
                  "Request code"
                )}
              </button>
            </form>
          )}

          {step === "confirm" && (
            <form
              className="deletion-form"
              onSubmit={handleConfirmDeletion}
              noValidate
            >
              <h2>Confirm deletion</h2>

              <p className="request-success" role="status">
                {requestMessage || GENERIC_REQUEST_MESSAGE}
              </p>

              <div className="form-group">
                <label htmlFor="email-readonly">Email address</label>
                <input
                  type="email"
                  id="email-readonly"
                  value={email}
                  readOnly
                  disabled
                />
              </div>

              <div className="form-group">
                <label htmlFor="verificationCode">Verification code</label>
                <input
                  type="text"
                  id="verificationCode"
                  name="verificationCode"
                  value={verificationCode}
                  onChange={(e) => {
                    setVerificationCode(e.target.value);
                    if (codeError) setCodeError("");
                  }}
                  placeholder="Enter the code from your email"
                  inputMode="numeric"
                  autoComplete="one-time-code"
                  aria-invalid={!!codeError}
                  aria-describedby={codeError ? "code-error" : undefined}
                  disabled={isSubmitting}
                  required
                />
                {codeError && (
                  <p id="code-error" className="field-error" role="alert">
                    {codeError}
                  </p>
                )}
              </div>

              {formError && (
                <p className="form-error" role="alert">
                  {formError}
                </p>
              )}

              <button
                type="submit"
                className="delete-button"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="spinner" aria-hidden="true" />
                    Confirming...
                  </>
                ) : (
                  "Confirm deletion"
                )}
              </button>

              <button
                type="button"
                className="secondary-button"
                onClick={handleResendCode}
                disabled={isSubmitting}
              >
                Request a new code
              </button>
            </form>
          )}

          <div className="legal-footer">
            <p>
              Need help? Contact us at{" "}
              <a href={`mailto:${contactInformation.email}`}>
                {contactInformation.email}
              </a>
            </p>
            <p>
              This process complies with POPIA and applicable app store account
              deletion requirements.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataDeletionPage;
