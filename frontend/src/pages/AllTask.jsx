import React, { useState } from "react";
import Cards from "../components/home/cards";
import { RiAddCircleFill } from "react-icons/ri";
import InputData from "../components/home/InputData";

const AllTask = () => {
  const [inputDiv, setInputDiv] = useState("hidden");
  return (
    <div>
      <div className="w-full flex justify-end px-4 py-2">
        <button onClick={() => setInputDiv("fixed")}>
          <RiAddCircleFill className="text-4xl text-gray-400 hover:text-gray-100 transition-all duration-300" />
        </button>
      </div>
      <Cards home={"true"} SetDiv={setInputDiv} />
      <InputData InputDiv={inputDiv} SetDiv={setInputDiv} />
    </div>
  );
};

export default AllTask;
