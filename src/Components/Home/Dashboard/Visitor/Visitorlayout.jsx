import React from "react";
import { Visitor } from "./Visitorinsights";

function Visitorlayout() {
  return (
    <>
      <div className="w-full h-full bg-white rounded-lg p-4 grid">
        <p>Visitor Insights</p>
        <Visitor />
      </div>
    </>
  );
}

export default Visitorlayout;
