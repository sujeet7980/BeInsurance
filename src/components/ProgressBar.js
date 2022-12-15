/** @format */

import React from "react";

const ProgressBar = () => {
  return (
    <div className="mt-5">
      <div className="progress-container mx-auto">
        <div className="progress" id="progress"></div>
        <div className="circle active" id="circle"></div>
        <div className="circle active">1</div>
        <div className="circle">2</div>
        <div className="circle">3</div>
        <div className="circle"></div>
      </div>
    </div>
  );
};

export default ProgressBar;
