import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const CPUChart = ({ dataPoints, dataTs }) => {
  const cpuData = {
    series: [
      {
        name: "Used",
        data: dataPoints["CPU Usage"][0],
      },
      {
        name: "Requested",
        data: dataPoints["CPU Usage"][1],
      },
      {
        name: "Limits",
        data: dataPoints["CPU Usage"][2],
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
        text: "CPU Usage",
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
        categories: dataTs["CPU Usage"][0],
      },
      yaxis: {
        // min: 0,
        // max: 100,
        min: Math.min(...dataPoints["CPU Usage"][2]),
        max: Math.max(...dataPoints["CPU Usage"][0]),
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
          options={cpuData.options}
          series={cpuData.series}
        />
      </div>
    </div>
  );
};

export default CPUChart;
