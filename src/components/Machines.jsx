import React, { useEffect, useState } from "react";
import json_data from "../assets/data.json";

const Machines = () => {
  const [data, setData] = useState([]);
  const [currentOpen, setCurrentOpen] = useState([]);

  const machineOnClick = (index) => {
    if (currentOpen.includes(index)) {
      const temp = currentOpen.filter((curr) => curr !== index);
      setCurrentOpen(temp);
    } else {
      setCurrentOpen([...currentOpen, index]);
    }
  };

  const efficiency = (target, achieved) => {
    return (achieved / target) * 100;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setData(json_data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="">
      <div className="px-20 py-28">
        <div className="flex justify-center gap-10 flex-wrap">
          {data.map((machine, index) => (
            <div onClick={() => machineOnClick(index)}>
              <div
                key={index}
                className="bg-[#f1f1f1] rounded-t-xl border px-20 py-3 shadow-t-xl shadow- hover:scale-105 hover:text-md"
              >
                <h1>{machine.Name}</h1>
              </div>
              <div
                className={
                  currentOpen.includes(index)
                    ? `px-6 py-5 shadow-lg rounded-b-xl z-10 text-[#eef2e2] ${
                        machine.Status === "Running"
                          ? "bg-[#79c2d0]"
                          : efficiency(machine.Target, machine.Achieved) >= 80
                          ? "bg-[#0b8457]"
                          : "bg-[#dc2f2f]"
                      }`
                    : "hidden"
                }
              >
                <div className="flex flex-col gap-3">
                  <h2 className="flex justify-between">
                    <span>Target </span>
                    <span>{machine.Target}</span>
                  </h2>
                  <h2 className="flex justify-between">
                    <span>Achieved </span>
                    <span>{machine.Achieved}</span>
                  </h2>
                  <h2 className="flex justify-between">
                    <span>Efficiency %</span>
                    <span>{efficiency(machine.Target, machine.Achieved)}</span>
                  </h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Machines;
