import React from "react";
import dashboardIcon from "../../../assests/icons/dashboard_icon.png";
import transcationIcon from "../../../assests/icons/transaction_icon.png";
import schedulesIcon from "../../../assests/icons/schedule_icon.png";
import usersIcon from "../../../assests/icons/user_icon.png";
import settingsIcon from "../../../assests/icons/setting_icon.png";

const Sidebar = () => {
  return (
    <div className="side-bar">
      <h1 className="heading">Board.</h1>
      <div className="menu-section">
        <div className="menu-item">
          <img src={dashboardIcon} alt="" className="item-img" />
          <h3 className="item-name">Dashboard</h3>
        </div>
        <div className="menu-item">
          <img src={transcationIcon} alt="" className="item-img" />
          <h3 className="item-name">Transcation</h3>
        </div>
        <div className="menu-item">
          <img src={schedulesIcon} alt="" className="item-img" />
          <h3 className="item-name">Schedules</h3>
        </div>
        <div className="menu-item">
          <img src={usersIcon} alt="" className="item-img" />
          <h3 className="item-name">Users</h3>
        </div>
        <div className="menu-item">
          <img src={settingsIcon} alt="" className="item-img" />
          <h3 className="item-name">Settings</h3>
        </div>
      </div>
      <div className="footer">
        <h3>Help</h3>
        <h3>Contact Us</h3>
      </div>
    </div>
  );
};

export default Sidebar;
