import React, { useState } from "react";
import "./HelpCenterPage.css";
import "../legal/LegalPages.css";
import contactInformation from "../../modules/core/components/utils/Utlis";

const HelpCenterPage = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  const faqSections = [
    {
      title: "Getting Started",
      questions: [
        {
          question: "How do I create an account?",
          answer:
            "For users, download the 'Servisu' app and for Service Providers, download the 'Servisu Provider' app then Fill out the registration form with your details under the 'Sign up' screen and follow the verification steps.",
        },
        {
          question: "What's the difference between a User and Provider account?",
          answer:
            "A User account allows you to browse and book services from service providers. A Provider account allows you to offer your services and connect with customers who need them.",
        },
        {
          question: "How do I verify my account?",
          answer:
            `For users, after registration, you'll receive a verification code via email. Enter this code in your Servisu/Servisu Provider app by opening 'Email Verification' notification to complete verification. For service providers, you'll first need to verify your email(similar process with users) and then submit the following documents to the email ${contactInformation.adminEmail} which are: an ID copy, proof of residence, and a photo of you.`,
        },
      ],
    },
    {
      title: "For Users",
      questions: [
        {
          question: "How do I book a service?",
          answer:
            "Browse available service providers, select one that matches your needs, and click 'View' to see their details. Then click 'Request Service' to submit a booking request.",
        },
        {
          question: "How do I track my service requests?",
          answer:
            "Go to 'Bookings' in your Servisu app or 'My Requests' in your account dashboard to view all your active and completed service requests.",
        },
        {
          question: "Can I cancel a booking?",
          answer:
            "No. Feature still needs to be implemented."//"Yes, you can cancel bookings through 1 day prior the scheduled service in 'Bookings' Screen. Cancellation policies may vary by service provider.",
        },
        {
          question: "How do I rate a service provider?",
          answer:
            "After a service is completed, you'll be able to rate and review the provider through 'bookings' in your app.",
        },
      ],
    },
    {
      title: "For Service Providers",
      questions: [
        {
          question: "How do I receive service requests?",
          answer:
            "Service requests will appear in your Servisu Provider app under 'Clients' or in your dashboard under 'Requests' . You can accept or decline requests based on your availability.",
        },
        {
          question: "How do I update my availability?",
          answer:
            "Go to your profile in your Servisu Provider app and click 'Work schedule' to set your working days.",
        },
        {
          question: "How do I update my profile?",
          answer:
            "Navigate to your profile in your Servisu Provider app and click which ever option you want to update and follow the process",
        },
        {
          question: "How are payments processed?",
          answer:
            "Payment processing details are handled directly between you and the customer. Servisu facilitates the connection but does not process payments, yet.",
        },
      ],
    },
    {
      title: "Account & Security",
      questions: [
        {
          question: "How do I reset my password?",
          answer:
            "If you've forgotten your password, click 'Forgot Password' in the 'Sign in' screen and enter your email to receive reset instructions via email.",
        },
        {
          question: "How do I update my personal information?",
          answer:
            "Go to your Servisu/Servisu Provider app under 'Profile' screen and click the option you want to update.",
        },
        {
          question: "How do I delete my account?",
          answer:
            "You can request account deletion by visiting our Data Deletion page or use the app built in functionality under the 'Profile' screen. Your request will be processed within 30 days.",
        },
        {
          question: "Is my data secure?",
          answer:
            "Yes, we implement industry-standard security measures to protect your personal information. Please review our Privacy Policy for more details.",
        },
      ],
    },
    {
      title: "Technical Support",
      questions: [
        {
          question: "The website is not loading properly",
          answer:
            "Try clearing your browser cache, disabling browser extensions, going to the home page or using a different browser. If the issue persists, contact our support team.",
        },
        {
          question: "I'm having trouble with the mobile app",
          answer:
            "Make sure you have the latest version of the app installed. If problems continue, try uninstalling and reinstalling the app, or contact support.",
        },
        {
          question: "How do I report a bug?",
          answer:
            "Please use the built in 'Report Issue' functionality under the app 'Profile' Screen or contact our support team with details about the issue, including what you were doing when it occurred and any error messages you saw.",
        },
      ],
    },
  ];

  return (
    <div className="legal-page">
      <div className="legal-container">
        <div className="legal-header">
          <h1>Help Center</h1>
        </div>

        <div className="legal-content">
          <section className="legal-section">
            <h2>Welcome to the Help Center</h2>
            <p>
              Find answers to common questions about using Servisu. If you can't
              find what you're looking for, please don't hesitate to contact our
              support team.
            </p>
          </section>

          {faqSections.map((section, sectionIndex) => (
            <section key={sectionIndex} className="legal-section">
              <h2>{section.title}</h2>
              <div className="faq-list">
                {section.questions.map((faq, faqIndex) => {
                  const isOpen = openSection === `${sectionIndex}-${faqIndex}`;
                  return (
                    <div key={faqIndex} className="faq-item">
                      <button
                        className={`faq-question ${isOpen ? "open" : ""}`}
                        onClick={() =>
                          toggleSection(`${sectionIndex}-${faqIndex}`)
                        }>
                        <span>{faq.question}</span>
                        <span className="faq-toggle">{isOpen ? "−" : "+"}</span>
                      </button>
                      {isOpen && (
                        <div className="faq-answer">
                          <p>{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>
          ))}

          <section className="legal-section">
            <h2>Still Need Help?</h2>
            <p>
              If you couldn't find the answer you're looking for, our support
              team is here to help.
            </p>
            <div className="contact-details">
              <p>
                <strong>Email:</strong> {contactInformation.email}
              </p>
              <p>
                <strong>Phone:</strong> {contactInformation.number}
              </p>
              <p>
                <strong>Response Time:</strong> We typically respond within 24
                hours
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default HelpCenterPage;

