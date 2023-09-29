import React from "react";

import Dashboard from "./Dashboard/Layout/Dashboardlayout";
import Sidebar from "../UI/Sidebar";
import Navbar from "../UI/Navbar";

function Home() {
  return (
    <>
      <div className="h-full w-full bg-slate-100 flex">
        <div className="hidden lg:block w-1/5 h-screen fixed bg-white overflow-y-scroll">
          <Sidebar />
        </div>
        <div className="hidden lg:block w-1/5 h-screen bg-white"></div>
        <div className="w-full lg:w-4/5 h-full">
          <Navbar />
          <div className="pt-8 pl-8 pr-11">
            <Dashboard />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
