import React from "react";
import { Total } from "./Totalrevenue";

function Totallayout() {
  return (
    <>
      <div className="w-full h-full bg-white rounded-lg p-4">
        <p>Total Revenue</p>
        <Total />
      </div>
    </>
  );
}

export default Totallayout;
