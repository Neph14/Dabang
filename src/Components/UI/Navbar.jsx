import React from "react";
import profile from "../Assets/Rectangle 1393.png";
import bahasa from "../Assets/United.svg";
const Navbar = () => {
  return (
    <div className="grid md:grid-cols-7 grid-cols-3 justify-between  items-center md:px-4 py-3 w-full bg-white">
      <div className="md:col-span-2 pl-2 hidden md:block">
        <h1 className=" hidden lg:block font-semibold text-3xl ">Dashboard</h1>
      </div>
      <div className="md:col-span-2 md:relative block  ">
        <span className="absolute top-1 left-4 text-[#5D5FEF] text-xl font-medium">
          <ion-icon name="search-outline"></ion-icon>
        </span>
        <input
          type="text"
          className="bg-[#F9FAFB] w-24 md:w-52 rounded-2xl py-1"
        />
      </div>
      <div className="md:col-span-3 flex md:justify-evenly justify-between  gap-4   items-center ">
        <div className="md:flex items-center hidden">
          <img src={bahasa} alt="" className="w-16 h-6" />
          <select className="bg-white">
            <ion-icon name="chevron-down-outline"></ion-icon>
          </select>
        </div>

        <div className="flex gap-4 md:col-span-3 items-center ">
          <img
            src={profile}
            alt=""
            className="w-[30px] h-[30px] md:w-[60px] md:h-[60px]"
          />
          <div className="text-xs">
            <h1>Musfik</h1>
            <h1>Admin</h1>
          </div>
        </div>
        <div className="">
          <ion-icon name="chevron-down-outline"></ion-icon>
        </div>
      </div>
      <div className="md:hidden flex justify-end pr-5 text-2xl">
        <ion-icon name="menu-outline"></ion-icon>
      </div>
    </div>
  );
};

export default Navbar;
