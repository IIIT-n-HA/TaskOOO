import React from "react";
import { CgClose } from "react-icons/cg";

const InputData = () => {
  return (
    <>
      <div className="fixed top-0 left-0 bg-gray-800 opacity-80 h-screen w-full"></div>
      <div className="fixed top-0 left-0 flex items-center justify-center h-screen w-full">
        <div className="w-2/6 bg-gray-900 p-4 rounded">
          <div className="flex justify-end">
            <button className="text-2xl">
              <CgClose />
            </button>
          </div>
          <input
            type="text"
            placeholder="Title"
            name="title"
            className="px-3 py-2 rounded w-full my-3"
          />
          <textarea
            name="desc"
            cols={30}
            rows={10}
            placeholder="Enter the description"
            className="px-3 py-2 rounded w-full mt-2"
          ></textarea>
          <button className="px-3 py-2 bg-blue-400 rounded text-black text-xl font-semibold">
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default InputData;
