import React from "react";
import { Outlet } from "react-router-dom";
import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

const Home = () => {
  return (
    <>
      <div className="dashboard-container">
        <TopBar />
        <div className="main-layout">
          <Dashboard />
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Home;