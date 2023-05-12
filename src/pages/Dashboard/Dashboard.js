import React from "react";
import "./Dashboard.css";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import DashboardCard from "./components/DashboardCard";
import totalRevenueIcon from "../../assests/icons/total_revenues_icon.svg";
import totalTransactionIcon from "../../assests/icons/total_transactions_icon.svg";
import totalLikeIcon from "../../assests/icons/total_likes_icon.svg";
import totalUserIcon from "../../assests/icons/total_users_icon.svg";
import ChartComponent from "./components/ChartComponent";
import PieChart from "./components/PieChart";

function Dashboard() {
  const cardData = [
    {
      image: totalRevenueIcon,
      title: "Total Revenues",
      number: "$2,129,430",
      background: "#DDEFE0",
    },
    {
      image: totalTransactionIcon,
      title: "Total Transactions",
      number: "1,520",
      background: "#F4ECDD",
    },
    {
      image: totalLikeIcon,
      title: "Total Likes",
      number: "9,721",
      background: "#EFDADA",
    },
    {
      image: totalUserIcon,
      title: "Total Users",
      number: "892",
      background: "#DEE0EF",
    },
  ];
  return (
    <div className="dashboard">
      <div className="left-side">
        <Sidebar />
      </div>
      <div className="right-side">
        <Header />
        <div className="card-section">
          {cardData.map((card, index) => (
            <DashboardCard
              key={index}
              cardImage={card.image}
              title={card.title}
              number={card.number}
              background={card.background}
            />
          ))}
        </div>
        <div className="line-chart-conatiner">
          <h2 className="line-chart-header">Activities</h2>
          <ChartComponent />
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div className="pie-chart-conatiner">
            <h2 className="pie-chart-header">Top products</h2>
            <PieChart />
          </div>
          <div className="pie-chart-conatiner">
            <h2 className="pie-chart-header" style={{ marginBottom: "25px" }}>
              Today’s schedule
            </h2>
            <div className="schedule-cards">
              <div className="schedule-card">
                <h3 className="schedule-card-header">
                  Meeting with suppliers from Kuta Bali
                </h3>
                <p className="schedule-card-time">14.00-15.00</p>
                <p className="schedule-card-venue">
                  at Sunset Road, Kuta, Bali{" "}
                </p>
              </div>
              <div className="schedule-card card-2">
                <h3 className="schedule-card-header">
                  Check operation at Giga Factory 1
                </h3>
                <p className="schedule-card-time">18.00-20.00</p>
                <p className="schedule-card-venue">at Central Jakarta</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
