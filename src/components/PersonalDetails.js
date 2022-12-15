/** @format */

import React from "react";
import { useContext } from "react";
import { AppContext } from "../App";

const PersonalDetails = () => {
  const { details, handleChange, formSubmit } = useContext(AppContext);
  return (
    <form onSubmit={formSubmit}>
      <div className="personal">
        <div className="icon">
          <span class="material-symbols-outlined">account_circle</span>
          <h2>Signer Details</h2>
        </div>
        <hr />
        <div className="grid-container">
          <div className="box">
            Full Name
            <input
              type="text"
              placeholder="Enter your name"
              value={details.name}
              name="name"
              onChange={handleChange}
              required
            />
          </div>
          <div className="box">
            Phone Number
            <input
              type="text"
              placeholder="Enter your number"
              value={details.phoneNumber}
              name="phoneNumber"
              onChange={handleChange}
              required
            />
          </div>
          <div className="box">
            Email
            <input
              type="text"
              placeholder="Enter your email"
              value={details.email}
              name="email"
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="icon">
          <span class="material-symbols-outlined">account_circle</span>
          <h2>Title Company Details</h2>
        </div>
        <hr />
        <div className="grid-container">
          <div className="box">
            Company Name
            <input
              type="text"
              placeholder="Company Name"
              value={details.companyName}
              name="companyName"
              onChange={handleChange}
              required
            />
          </div>
          <div className="box">
            Agent Name
            <input
              type="text"
              placeholder="Agent Name"
              value={details.agentName}
              name="agentName"
              onChange={handleChange}
              required
            />
          </div>
          <div className="box">
            Email
            <input
              type="email"
              placeholder="Email"
              value={details.companyEmail}
              name="companyEmail"
              onChange={handleChange}
              required
            />
          </div>
          <div className="box">
            Phone Number
            <input
              type="text"
              placeholder="Phone Number"
              value={details.companyNumber}
              name="companyNumber"
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="icon">
          <span class="material-symbols-outlined">account_circle</span>
          <h2>Order Info</h2>
        </div>
        <hr />
        <div className="grid-container">
          <div className="box">
            Escrow #/Loan No
            <input
              type="text"
              placeholder="Loan Number "
              value={details.loanNo}
              name="loanNo"
              onChange={handleChange}
              required
            />
          </div>
          <div className="box">
            Property Address
            <input
              type="text"
              placeholder="Property address"
              value={details.propertyAddress}
              name="propertyAddress"
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div>
          <button type="submit" className="next" id="next">
            Next step
            <span className="material-symbols-outlined cir">
              arrow_right_alt
            </span>
          </button>
        </div>
      </div>
    </form>
  );
};

export default PersonalDetails;
