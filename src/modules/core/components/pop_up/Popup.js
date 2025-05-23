import { React, useState, useEffect } from "react";
import "./popup.css";
import { assets } from "../../../../assets/assets";

const MessagePopup = ({ popHeaderMessage, message, showPopup, onClose }) => {
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    let timer, interval;

    if (showPopup) {
      setCountdown(5); // reset countdown
      interval = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);

      timer = setTimeout(() => {
        onClose();
      }, 5000);
    }

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [showPopup, onClose]);

  return (
    <>
      <div className="popup show">
        <div className="contents">
          <div className="message-header">
            <h2>{popHeaderMessage || "An error has occurred!"}</h2>
            <img onClick={onClose} src={assets.close_window} alt="" />
          </div>
          {message && (
            <div className="message-body">
              <p>{message}</p>
            </div>
          )}
          <div className="message-close">
            <p>
              <strong>closing in {countdown}</strong> seconds.
            </p>
          </div>
        </div>
      </div>
      <div className="overlay" onClick={onClose} />
    </>
  );
};

export default MessagePopup;
