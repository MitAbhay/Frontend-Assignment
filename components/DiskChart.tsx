import { ApexOptions } from "apexcharts";
import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const DiskChart = ({ dataPoints, dataTs }) => {
  const DiskIOPS = {
    series: [
      {
        name: "Read",
        // data: [12, 11, 14, 18, 17, 13, 13],
        data: dataPoints["Disk IOPS"][0],
      },
      {
        name: "Write",
        // data: [10, 13, 17, 15, 9, 8, 20],
        data: dataPoints["Disk IOPS"][1],
      },
    ],
  };

  const options: ApexOptions = {
    chart: {
      height: 350,
      type: "line",
      dropShadow: {
        enabled: true,
        color: "#000",
        top: 18,
        left: 7,
        blur: 10,
        opacity: 0.2,
      },
      toolbar: {
        show: false,
      },
    },
    colors: ["#2563EB", "#DC2626"],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
    },
    title: {
      text: "Disk IOPS",
      align: "left",
    },
    grid: {
      borderColor: "#e7e7e7",
      row: {
        colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
        opacity: 0.5,
      },
    },
    markers: {
      size: 1,
    },
    xaxis: {
      categories: dataTs["Disk IOPS"][0],
    },
    yaxis: {
      min: Math.min(...dataPoints["Disk IOPS"][1]),
      max: Math.max(...dataPoints["Disk IOPS"][0]),
      // min: 5,
      // max: 40,
    },
    legend: {
      position: "top",
      horizontalAlign: "right",
      floating: true,
      offsetY: -25,
      offsetX: -5,
    },
  };

  return (
    <div className="flex justify-around">
      <div className="bg-white rounded-md border border-md border-[#CEE0F8]">
        <ReactApexChart
          width="800px"
          height="400px"
          className="p-4"
          options={options}
          series={DiskIOPS.series}
        />
      </div>
    </div>
  );
};

export default DiskChart;
