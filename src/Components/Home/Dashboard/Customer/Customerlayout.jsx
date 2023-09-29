import React from "react";
import { Customer } from "./Customersatisfaction";

function Customerlayout() {
  return (
    <>
      <div className="bg-white w-full h-full rounded-lg p-4 grid place-content-start gap-10">
        <p>Customer Satisfaction</p>
        <Customer />
      </div>
    </>
  );
}

export default Customerlayout;
