/** @format */

import React from "react";
import Form from "./Form";
import Profile from "./Profile";
import { useContext } from "react";
import { AppContext } from "../App";
import ProgressBar from "./ProgressBar";

const Main = () => {
  const { prevStep } = useContext(AppContext);
  return (
    <div className="container">
      <div className="left ">
        <Profile />
      </div>
      <div className="right">
        <div className="icon">
          <span className="material-symbols-outlined " onClick={prevStep}>
            arrow_back_ios
          </span>
          <div className="prev">
            <span>NEW APPOINTMENT REQUEST</span>
            <p>same great converge for less</p>
          </div>
        </div>
        <ProgressBar />
        <Form />
      </div>
    </div>
  );
};

export default Main;
