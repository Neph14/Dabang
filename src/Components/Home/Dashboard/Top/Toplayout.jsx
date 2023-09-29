import React from "react";
import ProgressChart from "./Topproduct";

function Toplayout() {
  return (
    <>
      <div className="w-full h-full bg-white rounded-lg p-4 grid">
        <p>Top Product</p>
        <ProgressChart />
      </div>
    </>
  );
}

export default Toplayout;
