import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const MemoryChart = ({ dataPoints, dataTs }) => {
  const memoryUsage = {
    series: [
      {
        name: "Used",
        data: dataPoints["Memory Usage"][0],
        // data: [10, 2, 4, 5, 6, 7, 8],
      },
      {
        name: "Requested",
        data: dataPoints["Memory Usage"][1],
        // data: [10, 2, 4, 5, 6, 7, 8],
      },
      {
        name: "Limits",
        data: dataPoints["Memory Usage"][2],
        // data: [10, 2, 4, 5, 6, 7, 8],
      },
    ],
    options: {
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
      colors: ["#DC2626", "#2563EB", "#059669"],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
      },
      title: {
        text: "Memory Usage",
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
        categories: dataTs["Memory Usage"][0],
        // categories: ["a", "b", "c"],
      },
      yaxis: {
        min: Math.min(...dataPoints["Memory Usage"][2]),
        max: Math.max(...dataPoints["Memory Usage"][0]),
        // min: 0,
        // max: 100,
      },
      legend: {
        position: "top",
        horizontalAlign: "right",
        floating: true,
        offsetY: -25,
        offsetX: -5,
      },
    },
  };

  return (
    <div className="flex justify-around">
      <div className="bg-white rounded-md border border-md border-[#CEE0F8]">
        <ReactApexChart
          width="800px"
          height="400px"
          className="p-4"
          options={memoryUsage.options}
          series={memoryUsage.series}
        />
      </div>
    </div>
  );
};

export default MemoryChart;
