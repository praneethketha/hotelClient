import React from "react";
import "./profileCard.css";
import profile from "../../assets/tom.jpg";

const ProfileCard = () => {
  return (
    <div className="profile-card">
      <div>
        <img src={profile} className="profile-img" alt="profile-img" />
        <h2 className="pt-4 m-0">Tom Holland</h2>
        <p className="user">Active user</p>
        <p></p>
      </div>
      <div>
        <p className="mt-4 mb-1">
          <i className="fa-solid fa-phone pe-2"></i>+91 999-543-0000
        </p>
        <p>
          <i class="fa-solid fa-envelope pe-2"></i>tomholland@gmail.com
        </p>
      </div>
    </div>
  );
};

export default ProfileCard;
