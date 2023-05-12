import React from "react";
import bellIcon from "../../../assests/icons/Vector.svg";
import userProfile from "../../../assests/icons/Mask Group.png";

const Header = () => {
  return (
    <div className="header">
      <h2 className="heading">Dashboard</h2>
      <div className="header-right">
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search..."
        />
        <img src={bellIcon} alt="" />
        <img src={userProfile} alt="" />
      </div>
    </div>
  );
};

export default Header;
