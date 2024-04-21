import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const NetworkChart = ({ dataPoints, dataTs }) => {
  const networkUsage = {
    series: [
      {
        name: "Used",
        // data: [28, 29, 33, 36, 32, 32, 33],
        data: dataPoints["Network Usage"][0],
      },
      {
        name: "Requested",
        // data: [12, 11, 14, 18, 17, 13, 13],
        data: dataPoints["Network Usage"][1],
      },
      {
        name: "Limits",
        // data: [10, 13, 17, 15, 9, 8, 20],
        data: dataPoints["Network Usage"][2],
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
        text: "Network Usage",
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
        // catgories: ["A", "B"],

        categories: dataTs["Network Usage"][0],
      },
      yaxis: {
        min: Math.min(...dataPoints["Network Usage"][2]),
        max: Math.max(...dataPoints["Network Usage"][0]),
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
          options={networkUsage.options}
          series={networkUsage.series}
        />
      </div>
    </div>
  );
};

export default NetworkChart;
