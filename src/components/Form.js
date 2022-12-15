/** @format */
import React from "react";
import { useContext } from "react";
import { AppContext } from "../App";
import LocationDetails from "./LocationDetails";
import PersonalDetails from "./PersonalDetails";
import PlanDetails from "./PlanDetails";
import Success from "./Success";
const Form = () => {
  const { step } = useContext(AppContext);
  switch (step - 1) {
    case 1:
      return <PlanDetails />;

    case 2:
      return <PersonalDetails />;

    case 3:
      return <LocationDetails />;
    case 4:
      return <Success />;
    default:
  }
  return <div>{Form()}</div>;
};

export default Form;
