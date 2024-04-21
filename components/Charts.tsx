"use client";
import React from "react";
import CPUChart from "./CPUChart";
import MemoryChart from "./MemoryChart";
import NetworkChart from "./NetworkChart";
import DiskChart from "./DiskChart";

const Charts = ({ dataPoints, dataTs, start, end }) => {
  return (
    <>
      <div className=" m-2 mt-3 rounded-md  border border-[#CEE0F8]  ">
        <div className="flex items-center bg-white mt-2 m-4 ">
          <div className="text-2xl font-extrabold mr-2 ">Metrics</div>
          <div className="p-1 text-sm">
            {start} → {end}
          </div>
        </div>
        <hr className="text-[#CEE0F8]" />
        <div className="grid grid-flow-row grid-row-4 gap-4  rounded-t-none rounded-md p-2 border-slate-400 bg-[#eff8ff] ">
          <div className="md:flex justify-evenly">
            <CPUChart dataPoints={dataPoints} dataTs={dataTs} />
            <MemoryChart dataPoints={dataPoints} dataTs={dataTs} />
          </div>
          <div className="md:flex justify-evenly">
            <NetworkChart dataPoints={dataPoints} dataTs={dataTs} />
            <DiskChart dataPoints={dataPoints} dataTs={dataTs} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Charts;
