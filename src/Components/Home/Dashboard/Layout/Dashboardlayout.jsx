import React from "react";
import Visitor from "../Visitor/Visitorlayout";
import Total from "../Total/Totallayout";
import Target from "../Target/Targetlayout";
import Customer from "../Customer/Customerlayout";
import Volume from "../Volume/Volumelayout";
import Today from "../Today/Todaysale";
import Mapping from "../Mapping/Salesmapping";
import Top from "../Top/Toplayout";

function Dashboardlayout() {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-10 grid-rows-8 lg:grid-rows-3 w-full overflow-hidden h-full gap-3 bg-transparent">
        <div className="col-span-1 lg:col-span-6">
          <Today />
        </div>
        <div className="col-span-1 lg:col-span-4">
          <Visitor />
        </div>
        <div className="col-span-1 lg:col-span-4">
          <Total />
        </div>
        <div className="col-span-1 lg:col-span-3">
          <Customer />
        </div>
        <div className="col-span-1 lg:col-span-3">
          <Target />
        </div>
        <div className="col-span-1 lg:col-span-4">
          <Top />
        </div>
        <div className="col-span-1 lg:col-span-3">
          <Mapping />
        </div>
        <div className="col-span-1 lg:col-span-3">
          <Volume />
        </div>
      </div>
    </>
  );
}

export default Dashboardlayout;
