import React from "react";
import { Target } from "./Target";
import Avatar from "../../../Assets/Avatar.png";
import Avatar1 from "../../../Assets/Avatar (1).png";

function Targetlayout() {
  return (
    <>
      <div className="w-full h-full bg-white rounded-lg p-4 grid">
        <p>Target vs Reality</p>
        <Target />
        <div className="flex h-9 justify-between items-center">
          <div className="flex gap-3">
            <img src={Avatar} alt="Reality Sales" />
            <div className="grid">
              <p className="text-xs font-semibold">Reality Sales</p>
              <p className="text-xs">Global</p>
            </div>
          </div>
          <div className="text-sm font-medium text-[#27AE60]">8.823</div>
        </div>
        <div className="flex h-9 justify-between items-center">
          <div className="flex gap-3">
            <img src={Avatar1} alt="Target Sales" />
            <div className="grid">
              <p className="text-xs font-semibold">Target Sales</p>
              <p className="text-xs">Commercial</p>
            </div>
          </div>
          <div className="text-sm font-medium text-[#FFA412]">12.122</div>
        </div>
      </div>
    </>
  );
}

export default Targetlayout;
