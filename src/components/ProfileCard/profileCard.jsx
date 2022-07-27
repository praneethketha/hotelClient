import React from "react";
import "./profileCard.css";
import profile from "../../assets/tom.jpg";
import { useAuth } from "../../store/authContext";
const ProfileCard = () => {
  const { currentUser } = useAuth();
  return (
    <div className="profile-card">
      <div>
        <img src={profile} className="profile-img" alt="profile-img" />
        <h2 className="pt-4 m-0">Sahil {currentUser.name}</h2>

        <p className="user">Active User {currentUser.role}</p>

        <p></p>
      </div>
      <div>
        <p className="mt-4 mb-1">
          <i className="fa-solid fa-phone pe-2"></i>+91 99999999999
          {currentUser.contact_number}
        </p>

        <p>
          <i className="fa-solid fa-envelope pe-2"></i>
          {currentUser.email}sahil@gmail.com
        </p>
      </div>
    </div>
  );
};

export default ProfileCard;
