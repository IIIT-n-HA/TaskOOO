import React from "react";
import Sidebar from "../components/home/sidebar";

const Home = () => {
  return (
    <div className="flex h-[98vh] gap-4">
      <div className="w-1/6 border border-gray-500 rounded-xl p-4 flex flex-col justify-between bg-purple-400">
        <Sidebar />
      </div>
      <div className="w-5/6 border border-gray-500 rounded-xl p-4">hello</div>
    </div>
  );
};

export default Home;
