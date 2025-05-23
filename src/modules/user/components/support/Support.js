import React from "react";
import "./support.css";

const Support = () => {
  return (
    <div className="support">
      <div className="support-contents">
        <div className="support-details">
          <h2>Need help?</h2>
          <p>Send a message to our friendly support team.</p>
          <hr />
        </div>
        <div className="support-details">
          <form>
            <h2>Subject</h2>
            <input type="text" required />
            <h2>Message</h2>
            <textarea type="text" required />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Support;
