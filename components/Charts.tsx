"use client";
import React from "react";
import CPUChart from "./CPUChart";
import MemoryChart from "./MemoryChart";
import NetworkChart from "./NetworkChart";
import DiskChart from "./DiskChart";

const Charts = ({ dataPoints, dataTs }) => {
  return (
    <>
      <div className=" m-2 mt-3 rounded-md  border border-[#CEE0F8]  ">
        <div className="flex bg-white mt-2 m-4 ">
          <h1 className="text-xl font-bold mr-2 ">Metrics</h1>
          <h4 className="p-1">edd</h4>
        </div>
        <hr className="text-[#CEE0F8]" />
        <div className="grid grid-flow-row grid-row-4 gap-4  rounded-t-none rounded-md p-2 border-slate-400 bg-[#CEE0F8] ">
          <div className="flex justify-around">
            <CPUChart dataPoints={dataPoints} dataTs={dataTs} />
            <MemoryChart dataPoints={dataPoints} dataTs={dataTs} />
          </div>

          <div className="flex justify-around">
            <NetworkChart dataPoints={dataPoints} dataTs={dataTs} />
            <DiskChart dataPoints={dataPoints} dataTs={dataTs} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Charts;
