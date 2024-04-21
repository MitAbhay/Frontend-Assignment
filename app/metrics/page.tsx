"use client";
import React, { useState, useEffect } from "react";
import Example from "@/components/Charts";
import { MimicMetrics } from "@/api-mimic";
import DefaultLayout from "@/components/DefaultLayout";
import Charts from "@/components/Charts";
import CPUChart from "@/components/CPUChart";

const Metrics = () => {
  const [graphData, setGraphData] = useState([]);
  const [graphName, setGraphName] = useState([]);
  const [lineName, setLineName] = useState([]);
  const [dataPoints, setDataPoints] = useState({});
  const [dataTs, setDataTs] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const startTs = Date.now() - 5 * 60 * 1000;
  const endTs = Date.now();

  useEffect(() => {
    const Fetch = async () => {
      try {
        const data = await MimicMetrics.fetchMetrics({
          startTs,
          endTs,
        });
        setGraphData(data);
        if (data?.length > 0) {
          setGraphName(data.map((graph) => graph.name));
          setLineName(
            data.map((graph) => graph.graphLines.map((line) => line.name))
          );
          setDataPoints(
            data.reduce((acc, graph) => {
              acc[graph.name] = graph.graphLines.map((line) =>
                line.values.map((point) => point.value)
              );

              return acc;
            }, {})
          );
          setDataTs(
            data.reduce((acc, graph) => {
              acc[graph.name] = graph.graphLines.map((line) =>
                line.values.map((point) => point.timestamp)
              );

              return acc;
            }, {})
          );
          setIsLoading(false);
        }
      } catch (error) {
        console.log("error fetching graphData", error);
      }
    };
    Fetch();
  }, [startTs, endTs]); // Ensure useEffect runs whenever startTs or endTs changes

  console.log(graphData, "gd");
  console.log(graphName, "gn");
  console.log(lineName, "ln");
  console.log(dataPoints, "dp");
  // console.log(dataPoints["CPU Usage"][0]);
  console.log(dataTs, "dt");

  return (
    <DefaultLayout>
      {isLoading ? (
        <div className="h-screen flex items-center justify-center">
          Loading....
        </div>
      ) : (
        <Charts
          // graphData={graphData}
          // graphName={graphName}
          // lineName={lineName}
          dataPoints={dataPoints}
          dataTs={dataTs}
        />
      )}
    </DefaultLayout>
  );
};

export default Metrics;
