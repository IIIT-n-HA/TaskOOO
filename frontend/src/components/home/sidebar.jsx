import React from "react";

const Sidebar = () => {
  const data = [
    {
      title: "All tasks",
    },
    {
      title: "Important tasks",
    },
    {
      title: "Completed tasks",
    },
    {
      title: "Incomplete tasks",
    },
  ];
  return (
    <>
      <div>
        <h2 className="text-xl font-semibold">Task Management</h2>
        <h4 className="my-1 text-gray-600">id@gmail.com</h4>
        <hr />
      </div>
      <div>
        {data.map((items, i) => (
          <div className="my-2">{items.title}</div>
        ))}
      </div>
      <div>
        <button className="bg-gray-500 w-full p-2 rounded">Log Out</button>
      </div>
    </>
  );
};

export default Sidebar;
