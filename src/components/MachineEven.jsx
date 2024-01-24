import React from "react";
import Shift from "./Shift";

const MachineEven = ({
  index,
  machineOnClick,
  machine,
  efficiency,
  currentOpen,
}) => {
  return (
    <div
      onClick={() => machineOnClick(index)}
      className="flex flex-col md:flex-row items-center md:justify-center h-full gap-3"
      key={index}
    >
      <div
        className={`${
          currentOpen.includes(index)
            ? "bg-white bg-opacity-20 px-8 py-2 flex flex-col relative lg:flex-row gap-10 md:gap-28 xl:gap-42 shadow-md border rounded-xl"
            : "opacity-0 absolute pointer-events-none"
        } transition-transform transition-opacity duration-1000 ease-in-out`}
      >
        {machine.Data.map((shift, index) => (
          <Shift
            key={index}
            index={index}
            shift_data={shift}
            efficiency={efficiency}
          />
        ))}
      </div>
      <div className="bg-white border shadow-md shadow-gray-600 hover:scale-105 rounded-xl flex items-center h-[191px] order-first md:order-last">
        <div className="bg-gray-400 py-10 px-5 mx-3 rounded-xl bg-opacity-80 border-2 border-gray-500">
          <h1 className="text-xl text-white">{machine.Name}</h1>
        </div>
      </div>
    </div>
  );
};

export default MachineEven;
