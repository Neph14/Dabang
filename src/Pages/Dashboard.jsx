import React from "react";
import img from "../Components/Assets/Icon (2).png";
import img2 from "../Components/Assets/Icon.png";
const Dashboard = () => {
  return (
    <div className=" h-screen bg-white ">
      <h1 className="text-xl font-medium ">Dashboard</h1>
      <div className="grid grid-cols-1  md:grid-cols-3 pt-5 ">
        <div className="md:col-span-2 bg-gray-300 pb-5 pr-5 border-b-2  md:border-b-2 md:border-r-2">
          {/* <Chart /> */}
        </div>
        <div className="md:border-b-2 border-b-2 bg-gray-500">
          {/* <Donat /> */}
        </div>
        <div className="md:border-r-2 p-4 border-b-2 ">
          <h1> Your Rating</h1>
          <h1 className="opacity-50">Adipiscing elit, sed do eiusmod tempor</h1>
          <img src={img} alt="" className="pt-6" />
        </div>
        <div className="md:border-r-2 p-4 border-b-2 ">
          <div className="pl-6">
            <h1> Most Ordered Food</h1>
            <h1 className="opacity-50">
              Adipiscing elit, sed do eiusmod tempor
            </h1>
          </div>
          <div>
            <img src={img2} alt="" className="w-full bg-cover" />
          </div>
        </div>
        <div className="p-3 border-b-2 bg-gray-700">{/* <Order /> */}</div>
      </div>
    </div>
  );
};

export default Dashboard;
