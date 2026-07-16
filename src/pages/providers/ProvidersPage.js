import React from "react";
import { Link } from "react-router-dom";
import { motion } from "../../lib/motionStub";
import "../../modules/core/components/app_screens/appScreenshots.css";
import "./providersPage.css";
import providerHome from "../../assets/app-screens/provider-home-screen.jpeg";
import providerProfile from "../../assets/app-screens/provider-profile-screen.jpeg";
import providerWallet from "../../assets/app-screens/provider-wallet-screen.jpeg";
import { ROUTES } from "../../config/routes";

const providerScreens = [
  {
    title: "Provider Dashboard",
    description: "Welcome providers back with account status, service category, upcoming bookings, client access and quick actions.",
    image: providerHome,
    alt: "Servisu provider mobile app home dashboard",
  },
  {
    title: "Provider Profile",
    description: "Let providers manage their account details, contact information, password, verification status and profile settings.",
    image: providerProfile,
    alt: "Servisu provider mobile app profile screen",
  },
  {
    title: "Wallet & Payouts",
    description: "Help providers set up banking details, track balances and prepare to receive payouts from completed jobs.",
    image: providerWallet,
    alt: "Servisu provider mobile app wallet and payouts screen",
  },
];

const Icon = ({ type }) => {
  const commonProps = { width: 26, height: 26, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", "aria-hidden": "true" };
  const stroke = { stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" };

  switch (type) {
    case "calendar":
      return <svg {...commonProps}><path {...stroke} d="M8 2v4M16 2v4M3 10h18M5 5h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z"/></svg>;
    case "users":
      return <svg {...commonProps}><path {...stroke} d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle {...stroke} cx="9" cy="7" r="4"/><path {...stroke} d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>;
    case "wallet":
      return <svg {...commonProps}><path {...stroke} d="M19 7V5a2 2 0 0 0-2-2H5a3 3 0 0 0 0 6h15a1 1 0 0 1 1 1v8a2 2 0 0 1-2 2H5a3 3 0 0 1-3-3V6"/><path {...stroke} d="M16 14h.01"/></svg>;
    case "shield":
      return <svg {...commonProps}><path {...stroke} d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path {...stroke} d="m9 12 2 2 4-4"/></svg>;
    case "bell":
      return <svg {...commonProps}><path {...stroke} d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9"/><path {...stroke} d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>;
    case "star":
    default:
      return <svg {...commonProps}><path {...stroke} d="m12 2 3.09 6.26L22 9.27l-5 4.88L18.18 21 12 17.77 5.82 21 7 14.15l-5-4.88 6.91-1.01L12 2Z"/></svg>;
  }
};

const providerFeatures = [
  { icon: "calendar", title: "Booking Management", text: "View upcoming bookings, manage requests and keep every job organized from one provider dashboard." },
  { icon: "users", title: "Client Growth", text: "Connect with customers looking for trusted local services and build a repeat client base." },
  { icon: "wallet", title: "Wallet & Payouts", text: "Add bank details, monitor wallet activity and prepare for secure payouts after completed work." },
  { icon: "shield", title: "Verified Profile", text: "Show customers that your account and email are verified to build more trust before they book." },
  { icon: "bell", title: "Real-Time Updates", text: "Stay informed about bookings, profile actions and important customer activity through notifications." },
  { icon: "star", title: "Reputation Building", text: "Use ratings, completed jobs and a professional profile to stand out from other providers." },
];

const steps = [
  "Create your provider account",
  "Complete verification and profile setup",
  "Receive booking requests from customers",
  "Complete the service professionally",
  "Track earnings and receive payouts",
];

const fadeUp = {
  hidden: { opacity: 0, y: 34 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
};

const ProvidersPage = () => {
  return (
    <main className="providers-page">
      <section className="provider-hero">
        <motion.div
          className="provider-hero-copy"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="eyebrow">For service providers</p>
          <h1>Grow your service business with ServisU</h1>
          <p>
            ServisU gives providers a professional mobile workspace to manage clients,
            track bookings, build trust, and prepare payouts from completed jobs.
          </p>
          <div className="provider-hero-actions">
            <a href="#provider-screens" className="primary-provider-cta">View Provider App</a>
            <Link to={ROUTES.GET_STARTED} className="secondary-provider-cta">Get Started</Link>
          </div>
        </motion.div>

        <motion.div
          className="provider-hero-phone"
          initial={{ opacity: 0, scale: 0.92, y: 36 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
        >
          <div className="smartphone-mockup provider-featured-phone">
            <div className="smartphone-frame">
              <div className="smartphone-screen">
                <img src={providerHome} alt="Servisu provider dashboard preview" loading="lazy" />
                <span className="glass-reflection reflection-one" aria-hidden="true"></span>
                <span className="glass-reflection reflection-two" aria-hidden="true"></span>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="provider-value-section">
        <motion.div
          className="provider-value-card provider-value-card-primary"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          whileHover={{ y: -8, scale: 1.015 }}
        >
          <h2>One platform. Two experiences.</h2>
          <p>
            Customers get a simple way to find trusted help. Providers get the tools to
            manage jobs, grow their business and look professional while doing it.
          </p>
        </motion.div>
        <motion.div
          className="provider-value-card"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          whileHover={{ y: -8, scale: 1.015 }}
        >
          <span>For Customers</span>
          <h3>Book trusted services faster</h3>
          <p>Search providers, compare ratings and manage bookings from the customer app.</p>
        </motion.div>
        <motion.div
          className="provider-value-card"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          whileHover={{ y: -8, scale: 1.015 }}
        >
          <span>For Providers</span>
          <h3>Manage work like a business</h3>
          <p>Keep clients, bookings, verification, notifications and payouts in one place.</p>
        </motion.div>
      </section>

      <section className="provider-features-section">
        <motion.div
          className="provider-section-heading"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="eyebrow">Provider tools</p>
          <h2>Everything providers need to stay organized</h2>
          <p>From first booking to payout setup, the provider side is designed to support real service businesses.</p>
        </motion.div>

        <div className="provider-feature-grid">
          {providerFeatures.map((feature, index) => (
            <motion.article
              className="provider-feature-card"
              key={feature.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, ease: "easeOut", delay: index * 0.05 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <span className="provider-feature-icon"><Icon type={feature.icon} /></span>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="app-screens-section provider-screens-section" id="provider-screens">
        <motion.div
          className="app-screens-heading"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="eyebrow">Provider mobile app</p>
          <h2>Provider-side screens built for managing work</h2>
          <p>
            The provider experience helps service professionals manage their business from a clean mobile interface.
          </p>
        </motion.div>

        <motion.div
          className="app-screens-grid provider-screens-grid"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.18 }}
          variants={{ show: { transition: { staggerChildren: 0.16 } } }}
        >
          {providerScreens.map((screen, index) => (
            <motion.article
              className="app-screen-card"
              key={screen.title}
              variants={{ hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } } }}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 240, damping: 20 }}
            >
              <motion.div
                className="smartphone-mockup"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: index * 0.18 }}
              >
                <div className="smartphone-frame">
                  <div className="smartphone-screen">
                    <img src={screen.image} alt={screen.alt} loading="lazy" />
                    <span className="glass-reflection reflection-one" aria-hidden="true"></span>
                    <span className="glass-reflection reflection-two" aria-hidden="true"></span>
                  </div>
                </div>
              </motion.div>
              <div className="app-screen-copy">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{screen.title}</h3>
                <p>{screen.description}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </section>

      <section className="provider-steps-section">
        <motion.div
          className="provider-section-heading"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="eyebrow">How it works</p>
          <h2>From signup to payout in five clear steps</h2>
        </motion.div>
        <div className="provider-steps-list">
          {steps.map((step, index) => (
            <motion.div
              className="provider-step"
              key={step}
              initial={{ opacity: 0, x: -28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              whileHover={{ x: 6 }}
            >
              <span>{index + 1}</span>
              <p>{step}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default ProvidersPage;
