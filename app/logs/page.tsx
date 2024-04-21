"use client";

import React, { useState, useRef, useEffect } from "react";
import { MimicLogs } from "@/api-mimic";
import { useParams } from "next/navigation";
import DefaultLayout from "@/components/DefaultLayout";

const Logs = () => {
  const params = useParams();
  console.log(params.timestamp);
  const [logs, setLogs] = useState([]);
  const [visible, setVisible] = useState(true);
  const [loading, setLoading] = useState(true);
  const terminalRef = useRef(null);

  useEffect(() => {
    const visibleHandler = () => {
      if (terminalRef.current) {
        const scrolled = terminalRef.current.scrollTop;
        setVisible(scrolled <= 0);
      }
    };

    window.addEventListener("scroll", visibleHandler);
    return () => {
      window.removeEventListener("scroll", visibleHandler);
    };
  }, []);

  useEffect(() => {
    const startTs = Date.now() - params.timestamp;
    const endTs = Date.now();
    const limit = 180;

    setLoading(true);
    MimicLogs.fetchPreviousLogs({ startTs, endTs, limit })
      .then((data) => {
        setLogs(data);
        setLoading(false);
        scrollToBottom();
      })
      .catch((error) => {
        console.error("Error fetching logs", error);
        setLoading(false);
      });
  }, [params.timestamp]);

  const scrollToBottom = () => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  };

  return (
    <DefaultLayout>
      <div className="">
        <h1 className="p-2 text-sm text-right ">Showing logs for</h1>
        <div className="bg-gray-800 text-sm rounded-t-md text-gray-400 text-center mt-0 p-1">
          Loading previous logs
        </div>
        <div
          id="terminal"
          ref={terminalRef}
          className="bg-gray-900 rounded-t-none rounded-md mb-0 p-2 h-[80vh]  overscroll-none overflow-y-scroll "
        >
          {logs.map(function (index, i) {
            var logdate = index.timestamp;
            var date = new Date(logdate);
            var datest = date.toLocaleString();
            return (
              <div key={index} className="flex">
                <li className="text-white flex" key={i}>
                  <div className="grid grid-flow-col gap-5">
                    <p className="text-xs text-gray-600 mt-2 mb-2">{datest}</p>
                    <p className="text-sm mb-2 mt-2 text-gray-400 ">
                      {index.message}
                    </p>
                  </div>
                </li>
              </div>
            );
          })}

          {visible && (
            <button
              className="fixed bottom-16 right-16  bg-indigo-700 text-white font-bold py-2 px-4 rounded"
              onClick={scrollToBottom}
            >
              New Logs ↓
            </button>
          )}
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Logs;
