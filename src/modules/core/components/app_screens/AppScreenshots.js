import React from "react";
import { motion } from "framer-motion";
import "./appScreenshots.css";
import homeScreen from "../../../../assets/app-screens/home-screen.jpeg";
import providersScreen from "../../../../assets/app-screens/providers-screen.jpeg";
import bookingScreen from "../../../../assets/app-screens/booking-screen.jpeg";
import profileScreen from "../../../../assets/app-screens/profile-screen.jpeg";

const screens = [
  {
    title: "Start from home",
    description: "Find trusted providers, book in minutes and manage everything from one clean dashboard.",
    image: homeScreen,
    alt: "Servisu app home screen showing featured services",
  },
  {
    title: "Compare providers",
    description: "Search service providers, view ratings and choose the right person for the job.",
    image: providersScreen,
    alt: "Servisu app service providers screen",
  },
  {
    title: "Manage bookings",
    description: "Track active requests, view provider details and cancel bookings when needed.",
    image: bookingScreen,
    alt: "Servisu app bookings screen showing request status",
  },
  {
    title: "Control your profile",
    description: "Update account details, contact information, address, privacy and sign-in settings.",
    image: profileScreen,
    alt: "Servisu app profile screen",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.16,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

const AppScreenshots = () => {
  return (
    <section className="app-screens-section" id="app-screens">
      <motion.div
        className="app-screens-heading"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <p className="eyebrow">Inside the app</p>
        <h2>Premium mobile screens built for quick bookings</h2>
        <p>
          Servisu gives users a clean mobile experience to find providers, manage bookings,
          update profiles and stay in control from one place.
        </p>
      </motion.div>

      <motion.div
        className="app-screens-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.18 }}
      >
        {screens.map((screen, index) => (
          <motion.article
            className="app-screen-card"
            key={screen.title}
            variants={itemVariants}
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
  );
};

export default AppScreenshots;
