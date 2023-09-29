import React from "react";

import Dummy from "../Assets/dummy logo.png";
import logo from "../Assets/Logo.png";
import background from "../Assets/Background.png";

function Sidebar() {
  return (
    <>
      <div className="w-full h-auto gap-1 grid place-content-center place-items-center pb-5">
        <div className="flex justify-center items-center py-5 gap-6">
          <img src={Dummy} alt="Dummy" />
          <p className="text-3xl font-semibold">Dabang</p>
        </div>
        <button className="w-[200px] h-14 bg-white focus:bg-[#5D5FEF] flex items-center text-[#737791] focus:text-white rounded-2xl pl-6 gap-6">
          <div className="text-2xl">
            <ion-icon name="pie-chart-outline"></ion-icon>
          </div>
          <p className="font-semibold">Dashboard</p>
        </button>
        <button className="w-[200px] h-14 bg-white focus:bg-[#5D5FEF] flex items-center text-[#737791] focus:text-white rounded-2xl pl-6 gap-6">
          <div className="text-2xl">
            <ion-icon name="stats-chart-outline"></ion-icon>{" "}
          </div>
          <p className="font-semibold">Leaderboard</p>
        </button>
        <button className="w-[200px] h-14 bg-white focus:bg-[#5D5FEF] flex items-center text-[#737791] focus:text-white rounded-2xl pl-6 gap-6">
          <div className="text-2xl">
            <ion-icon name="cart-outline"></ion-icon>{" "}
          </div>
          <p className="font-semibold">Order</p>
        </button>
        <button className="w-[200px] h-14 bg-white focus:bg-[#5D5FEF] flex items-center text-[#737791] focus:text-white rounded-2xl pl-6 gap-6">
          <div className="text-2xl">
            <ion-icon name="bag-handle-outline"></ion-icon>{" "}
          </div>
          <p className="font-semibold">Products</p>
        </button>
        <button className="w-[200px] h-14 bg-white focus:bg-[#5D5FEF] flex items-center text-[#737791] focus:text-white rounded-2xl pl-6 gap-6">
          <div className="text-2xl">
            <ion-icon name="bar-chart-outline"></ion-icon>
          </div>
          <p className="font-semibold">Sales Report</p>
        </button>
        <button className="w-[200px] h-14 bg-white focus:bg-[#5D5FEF] flex items-center text-[#737791] focus:text-white rounded-2xl pl-6 gap-6">
          <div className="text-2xl">
            <ion-icon name="chatbox-ellipses-outline"></ion-icon>
          </div>
          <p className="font-semibold">Messages</p>
        </button>
        <button className="w-[200px] h-14 bg-white focus:bg-[#5D5FEF] flex items-center text-[#737791] focus:text-white rounded-2xl pl-6 gap-6">
          <div className="text-2xl">
            <ion-icon name="settings-outline"></ion-icon>
          </div>
          <p className="font-semibold">Settings</p>
        </button>
        <button className="w-[200px] h-14 bg-white focus:bg-[#5D5FEF] flex items-center text-[#737791] focus:text-white rounded-2xl pl-6 gap-6">
          <div className="text-2xl">
            <ion-icon name="log-out-outline"></ion-icon>
          </div>
          <p className="font-semibold">Sign Out</p>
        </button>
        <div
          className="w-10/12 h-[200px] bg-center bg-cover bg-no-repeat rounded-2xl mt-36 grid place-content-center place-items-center gap-2"
          style={{ backgroundImage: `url(${background})` }}
        >
          <img src={logo} alt="Logo" className="w-10" />
          <p className="text-white text-center text-xl font-semibold">
            Dabang Pro
          </p>
          <p className="text-white text-center text-xs font-medium w-32 h-auto">
            Get access to all features on tetumbas
          </p>
          <button className="bg-white rounded-lg text-[#5D5FEF] w-3/5 h-fit py-2 ">
            Get Pro
          </button>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
