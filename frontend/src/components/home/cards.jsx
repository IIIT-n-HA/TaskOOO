import React from "react";
import { CiHeart } from "react-icons/ci";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { RiAddCircleFill } from "react-icons/ri";

const Cards = ({ home }) => {
  const data = [
    {
      title: "Projects",
      desc: "To be done within deadline",
      status: "Complete",
    },
    {
      title: "Assignments",
      desc: "Pending assignments",
      status: "Incomplete",
    },
  ];

  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      {data &&
        data.map((items, i) => (
          <div className="bg-gray-800 rounded-xl p-4 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold">{items.title}</h3>
              <p className="text-gray-300 my-2">{items.desc}</p>
            </div>
            <div className="mt-4 w-full flex items-center gap-2">
              <button
                className={` ${
                  items.status === "Incomplete" ? "bg-red-400" : "bg-green-700"
                } p-2 rounded w-3/6`}
              >
                {items.status}
              </button>
              <div className="text-white p-2 w-3/6 text-xl flex justify-around">
                <button>
                  <CiHeart />
                </button>
                <button>
                  <FaEdit />
                </button>
                <button>
                  <MdDelete />
                </button>
              </div>
            </div>
          </div>
        ))}
      {home === "true" && (
        <div className="flex flex-col justify-center items-center bg-gray-800 rounded-sm p-4 text-gray-300 hover:scale-105 hover:cursor-pointer transition-all duration-300">
          <RiAddCircleFill className="text-5xl" />
          <h2 className="text-2xl mt-4">Add Task</h2>
        </div>
      )}
    </div>
  );
};

export default Cards;