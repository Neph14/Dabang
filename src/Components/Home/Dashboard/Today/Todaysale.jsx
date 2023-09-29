import React from "react";
import icon from "../../../Assets/Icon.png";
import icon1 from "../../../Assets/Icon (1).png";
import icon2 from "../../../Assets/Icon (2).png";
import icon3 from "../../../Assets/Icon (3).png";
const Todaysales = () => {
  return (
    <div className="p-4 rounded-lg bg-white grid place-content-stretch place-items-stretch gap-4  lg:col-span-5 h-full">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="">Today Sales</h1>
          <p>Sales Summary</p>
        </div>
        <button>export</button>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        <div className="bg-[#FFE2E5] rounded-2xl grid p-2">
          <img src={icon} alt="" />
          <h1 className="text-xl font-bold">$1k</h1>
          <h1>Total Sales</h1>
          <h1 className="text-[#4079ED]">+8% from yesterday</h1>
        </div>
        <div className="bg-[#FFF4DE] rounded-2xl grid p-2">
          <img src={icon1} alt="" />
          <h1 className="text-xl font-bold">$1k</h1>
          <h1>Total Sales</h1>
          <h1 className="text-[#4079ED]">+8% from yesterday</h1>
        </div>
        <div className="bg-[#DCFCE7] rounded-2xl grid p-2">
          <img src={icon2} alt="" />
          <h1 className="text-xl font-bold">$1k</h1>
          <h1>Total Sales</h1>
          <h1 className="text-[#4079ED]">+8% from yesterday</h1>
        </div>
        <div className="bg-[#F3E8FF] rounded-2xl grid p-2">
          <img src={icon3} alt="" />
          <h1 className="text-xl font-bold">$1k</h1>
          <h1>Total Sales</h1>
          <h1 className="text-[#4079ED]">+8% from yesterday</h1>
        </div>
      </div>
    </div>
  );
};

export default Todaysales;
