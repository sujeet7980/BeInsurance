/** @format */

import React from "react";
import { useContext } from "react";
import { AppContext } from "../App";

const PlanDetails = () => {
  const { details, handleChange, formSubmit, setDetails } =
    useContext(AppContext);
  const choosePlan = (e) => {
    const collection = document.getElementsByClassName("active-plan")[0];
    collection.classList.remove("active-plan");
    const val = e.target.closest(".container-control");
    val.classList.add("active-plan");
    console.log(val);
    setDetails((prevState) => ({
      ...prevState,
      plan: val.id,
    }));
  };
  return (
    <>
      <form onSubmit={formSubmit}>
        <div className="form-container">
          <div className="left-div">
            <div
              className="container-control"
              onClick={choosePlan}
              id="Notary-signing-agent"
            >
              <div className="cont">
                <h2>Notary Signing Agent</h2>
                <p>
                  suitable for those who have purchased a <br /> brand new car
                </p>
                <div className="detail">
                  <p>View details</p>
                  <span className="material-symbols-outlined">
                    arrow_forward
                  </span>
                </div>
              </div>
              <div className="plan-rate">
                <span>per year</span>
              </div>
            </div>
            <div
              className="container-control active-plan"
              onClick={choosePlan}
              id="Notary-signing-agent"
            >
              <div className="cont">
                <h2>Remote Online Notary</h2>
                <p>
                  suitable for those who already have a<br /> valid third party
                  cover
                </p>
                <div className="detail">
                  <p>View details</p>
                  <span className="material-symbols-outlined">
                    arrow_forward
                  </span>
                </div>
              </div>
              <div className="plan-rate">
                <div className="icon">
                  <span class="material-symbols-outlined">star</span>
                  <p>Popular</p>
                </div>
                <span>per year</span>
              </div>
            </div>
            <div
              className="container-control"
              onClick={choosePlan}
              id="Notary-signing-agent"
            >
              <div className="cont">
                <h2>Mobile General Notary</h2>
                <p>
                  suitable for those who use the car <br /> infrequently
                </p>
                <div className="detail">
                  <p>View details</p>
                  <span className="material-symbols-outlined">
                    arrow_forward
                  </span>
                </div>
              </div>
              <div className="plan-rate">
                <span>per year</span>
              </div>
            </div>
          </div>
          <div className="right-div">
            <h2>Calculate your cost for RON!</h2>
            <div className="row">
              <div className="col">
                <span>No of extra signature</span>
                <p>Please enter zero,if only one signature is required</p>
              </div>
              <input
                type="text"
                value={details.signature}
                name="signature"
                onChange={handleChange}
                required
              />
            </div>
            <div className="row">
              <div className="col">
                <span>
                  How many files will you be <br />
                  uploading in the session
                </span>
              </div>
              <input
                type="text"
                value={details.files}
                name="files"
                onChange={handleChange}
                required
              />
            </div>
            <div className="row">
              <div className="col">
                <span>Number of Signers</span>
              </div>
              <input
                type="text"
                value={details.signers}
                name="signers"
                onChange={handleChange}
                required
              />
            </div>
            <div className="row">
              <div className="col">
                <span>Do you need Witness?</span>
                <p>Do not enter anything if you're bring your own Witness</p>
              </div>
              <input
                type="text"
                value={details.witness}
                name="witness"
                onChange={handleChange}
                required
              />
            </div>
            <h3>Your Approximate Quote: $59</h3>
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
    </>
  );
};

export default PlanDetails;
