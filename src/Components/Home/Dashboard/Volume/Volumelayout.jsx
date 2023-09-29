import React from "react";
import { Volume } from "./Volume";

function Volumelayout() {
  return (
    <>
      <div className="w-full h-full bg-white rounded-lg p-4 grid">
        <p>Volume vs Service Level</p>
        <Volume />
      </div>
    </>
  );
}

export default Volumelayout;
