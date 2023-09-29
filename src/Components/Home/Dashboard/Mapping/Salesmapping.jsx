import React from "react";

import Map from "../../../Assets/world 1.png";

function Salesmapping() {
  return (
    <>
      <div className="w-full h-full bg-white rounded-lg p-4 grid">
        <p>Sales Mapping by Country</p>
        <img src={Map} alt="Sales Mapping by Country" />
      </div>
    </>
  );
}

export default Salesmapping;
