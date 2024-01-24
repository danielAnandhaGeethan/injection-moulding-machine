import React, { useEffect, useState } from "react";
import json_data from "../assets/data.json";
import MachineOdd from "./MachineOdd";
import MachineEven from "./MachineEven";

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
    const x = (achieved / target) * 100;

    return x.toFixed(2);
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
      <div className="px-10 py-10 md:px-20 md:py-20">
        <div className="grid xs:grid-cols-1 md:grid-cols-2 gap-10 md:gap-28 lg:flex lg:flex-col lg:items-center lg:gap-42">
          {data.map((machine, index) =>
            machine.id % 2 === 1 ? (
              <MachineOdd
                key={index}
                index={index}
                machineOnClick={machineOnClick}
                machine={machine}
                efficiency={efficiency}
                currentOpen={currentOpen}
              />
            ) : (
              <MachineEven
                key={index}
                index={index}
                machineOnClick={machineOnClick}
                machine={machine}
                efficiency={efficiency}
                currentOpen={currentOpen}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Machines;
