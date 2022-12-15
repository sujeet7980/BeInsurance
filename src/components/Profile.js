/** @format */

import React from "react";
import { useEffect, useState } from "react";
const Profile = () => {
  const [user, setUser] = useState(null);
  const PostCall = async () => {
    try {
      const response = await fetch(
        "https://notaryapp-staging.herokuapp.com/plugin/getPluginSampleResponse",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      setUser((prevState) => ({
        ...prevState,
        firstName: data.response.personalInfo.firstName,
        lastName: data.response.personalInfo.lastName,
        photoURL: data.response.personalInfo.photoURL,
        email: data.response.personalInfo.email,
        phoneNo: data.response.personalInfo.phoneNumber,
        address: data.response.personalInfo.businessDetails.businessAddress,
        insurance: data.response.personalInfo.createdOn,
      }));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    PostCall();
  }, []);
  return user === null ? (
    <div className="spinner">
      <div id="loading"></div>
    </div>
  ) : (
    <div className="profile">
      <div className="logo">
        <span class="material-symbols-outlined">offline_bolt</span>
        <h4>BeInsurance</h4>
      </div>
      <div className="info">
        <div className="dp">
          <img src={user.photoURL} alt="profile"></img>
        </div>
        <h3>
          {user.firstName} {user.lastName}
        </h3>
      </div>
      <div className="info-container">
        <div className="info-detail">
          <span class="material-symbols-outlined">mail</span>
          <p>{user.email}</p>
        </div>
        <div className="info-detail">
          <span class="material-symbols-outlined">call</span>
          <p>{user.phoneNo}</p>
        </div>
        <div className="info-detail">
          <span class="material-symbols-outlined">location_on</span>
          <p>{user.address}</p>
        </div>
        <div className="info-detail">
          <span class="material-symbols-outlined">person</span>
          <p> Insurance No {user.insurance}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
