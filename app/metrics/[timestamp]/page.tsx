"use client";
import React, { useState, useEffect } from "react";
import Example from "@/components/Charts";
import { MimicMetrics } from "@/api-mimic";
import DefaultLayout from "@/components/DefaultLayout";
import Charts from "@/components/Charts";
import CPUChart from "@/components/CPUChart";
import { useParams } from "next/navigation";

const Metrics = () => {
  const params = useParams();

  const [graphData, setGraphData] = useState([]);
  const [graphName, setGraphName] = useState([]);
  const [lineName, setLineName] = useState([]);
  const [dataPoints, setDataPoints] = useState({});
  const [dataTs, setDataTs] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [start, setStart] = useState(String);
  const [end, setEnd] = useState(String);

  const Fetch = async (startTs, endTs) => {
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

  useEffect(() => {
    const startTs = Date.now() - params.timestamp;
    const endTs = Date.now();
    const limit = 180;
    var start = startTs;
    var d = new Date(start);
    var ds = d.toLocaleString();
    setStart(ds);
    var end = endTs;
    var e = new Date(end);
    var es = e.toLocaleString();
    setEnd(es);

    Fetch(startTs, endTs);
  }, [params.timestamp]);

  // console.log(graphData, "gd");
  // console.log(graphName, "gn");
  // console.log(lineName, "ln");
  // console.log(dataPoints, "dp");
  // // console.log(dataPoints["CPU Usage"][0]);
  console.log(dataTs, "dt");

  return (
    <DefaultLayout>
      {isLoading ? (
        <div className="h-screen flex items-center justify-center">
          Loading....
        </div>
      ) : (
        <Charts
          dataPoints={dataPoints}
          dataTs={dataTs}
          start={start}
          end={end}
        />
      )}
    </DefaultLayout>
  );
};

export default Metrics;
