import React from "react";
import totalIcon from "../../../assests/icons/total_revenues_icon.svg";
const DashboardCard = ({ cardImage, title, number, background }) => {
  return (
    <div className="card" style={{ backgroundColor: background }}>
      <img src={cardImage} alt="" className="card-image" />
      <h3 className="card-heading">{title}</h3>
      <h3 className="card-total-number">{number}</h3>
    </div>
  );
};

export default DashboardCard;
