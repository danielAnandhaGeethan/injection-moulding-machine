import React from "react";

const Shift = ({ index, shift_data, efficiency }) => {
  return (
    <div
      className={`${
        shift_data.Status === "Running"
          ? "bg-gray-800"
          : efficiency(shift_data.Target, shift_data.Achieved) >= 80
          ? "bg-green-600"
          : "bg-red-600"
      } py-5 px-5 w-48 rounded-xl flex flex-col gap-3`}
    >
      <h1 className="font-bold text-white text-center text-sm">
        Shift {index + 1}
      </h1>
      <div className="flex flex-col gap-1">
        <h1 className="flex justify-between text-sm">
          <span className="text-white">Target </span>
          <span className="text-white">{shift_data.Target}</span>
        </h1>
        <h1 className="flex justify-between text-sm">
          <span className="text-white">Achieved </span>
          <span className="text-white">{shift_data.Achieved}</span>
        </h1>
        <h1 className="flex justify-between text-sm">
          <span className="text-white">Efficiency</span>
          <span className="text-white">
            {efficiency(shift_data.Target, shift_data.Achieved)} %
          </span>
        </h1>
        <h1 className="flex justify-between text-sm gap-4">
          <span className="text-white">Remarks </span>
          <span className="text-white">This is not very at all good</span>
        </h1>
      </div>
    </div>
  );
};

export default Shift;
