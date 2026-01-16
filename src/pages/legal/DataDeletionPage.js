import React, { useState } from "react";
import {
  requestAdminToDeleteUserAccount,
  requestAdminToDeleteProviderAccount,
} from "../../modules/services/api/WeServeService";
import "./DataDeletionPage.css";
import "./LegalPages.css";
import contactInformation from "../../modules/core/components/utils/Utlis";

const DataDeletionPage = () => {
  const [formData, setFormData] = useState({
    accountType: "",
    email: "",
    reason: "",
    otherReason: "",
    confirmDelete: false,
    confirmUnderstand: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const deletionReasons = [
    { value: "", label: "Select a reason..." },
    { value: "no_longer_needed", label: "I no longer need this service" },
    { value: "privacy_concerns", label: "Privacy concerns" },
    { value: "switching_service", label: "Switching to another service" },
    { value: "too_many_emails", label: "Receiving too many emails" },
    { value: "difficult_to_use", label: "Service is difficult to use" },
    { value: "other", label: "Other reason" },
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.accountType) {
      alert("Please select an account type.");
      return;
    }
    
    if (!formData.confirmDelete || !formData.confirmUnderstand) {
      alert("Please confirm both checkboxes to proceed.");
      return;
    }

    setIsSubmitting(true);
    
    try {
      if (formData.accountType === "provider") {
        await requestAdminToDeleteProviderAccount(formData.email);
      } else {
        await requestAdminToDeleteUserAccount(formData.email);
      }
      setSubmitted(true);
    } catch (error) {
      alert(error.response?.data?.errorMessage || "Failed to submit request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="legal-page">
        <div className="legal-container">
          <div className="success-message">
            <div className="success-icon"></div>
            <h2>Request Submitted</h2>
            <p>
              Your data deletion request has been received. We will process your
              request within 30 days and send a confirmation to your email.
            </p>
            <p className="reference-note">
              Reference: #{Date.now().toString(36).toUpperCase()}
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
          <h1>Data Deletion & Account Closure</h1>
        </div>

        <div className="legal-content">
          <p className="intro-text">
            We're sorry to see you go. Please review the information below before
            submitting your request.
          </p>

          <div className="deletion-info-cards">
            <div className="info-card warning">
              <div className="info-content">
                <h3>What happens when you delete your account?</h3>
                <ul>
                  <li>All your personal data will be permanently deleted</li>
                  <li>Your account cannot be recovered after deletion</li>
                  <li>Any active service requests will be cancelled</li>
                  <li>Your reviews and ratings will be anonymized</li>
                </ul>
              </div>
            </div>

            <div className="info-card">
              <div className="info-content">
                <h3>Data we will delete</h3>
                <ul>
                  <li>Personal information (name, email, phone)</li>
                  <li>Profile data and preferences</li>
                  <li>Service request history</li>
                  <li>Payment information (if stored)</li>
                </ul>
              </div>
            </div>

            <div className="info-card">
              <div className="info-content">
                <h3>Processing time</h3>
                <p>
                  Your request will be processed within <strong>30 days</strong>.
                  You will receive a confirmation email once your data has been
                  deleted.
                </p>
              </div>
            </div>
          </div>

        <form className="deletion-form" onSubmit={handleSubmit}>
          <h2>Submit Deletion Request</h2>

          <div className="form-group">
            <label htmlFor="accountType">Account Type *</label>
            <select
              id="accountType"
              name="accountType"
              value={formData.accountType}
              onChange={handleInputChange}
              required
            >
              <option value="">Select account type...</option>
              <option value="user">User Account</option>
              <option value="provider">Service Provider Account</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your account email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="reason">Reason for leaving *</label>
            <select
              id="reason"
              name="reason"
              value={formData.reason}
              onChange={handleInputChange}
              required
            >
              {deletionReasons.map((reason) => (
                <option key={reason.value} value={reason.value}>
                  {reason.label}
                </option>
              ))}
            </select>
          </div>

          {formData.reason === "other" && (
            <div className="form-group">
              <label htmlFor="otherReason">Please specify</label>
              <textarea
                id="otherReason"
                name="otherReason"
                value={formData.otherReason}
                onChange={handleInputChange}
                placeholder="Tell us more about your reason..."
                rows={3}
              />
            </div>
          )}

          <div className="form-group checkbox-group">
            <label className="checkbox-label">
              <input
                type="checkbox"
                name="confirmDelete"
                checked={formData.confirmDelete}
                onChange={handleInputChange}
                required
              />
              <span className="checkmark"></span>
              <span>
                I understand that my account and all associated data will be
                permanently deleted and cannot be recovered.
              </span>
            </label>
          </div>

          <div className="form-group checkbox-group">
            <label className="checkbox-label">
              <input
                type="checkbox"
                name="confirmUnderstand"
                checked={formData.confirmUnderstand}
                onChange={handleInputChange}
                required
              />
              <span className="checkmark"></span>
              <span>
                I confirm that I want to delete my account and all my personal
                data from Servisu.
              </span>
            </label>
          </div>

          <button
            type="submit"
            className="delete-button"
            disabled={
              isSubmitting ||
              !formData.accountType ||
              !formData.confirmDelete ||
              !formData.confirmUnderstand
            }
          >
            {isSubmitting ? (
              <>
                <span className="spinner"></span>
                Processing...
              </>
            ) : (
              "Submit Deletion Request"
            )}
          </button>
        </form>

          <div className="legal-footer">
            <p>
              Need help? Contact us at{" "}
              <a href={`mailto:${contactInformation.email}`}>{contactInformation.email}</a>
            </p>
            <p>
              This process complies with GDPR, CCPA, and other applicable data
              protection regulations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataDeletionPage;

