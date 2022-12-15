/** @format */

import React from "react";
import { useContext } from "react";
import { AppContext } from "../App";

const LocationDetails = () => {
  const { details, handleChange, handleSubmit } = useContext(AppContext);

  return (
    <div className="personal">
      <div className="icon">
        <span class="material-symbols-outlined">account_circle</span>
        <h2>Signing Location</h2>
      </div>
      <hr />
      <div className="grid-container">
        <div className="box">
          Enter Signing Location
          <input
            type="text"
            placeholder="Signing Location"
            value={details.signingLocation}
            name="signingLocation"
            onChange={handleChange}
            required
          />
        </div>
        <div className="box">
          Date
          <input
            type="date"
            placeholder="Date"
            value={details.date}
            name="date"
            onChange={handleChange}
            required
          />
        </div>
        <div className="box">
          Time
          <input
            type="time"
            placeholder="Time"
            value={details.time}
            name="time"
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div className="submit-form">
        <button type="submit" className="submit-btn" onClick={handleSubmit}>
          Schedule Appointment
        </button>
      </div>
    </div>
  );
};

export default LocationDetails;
