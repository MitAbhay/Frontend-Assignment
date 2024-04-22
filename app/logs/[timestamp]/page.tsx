"use client";

import React, { useState, useRef, useEffect } from "react";
import { MimicLogs } from "@/api-mimic";
import { useParams } from "next/navigation";
import DefaultLayout from "@/components/DefaultLayout";
import Image from "next/image";

const Logs = () => {
  const params = useParams();
  const [logs, setLogs] = useState<any[]>([]);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [loading, setLoading] = useState(true);
  const terminalRef = useRef(null);
  const [start, setStart] = useState(String);
  const [end, setEnd] = useState(String);
  const [liveLogsCount, setLiveLogsCount] = useState(0);

  useEffect(() => {
    const visibleHandler = () => {
      if (terminalRef.current) {
        const scrolled = terminalRef.current["scrollTop"];
        console.log(scrolled);
        setVisible(scrolled > prevScrollPos);
        setPrevScrollPos(scrolled);
      }
    };

    window.addEventListener("scroll", visibleHandler);
    return () => {
      window.removeEventListener("scroll", visibleHandler);
    };
  }, [prevScrollPos]);

  useEffect(() => {
    const interval = setInterval(() => {
      const startTs = Date.now() - Number(params.timestamp);
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
      setLoading(true);
      MimicLogs.fetchPreviousLogs(startTs, endTs, limit)
        .then((data) => {
          setLogs(data.slice().reverse());
          setLiveLogsCount(data.length);
          // console.log(data);
          setLoading(false);
          if (visible) {
            scrollToBottom();
          }
        })
        .catch((error) => {
          console.error("Error fetching logs", error);
          setLoading(false);
        });
    }, 2000);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.timestamp]);

  const scrollToBottom = () => {
    if (terminalRef.current) {
      terminalRef.current["scrollTop"] = terminalRef.current["scrollHeight"];
    }
  };

  return (
    <DefaultLayout>
      <div className="">
        <h1 className="p-2 text-sm text-right ">
          Showing logs for {start} → {end}
        </h1>
        <div className="flex justify-center items-center bg-gray-800 text-sm rounded-t-md text-gray-400 text-center mt-0 p-1 gap-2">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="8" cy="8" r="7" stroke="#4F46E5" strokeWidth="2" />
            <path
              d="M11.4341 15.2255C10.1978 15.813 8.83143 16.0736 7.46569 15.9821C6.09995 15.8907 4.78051 15.4504 3.63358 14.7033C2.48664 13.9562 1.55058 12.9273 0.914935 11.7151C0.279285 10.5028 -0.0346906 9.14776 0.00303983 7.77948C0.0407703 6.41121 0.428945 5.07549 1.13043 3.90012C1.83192 2.72473 2.82326 1.749 4.00962 1.06625C5.19598 0.383499 6.53768 0.0165648 7.90639 0.000547723C9.27509 -0.0154693 10.625 0.319966 11.827 0.974769L10.8699 2.7317C9.96853 2.24065 8.95621 1.9891 7.9298 2.00112C6.90339 2.01313 5.89723 2.28829 5.00757 2.8003C4.1179 3.3123 3.37449 4.04402 2.84843 4.92545C2.32238 5.80688 2.03128 6.80854 2.00298 7.83463C1.97469 8.86072 2.21014 9.8769 2.68683 10.786C3.16351 11.6951 3.86547 12.4666 4.72557 13.0269C5.58567 13.5871 6.57513 13.9173 7.59932 13.9859C8.6235 14.0545 9.64815 13.8591 10.5752 13.4185L11.4341 15.2255Z"
              fill="#E0ECFD"
            />
          </svg>
          Loading previous {liveLogsCount} logs
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
              <div key={i} className="flex">
                <li
                  className="text-white flex border-l-2 border-x-cyan-500 my-2"
                  key={i}
                >
                  <div className="grid grid-flow-col gap-5 ml-2">
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
